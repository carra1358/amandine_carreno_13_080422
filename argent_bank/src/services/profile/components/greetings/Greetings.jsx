import propTypes from "prop-types"

function Greetings({name}) {
    return(
        <div className="main bg-dark">
        <div className="header">
        <h1>Welcome back<br />{name}!</h1>
         <button type="button" className="edit-button">Edit Name</button>
        </div>
        </div>
    )
}

Greetings.defaultProps = {
    name : "Amandine"
}

Greetings.propTypes = {
    name : propTypes.string
}

export default Greetings;