import { component$ } from '@builder.io/qwik'
import cn from 'classnames'
import { getWeeks } from '~/lib/getWeeks'
import { DAYS_OF_WEEK } from '~/lib/const'
import type { Release } from '~/domain/release'
import { ReleaseCard } from './ReleaseCard'

type Props = {
  releases: Release[]
  month: number
  year: number
}

export const Calendar = component$<Props>(({ releases, month, year }) => {
  const weeks = getWeeks(year, month)
  const groupedReleases = releases.reduce<Record<string, Release[]>>(
    (acc, curr) => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (acc[curr.releasedAt]) {
        acc[curr.releasedAt].push(curr)
      } else {
        acc[curr.releasedAt] = [curr]
      }

      return acc
    },
    {}
  )

  return (
    <div class="relative select-none">
      <div class="hidden gap-4 xl:grid xl:gap-5 2xl:gap-8 grid-cols-7 mb-2 justify-items-center">
        {DAYS_OF_WEEK.map(weekDay => (
          <div key={weekDay}>{weekDay}</div>
        ))}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-5 2xl:gap-8 xl:grid-cols-7 auto-rows-calendar-tile">
        {weeks.map((day, index) => {
          const isDayInCurrentMonth = typeof day === 'string'
          const hasReleases = Boolean(day && groupedReleases[day])

          return (
            <div
              class={cn('rounded-xl relative', {
                'bg-calendar-tile': isDayInCurrentMonth,
                'hidden xl:block': !isDayInCurrentMonth,
              })}
              key={index}>
              {isDayInCurrentMonth && (
                <>
                  <div class="absolute text-xs/none w-9 px-2 py-1 text-center top-2 left-2 bg-calendar-day rounded-xl">
                    {new Date(day).getDate()}
                  </div>
                  {hasReleases ? (
                    <div class="relative grid h-full auto-rows-fr overflow-hidden gap-2 rounded-xl xl:bg-neumorphic-bg xl:shadow-neumorphic">
                      {groupedReleases[day].map(release => (
                        <ReleaseCard key={release.id} {...release} />
                      ))}
                    </div>
                  ) : null}
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
})
