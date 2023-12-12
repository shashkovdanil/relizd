import { component$, useSignal } from '@builder.io/qwik'
import format from 'date-fns/format'
import cn from 'classnames'
import slugify from '@sindresorhus/slugify'
import type { Release } from '~/domain/release'
import IconStar from '~/media/icons/star.svg?jsx'

export const ReleaseCard = component$<Release>(
  ({ type, id, releasedAt, cover, title, rating, isUpcoming }) => {
    const isBrokenImage = useSignal(false)
    const ratingNumber = Number(rating?.match(/\d+(\.\d+)?/)?.[0])

    return (
      <a
        href={`/release/${id}-${type}-${slugify(title)}`}
        class="swiper-slide relative h-full group">
        <div class="absolute top-0 z-10 p-4">
          <div class="font-bold rounded-xl py-1 px-2 text-sm/none bg-white/80 text-black">
            {format(new Date(releasedAt), 'EEEEEE, d MMM')}
          </div>
        </div>
        <div class="relative h-full overflow-hidden group-hover:opacity-70 transition-opacity duration-300">
          {isBrokenImage.value || !cover ? (
            <div class="w-full h-full group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              {title}
            </div>
          ) : (
            <img
              class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              src={cover}
              width={500}
              height={500}
              onError$={() => {
                isBrokenImage.value = true
              }}
            />
          )}
          <div class="absolute top-0 w-full h-full bg-release-card-cover-gradient" />
        </div>
        <div class="absolute bottom-0 z-10 p-4 w-full flex flex-col gap-2">
          <p
            class="font-bold text-base/tight line-clamp-3 drop-shadow-md text-white"
            title={title}>
            {title}
          </p>
          {!isUpcoming && rating && (
            <div
              class={cn(
                'px-2 py-0.5 rounded-md w-fit font-medium flex gap-1 items-center text-white',
                {
                  'bg-green-400/40': ratingNumber >= 7,
                  'bg-yellow-400/40': ratingNumber >= 5 && ratingNumber < 7,
                  'bg-red-400/40': ratingNumber < 5,
                }
              )}>
              <IconStar class="fill-white w-4 h-4" />
              {rating}
            </div>
          )}
        </div>
      </a>
    )
  }
)
