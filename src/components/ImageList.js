import "./ImageList.css"
import ImageShow from "./ImageShow"

function ImageList({ images }) {
  const rerenderImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />
  })
  return <div className="image-list">{rerenderImages}</div>
}

export default ImageList
