import { component$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import { Logo } from './Logo'
import { getAdjacentMonthDetails } from '~/lib/getAdjacentMonthDetails'
import IconArrow from '~/media/icons/arrow.svg?jsx'

export const HeaderWithNav = component$(() => {
  const {
    url: { pathname },
  } = useLocation()

  const { current, next, prev, type } = getAdjacentMonthDetails(pathname)

  return (
    <header class="px-4 py-4 mb-5 md:px-8 flex items-center justify-between">
      <Logo />
      <div class="fixed left-0 bottom-0 mb-4 mx-4 bg-gray-100 text-black py-2 px-4 z-20 rounded-lg flex gap-4 items-center drop-shadow md:static md:mb-0 md:mx-0">
        <a
          class="font-bold capitalize text-lg hover:bg-white/80 transition-all py-0.5 px-2 rounded-md"
          href={`/${type}/${prev.month}-${prev.year}`}
          aria-label="To prev month">
          <IconArrow class="fill-black h-6 w-6" />
        </a>
        <p class="font-bold capitalize text-lg text-center w-40">
          {current.month}{' '}
          <span class="font-thin tracking-wider">{current.year}</span>
        </p>
        <a
          class="font-bold capitalize text-lg hover:bg-white/80 transition-all py-0.5 px-2 rounded-md"
          href={`/${type}/${next.month}-${next.year}`}
          aria-label="To next month">
          <IconArrow class="fill-black h-6 w-6 rotate-180" />
        </a>
      </div>
    </header>
  )
})
