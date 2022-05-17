export const get = async () => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=9")
  const cats = await res.json()
  return {
    body: {
      cats
    }
  }
}