export const get = async () => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search")
  const cat = await res.json()
  return {
    body: {
      cat
    }
  }
}