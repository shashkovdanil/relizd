import { component$, useSignal } from '@builder.io/qwik'
import format from 'date-fns/format'
import type { Release } from '~/domain/release'
import { Tag } from './Tag'

export const ReleaseCard = component$<Release>(
  ({ id, releasedAt, cover, title, rating, isUpcoming }) => {
    const isBrokenImage = useSignal(false)

    return (
      <a href={`/release/${id}`} class="relative group">
        <div class="absolute top-0 z-10 p-2">
          <div class="font-bold drop-shadow-lg rounded-xl py-1 px-2 text-sm/none bg-pink text-black">
            {format(new Date(releasedAt), 'EEEEEE, d MMM')}
          </div>
        </div>
        <div class="relative h-full overflow-hidden group-hover:opacity-70 transition-opacity duration-300">
          {isBrokenImage.value ? (
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
        <div class="absolute bottom-0 z-10 p-2">
          <p class="font-bold text-xl/normal line-clamp-3 drop-shadow-md">{title}</p>
          {!isUpcoming && rating > 0 && <Tag>Rating {rating}</Tag>}
        </div>
      </a>
    )
  }
)
