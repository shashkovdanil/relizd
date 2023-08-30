import { component$, Slot } from '@builder.io/qwik'

export const Tag = component$(() => {
  return (
    <span class="py-0.5 px-2 rounded-xl cursor-default font-bold text-xs/none bg-pink text-black">
      <Slot />
    </span>
  )
})
