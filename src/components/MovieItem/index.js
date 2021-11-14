// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import {MovieItemContainer, Thumbnail} from './styledComponents'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <MovieItemContainer>
      <Popup modal trigger={<Thumbnail src={thumbnailUrl} alt="thumbnail" />}>
        {close => (
          <div>
            <button
              data-testid="closeButton"
              type="button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>

            <ReactPlayer url={videoUrl} controls />
          </div>
        )}
      </Popup>
    </MovieItemContainer>
  )
}

export default MovieItem
