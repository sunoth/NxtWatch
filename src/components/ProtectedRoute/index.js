import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'
// Cookies need to import as default import rather than named import

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
