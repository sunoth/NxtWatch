import {Link} from 'react-router-dom'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {
  NavBarContainer,
  HeaderLogo,
  HeaderActionsContainer,
  ThemeButton,
} from './styledComponents'

const Header = () => (
  <NavBarContainer>
    <Link to="/">
      <HeaderLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
      />
    </Link>
    <HeaderActionsContainer>
      <ThemeButton>
        <BsBrightnessHigh color="#ffffff" size={25} />
      </ThemeButton>
    </HeaderActionsContainer>
  </NavBarContainer>
)

export default Header
