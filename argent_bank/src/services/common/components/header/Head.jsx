import propTypes from "prop-types";
import "./head.scss"
import logoBank from "assets/argentBankLogo.png"
import  Navigation  from "../navigation/Navigation";




function Head ({mode}){
  return( mode === "userLogin" ?
        <div  className="main-nav">
          
           <div className="main-nav-logo">
             <img src={logoBank} alt=""/>
             </div>
             <nav className="main-nav-login">
             <Navigation legend="Sign In" path="/login" className="main-nav-item" />
            <Navigation legend="Sign Out" path="/" className="main-nav-item" />   
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