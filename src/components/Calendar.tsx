import { component$, useVisibleTask$ } from '@builder.io/qwik'
import cn from 'classnames'
import { getWeeks } from '~/lib/getWeeks'
import { DAYS_OF_WEEK } from '~/lib/const'
import type { Release } from '~/domain/release'
import { ReleaseCard } from './ReleaseCard'
import Swiper from 'swiper'
import { Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'

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

  useVisibleTask$(() => {
    new Swiper('.swiper', {
      direction: 'horizontal',
      loop: false,
      modules: [Scrollbar],
      scrollbar: {
        el: '.swiper-scrollbar',
        horizontalClass: 'swiper-scrollbar-horizontal',
      },
      enabled: false,
      breakpoints: {
        768: {
          enabled: true,
        },
      },
    })
  })

  return (
    <div class="relative select-none">
      <div class="hidden gap-4 xl:grid xl:gap-5 2xl:gap-8 grid-cols-7 mb-2 justify-items-center">
        {DAYS_OF_WEEK.map(weekDay => (
          <div key={weekDay}>{weekDay}</div>
        ))}
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-5 2xl:gap-8 xl:grid-cols-7 auto-rows-calendar-tile">
        {weeks.map((day, index) => {
          const isDayInCurrentMonth = typeof day === 'string'
          const hasReleases = Boolean(day && groupedReleases[day])
          const moreThanOneRelease = Boolean(
            hasReleases && day && groupedReleases[day].length > 1
          )

          return (
            <div
              class={cn('rounded-xl relative', {
                'bg-gray-200 dark:bg-white/10': isDayInCurrentMonth,
                'hidden xl:block': !isDayInCurrentMonth,
              })}
              key={index}>
              {isDayInCurrentMonth && (
                <>
                  <div class="absolute text-xs/none w-9 px-2 py-1 text-center top-4 left-4 font-bold bg-gray-300 text-black rounded-xl">
                    {new Date(day).getDate()}
                  </div>
                  {hasReleases ? (
                    <div
                      class={cn('rounded-xl h-full overflow-hidden', {
                        swiper: moreThanOneRelease,
                      })}>
                      <div
                        class={cn(
                          'relative grid auto-rows-fr gap-4 md:flex md:gap-0 h-full bg-white dark:bg-main-bg',
                          {
                            'swiper-wrapper': moreThanOneRelease,
                          }
                        )}>
                        {groupedReleases[day].map(release => (
                          <ReleaseCard key={release.id} {...release} />
                        ))}
                      </div>
                      {moreThanOneRelease ? (
                        <div class="swiper-scrollbar swiper-scrollbar-horizontal scale-90"></div>
                      ) : null}
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
