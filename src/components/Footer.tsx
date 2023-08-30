import { component$ } from '@builder.io/qwik'

export const Footer = component$(() => {
  return (
    <footer class="px-4 py-4 mb-5 md:px-8">
      <p class="mb-2 text-lg">
        Made by{' '}
        <a
          class="text-pink"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shashkovdanil">
          Danil Shashkov
        </a>
      </p>
      <p class="mb-2 text-lg">
        Made with{' '}
        <a
          class="text-pink"
          target="_blank"
          rel="noopener noreferrer"
          href="https://rawg.io/">
          RAWG API
        </a>{' '}
        and{' '}
        <a
          class="text-pink"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.themoviedb.org/">
          TMDB API
        </a>
      </p>
      <p class="text-lg">Relizd, {new Date().getFullYear()}</p>
    </footer>
  )
})
