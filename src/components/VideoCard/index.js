import {VideoCardLink, VideoListCard, ThumbnailImage} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const VideoCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <VideoCardLink to={`/videos/${id}`}>
            <VideoListCard>
              <ThumbnailImage />
            </VideoListCard>
          </VideoCardLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoCard
