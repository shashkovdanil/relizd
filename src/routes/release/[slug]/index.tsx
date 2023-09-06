import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { parseReleaseUrlParams } from '~/lib/parseReleaseUrlParams'
import { getRelease } from '~/services/api'
import { Header } from '~/components/Header'
import cn from 'classnames'

export const useData = routeLoader$(async params => {
  const { type, id } = parseReleaseUrlParams(params.params.slug)

  const releaseDetails = await getRelease(type, id)

  return releaseDetails
})

function getRatingColor(rating: number) {
  if (rating >= 7) {
    return 'text-green-400'
  }

  if (rating >= 5 && rating < 7) {
    return 'text-yellow-400'
  }

  if (rating < 5) {
    return 'text-red-400'
  }

  return ''
}

export default component$(() => {
  const {
    value: {
      backdrop,
      title,
      description,
      poster,
      genres,
      releasedAt,
      rating,
      ratingCount,
      imdbUrl,
    },
  } = useData()

  return (
    <>
      <Header />
      <main class="px-4 md:px-8 min-h-[calc(100%_-_250px)]">
        <div class="flex justify-between items-start gap-3 max-w-6xl mx-auto">
          <div class="max-w-2xl">
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">
              {releasedAt}
            </p>
            <h1 class="text-4xl md:text-7xl font-black mb-8 text-balance">{title}</h1>
            <ul class="flex flex-wrap gap-2 mb-6">
              {genres.map(genre => (
                <li
                  key={genre}
                  class="dark:bg-gray-700 bg-gray-300 px-2.5 py-1 rounded-lg text-sm dark:text-white text-black">
                  {genre}
                </li>
              ))}
            </ul>
            {rating && rating > 0 ? (
              <div class="mb-6">
                <span
                  class={cn('text-4xl font-black', {
                    [getRatingColor(rating)]: true,
                  })}>
                  {rating}
                </span>
                <span class="text-sm text-gray-700 dark:text-gray-300 ml-2">
                  {ratingCount} votes
                </span>
              </div>
            ) : null}
            {imdbUrl && (
              <a
                href={imdbUrl}
                target="_blank"
                class="bg-yellow-500 text-lg rounded-md py-1 px-2 text-black font-black mb-6 inline-block">
                IMDb
              </a>
            )}
            <p class="max-w-xl text-lg/relaxed">{description}</p>
          </div>
          {poster ? (
            <img
              src={poster}
              width={400}
              height={10}
              class="hidden lg:block rounded-lg drop-shadow"
            />
          ) : null}
        </div>
      </main>
      <div class="absolute -z-10 top-0 left-0 w-full h-full">
        <div class="h-80">
          <div class="relative h-80">
            <img
              src={backdrop}
              width={0}
              height={0}
              class="w-full h-full object-cover"
            />
            <div class="absolute -top-[640px] w-full h-[960px] bg-gradient-to-t from-white dark:from-main-bg" />
          </div>
        </div>
      </div>
    </>
  )
})
