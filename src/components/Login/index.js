import {Component} from 'react'
import {
  AppContainer,
  FormContainer,
  LoginLogo,
  InputLabel,
  UserInput,
  CheckboxContainer,
  Checkbox,
  ShowPassword,
  LoginBtn,
} from './styledComponents'

class Login extends Component {
  render() {
    return (
      <AppContainer>
        <FormContainer>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputLabel htmlFor="username">USERNAME</InputLabel>
          <UserInput placeholder="Username" id="username" type="text" />
          <InputLabel htmlFor="password">PASSWORD</InputLabel>
          <UserInput placeholder="Password" id="password" type="password" />
          <CheckboxContainer>
            <Checkbox type="checkbox" id="checkbox" />
            <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
          </CheckboxContainer>
          <LoginBtn>Login</LoginBtn>
        </FormContainer>
      </AppContainer>
    )
  }
}

export default Login
