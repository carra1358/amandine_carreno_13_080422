import propTypes from "prop-types"
import EditName from "../EditName";

function Greetings({name}) {
    return(
        <div className="main bg-dark">
        <div className="header">
        <h1>Welcome back<br />{name}!</h1>
        <EditName/>
        </div>
        </div>
    )
}

Greetings.defaultProps = {
    name : ""
}

Greetings.propTypes = {
    name : propTypes.string
}

export default Greetings;