import { useSelector } from "react-redux";
import propTypes from "prop-types"
import { useLocation,  Navigate } from "react-router-dom";



/**
 * Component that verifies user status and redirect user if connected
 * prevent user to acces login page when already connected
 * @param {node} children component only accessible when user connected
 */
function PublicRoutes ({children}){
  const userLogInSelector = useSelector(state => state.user.isLogin)
  const location = useLocation()

  return userLogInSelector ? (
    <Navigate
      replace
      to="/Profile"
      state={{ from: `${location.pathname}${location.search}` }}
    />
    ): (children)}

export default PublicRoutes;

PublicRoutes.propTypes = {
    children: propTypes.element.isRequired
  }