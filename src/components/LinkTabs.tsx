import { component$ } from '@builder.io/qwik'
import cn from 'classnames'

type Props = {
  data: { name: string; href: string; active: boolean }[]
}

export const LinkTabs = component$<Props>(({ data }) => {
  return (
    <div class="flex gap-3 text-2xl/none md:text-4xl/none font-bold">
      {data.map(link => (
        <a
          key={link.href}
          href={link.href}
          class={cn(
            'transition-opacity hover:opacity-100',
            {
              'opacity-100': link.active,
              'opacity-40': !link.active,
            }
          )}>
          {link.name}
        </a>
      ))}
    </div>
  )
})
