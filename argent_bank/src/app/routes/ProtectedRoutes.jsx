import { useSelector } from "react-redux";
import propTypes from "prop-types"
import { Navigate } from "react-router-dom";



function ProtectedRoutes ({children}){
  const userLogInSelector = useSelector(state => state.user.isLogin)
    if(!userLogInSelector){
      return <Navigate to="/" replace/>
    }
    return children
}

export default ProtectedRoutes;

ProtectedRoutes.propTypes = {
    children: propTypes.element.isRequired
  }