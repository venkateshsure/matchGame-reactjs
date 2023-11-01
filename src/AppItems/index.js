import './index.css'

const AppItems = props => {
  const {each, thumbNailImageClicked} = props
  const {imageUrl, thumbnailUrl} = each

  const imageClicked = () => {
    thumbNailImageClicked(imageUrl)
  }
  return (
    <li onClick={imageClicked} className="thumb-nail-list">
      <img src={thumbnailUrl} alt="thumbnail" className="thumb-nail-image" />
    </li>
  )
}

export default AppItems
