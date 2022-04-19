import propTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { userLogoutAction } from "app/redux/reducer/userSlices";
import "./head.scss"
import logoBank from "assets/argentBankLogo.png"
import  Navigation  from "../navigation/Navigation";





function Head ({mode}){
const userName = useSelector(state => state.user.userData.firstName)
const dispatch = useDispatch();
const handleLogout = () => {
dispatch(userLogoutAction())
}

  return( mode === "userLogin" ?
        <div  className="main-nav">
          
           <div className="main-nav-logo">
             <img src={logoBank} alt=""/>
             </div>
             <nav className="main-nav-login">
             <Navigation legend={userName} path="/login" className="main-nav-item" />
             {/* eslint-disable */}
             <button type="button"  onClick={handleLogout} id="button_logout"><Navigation legend="Sign Out" path="/" className="main-nav-item"/></button>
             </nav> 
                   
        </div>
        : 
        <div>
         <nav  className="main-nav">
         <Navigation image={logoBank} legend="" path="/" className="main-nav-logo"/>
        <Navigation legend="Sign In" path="/login" className="main-nav-item" />  
        </nav>         
        </div>
  )
}

Head.defaultProps = {
  mode: "userLogout"
}

Head.propTypes = {
  mode: propTypes.string
}


export default Head;