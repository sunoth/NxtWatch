import {differenceInYears} from 'date-fns'
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
  //   const yearsText = formatDistanceToNow(new Date(publishedAt))
  //   console.log(yearsText)
  const years = differenceInYears(new Date(), new Date(publishedAt))
  //   console.log(years)

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
                    {viewCount} views <Dot> &#8226; </Dot> {years} years ago
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
