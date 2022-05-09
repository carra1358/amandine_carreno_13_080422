import propTypes from "prop-types"


// component rendering bank's features
function Feature({ src, title, content }) {

  return (
    <div className="feature-item">
      <img src={src} alt="" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>
        {content}
      </p>
    </div>
  )
}

Feature.defaultProps = {
  src: "",
  title: "",
  content: "",
}

Feature.propTypes = {
  src: propTypes.string,
  title: propTypes.string,
  content: propTypes.string
}


export default Feature;