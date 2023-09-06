export async function request<T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(input, init)

    if (!response.ok) {
      throw new Error(
        `Something went wrong while loading data. Error ${response.status}: ${response.statusText}`
      )
    }

    return response.json()
  } catch (error) {
    console.error('Fetch error:', error)
    throw new Error(
      'Something went wrong while loading data. Please try again later.'
    )
  }
}
