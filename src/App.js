import { useState } from "react"
import ImageList from "./components/ImageList"
import SearchBar from "./components/SearchBar"
import getImages from "./api"
import Navbar from "./components/NavBar"
function App() {
  const [images, setImages] = useState([])
  const onSubmit = async (term) => {
    const result = await getImages(term)
    setImages(result)
  }
  return (
    <div>
      <Navbar />
      <SearchBar onSubmit={onSubmit} />
      <ImageList images={images} />
    </div>
  )
}

export default App
