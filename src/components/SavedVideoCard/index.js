import {differenceInYears} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  ListItem,
  CardImage,
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelDetails,
  ChannelTitle,
  ChannelName,
  ViewsAndDate,
  Dot,
  NavLink,
} from './styledComponents'

const SavedVideoCard = props => {
  const {savedVideosDetails} = props
  const {
    id,
    channelName,
    profileImageUrl,
    title,
    thumbnailUrl,
    publishedAt,
    viewsCount,
  } = savedVideosDetails
  const years = differenceInYears(new Date(), new Date(publishedAt))
  //   console.log(years)

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const titleColor = isDarkTheme ? '#ffffff' : '#000000'

        return (
          <NavLink to={`/videos/${id}`}>
            <ListItem>
              <CardImage src={thumbnailUrl} alt="video thumbnail" />
              <ChannelDetailsContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <ChannelDetails>
                  <ChannelTitle color={titleColor}>{title}</ChannelTitle>
                  <ChannelName>{channelName}</ChannelName>
                  <ViewsAndDate>
                    {viewsCount} views <Dot> &#8226; </Dot> {years} years ago
                  </ViewsAndDate>
                </ChannelDetails>
              </ChannelDetailsContainer>
            </ListItem>
          </NavLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SavedVideoCard
