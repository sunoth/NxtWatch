import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavLink,
  ListItem,
  GameCardThumbnail,
  GameTitle,
  GameViews,
} from './styledComponents'

const GamingVideoCard = props => {
  const {gamingVideoDetails} = props
  const {id, title, thumbnailUrl, viewsCount} = gamingVideoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#ffffff' : '#000000'

        return (
          <NavLink to={`/videos/${id}`}>
            <ListItem>
              <GameCardThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle color={headingColor}>{title}</GameTitle>
              <GameViews>{viewsCount} Watching Worldwide</GameViews>
            </ListItem>
          </NavLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideoCard
