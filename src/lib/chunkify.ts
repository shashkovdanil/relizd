export function chunkify<T>(
  array: T[],
  chunkSize: number
) {
  const chunks = Array.from(
    { length: Math.ceil(array.length / chunkSize) },
    (_, i) => {
      const start = chunkSize * i

      const chunk = array.slice(start, start + chunkSize)

      if (chunk.length < chunkSize) {
        const fillers: undefined[] = Array.from({ length: chunkSize - chunk.length })

        return [...chunk, ...fillers]
      }

      return array.slice(start, start + chunkSize)
    }
  )

  return chunks
}
