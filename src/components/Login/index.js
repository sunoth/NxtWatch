import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

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
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const jwtToken = data.jwt_token
      const {history} = this.props

      Cookies.set('jwt_token', jwtToken, {
        expires: 45,
        path: '/',
      })
      history.replace('/')
    } else {
      this.setState({showError: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, showError, errorMsg, showPassword} = this.state
    const passwordType = showPassword ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <AppContainer>
        <FormContainer onSubmit={this.onSubmitForm}>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputLabel htmlFor="username">USERNAME</InputLabel>
          <UserInput
            placeholder="Username"
            id="username"
            type="text"
            value={username}
            onChange={this.onChangeUsername}
          />

          <InputLabel htmlFor="password">PASSWORD</InputLabel>
          <UserInput
            placeholder="Password"
            id="password"
            type={passwordType}
            value={password}
            onChange={this.onChangePassword}
          />

          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              id="checkbox"
              onChange={this.onChangeShowPassword}
            />
            <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
          </CheckboxContainer>
          <LoginBtn type="submit">Login</LoginBtn>

          {showError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
        </FormContainer>
      </AppContainer>
    )
  }
}

export default Login
