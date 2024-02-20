import axios from "axios"

const getImages = async (term) => {
  const res = await axios.get("https://api.unsplash.com/search/photos/", {
    headers: {
      Authorization: "Client-ID wjKUkLWzsbS0F3Lwzd0w4ipWRWzEWiNsyApJgA3_j4M",
    },
    params: {
      query: term,
    },
  })

  return res.data.results
}

export default getImages
