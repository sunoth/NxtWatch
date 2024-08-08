import {
  VideoCardLink,
  VideoListCard,
  ThumbnailImage,
  VideoDetails,
  ProfileImage,
  ProfileDetailsContainer,
  VideoTitle,
  ChannelName,
  Dot,
  ViewsDate,
} from './styledComponents'
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
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        const channelTextColor = isDarkTheme ? '#94a3b8' : '#64748b'

        return (
          <VideoCardLink to={`/videos/${id}`}>
            <VideoListCard>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ProfileDetailsContainer>
                  <VideoTitle color={textColor}>{title}</VideoTitle>
                  <ChannelName color={channelTextColor}>{name}</ChannelName>
                  <ViewsDate color={channelTextColor}>
                    {viewCount} views <Dot> &#8226; </Dot> {publishedAt}
                  </ViewsDate>
                </ProfileDetailsContainer>
              </VideoDetails>
            </VideoListCard>
          </VideoCardLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoCard
