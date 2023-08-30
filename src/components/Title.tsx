import type { HTMLAttributes } from '@builder.io/qwik'
import { component$, Slot } from '@builder.io/qwik'
import cn from 'classnames'

type Levels = 1 | 2 | 3 | 4 | 5 | 6

interface Props extends Omit<HTMLAttributes<HTMLHeadingElement>, 'class'> {
  level: Levels
}

export const Title = component$<Props>(({ level, ...rest }) => {
  const Tag = `h${level}` as const

  return (
    <Tag
      class={cn('font-black', {
        'text-4xl md:text-5xl/tight': level === 1,
        'text-base': level === 4,
        'text-lg': level === 3,
        'text-sm': level === 5,
        'text-xl': level === 2,
        'text-xs': level === 6,
      })}
      {...rest}>
      <Slot />
    </Tag>
  )
})
