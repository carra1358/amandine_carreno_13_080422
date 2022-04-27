import propTypes from "prop-types"
import { Link } from "react-router-dom";
import { FaUserCircle} from "react-icons/fa"
import {MdLogout} from "react-icons/md"
import "./navigation.scss"


/**
 * Component that rendering navigation link
 * @param {string} image path to picture we want to use(if any)
 * @param {string} legend text content of the Link component
 * @param {string}  path path to the new page
 * @param  {string} className of the Link component
 * @returns 
 */
function Navigation ({image,legend,path,className}) {


  return(
    <div className="navigation-container">
        {
            image ?
            <Link to={path} className={className}>
           <img src={image} alt={image}/>
           <span>{legend}</span>
          </Link>
       
          :
           
           <Link to={path} className={className}>
              {path === "/"? <MdLogout/> : <FaUserCircle className="icon-user"/>}
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
  className: "",
}

Navigation.propTypes = {
  image: propTypes.string,
  legend: propTypes.string,
  path: propTypes.string,
  className: propTypes.string
}

export default Navigation;