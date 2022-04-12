import propTypes from "prop-types"
import { Link } from "react-router-dom";
import { FaUserCircle} from "react-icons/fa"
import {MdLogout} from "react-icons/md"
import "./navigation.scss"

function Navigation ({image,legend,path,className}) {
  return(
    <div>
        {
            image ?
            <Link to={path} className={className}>
           <img src={image} alt={image}/>
           <span>{legend}</span>
          </Link>
       
          :
           
           <Link to={path} className={className}>
              {path === "/"? <MdLogout/> : <FaUserCircle/>}
              <span>{legend}</span>
             </Link>   
          
        }
    </div>
)
}

Navigation.defaultProps = {
  image: "",
  legend: "",
  path: "",
  className: ""
}

Navigation.propTypes = {
  image: propTypes.string,
  legend: propTypes.string,
  path: propTypes.string,
  className: propTypes.string
}

export default Navigation;