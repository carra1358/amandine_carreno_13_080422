import { useSelector } from "react-redux";
import propTypes from "prop-types"
import { useLocation, Navigate } from "react-router-dom";



/**
 * Component that verifies user status and Prevent access for unauthorizied user
 * redirect to home page when user is disconnected
 * @param {node} children component only accessible when user connected
 * @retrun React.Fc
 */
function ProtectedRoutes({ children }) {
  const userLogInSelector = useSelector(state => state.user.isLogin)
  const location = useLocation()

  return userLogInSelector ? (
    children
  ) : (
    <Navigate
      replace
      to="/"
      state={{ from: `${location.pathname}${location.search}` }}
    />
  )
}

export default ProtectedRoutes;

ProtectedRoutes.propTypes = {
  children: propTypes.element.isRequired
}