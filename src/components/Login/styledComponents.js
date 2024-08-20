import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.bgColor};
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px ${props => props.formBgColor};
  padding: 35px;
  width: 320px;
`
export const LoginLogo = styled.img`
  align-self: center;
  width: 150px;
  margin-bottom: 20px;
`
export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.color};
  font-weight: 500;
`
export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color};
  outline: none;
  border-radius: 3px;
  padding: 8px;
  padding-left: 14px;
  border: 1px solid #94a3b8;
  margin-top: 7px;
  margin-bottom: 18px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`
export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  cursor: pointer;
  margin-right: 7px;
`
export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  cursor: pointer;
  color: ${props => props.color};
  font-weight: 500;
`
export const LoginBtn = styled.button`
  font-family: 'Roboto';
  outline: none;
  border: 0px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 16px;
  color: #ffffff;
  background-color: #3b82f6;
  padding: 11px 8px;
  font-weight: 500;
  margin-top: 5px;
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;
  color: #ff0000;
`
export const LoginDetails = styled.span`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
  margin-top: 5px;
`
