import { component$ } from '@builder.io/qwik'
import { Logo } from './Logo'

export const Header = component$(() => {
  return (
    <header class="px-4 py-4 mb-5 md:px-8 flex items-center justify-between">
      <Logo />
    </header>
  )
})
