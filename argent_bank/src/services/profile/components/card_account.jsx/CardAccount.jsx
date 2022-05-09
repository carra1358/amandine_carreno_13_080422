import { findAccountAction } from "app/redux/reducer/userSlices"
import propTypes from "prop-types"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import "./card_account.scss"

// Component that displays user account informations
function CardAccount({ type, balance, id, className }) {

  const dispatch = useDispatch()
  const handleUserPath = () => {
    const path = id;
    dispatch(findAccountAction(path))
  }


  return (
    <section className={className}>
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank {type} ({id.slice(id.length - 5, id.length).replace(id[id.length - 5], "x")})</h3>
        <p className="account-amount">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(balance)}</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      {
        className === "account" ?
          <div className="account-content-wrapper cta">
            <Link to="/transaction" onClick={handleUserPath}><button type="button" className="transaction-button">View transactions</button></Link>
          </div> :
          ""

      }
    </section>
  )

}

CardAccount.defaultProps = {
  id: "",
  balance: 0,
  type: "",
  className: "",
}

CardAccount.propTypes = {
  id: propTypes.string,
  type: propTypes.string,
  balance: propTypes.number,
  className: propTypes.string
}


export default CardAccount;