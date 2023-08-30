import { component$ } from '@builder.io/qwik'

export const Logo = component$(() => {
  return (
    <a href="/" class="relative flex font-logo text-5xl/none">
      <p class="absolute animate-glitch-1 left-1 text-pink">relizd</p>
      <p class="animate-glitch-skew">relizd</p>
      <p class="absolute animate-glitch-2 -left-1 drop-shadow-logo">relizd</p>
    </a>
  )
})
