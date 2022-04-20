import propTypes  from "prop-types"
import "./card_account.scss"

function CardAccount ({type,balance,id}){

    return(
        <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank {type} ({id.slice(id.length -5, id.length).replace(id[id.length -5],"x")})</h3>
          <p className="account-amount">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(balance)}</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button type="button" className="transaction-button">View transactions</button>
        </div>
      </section>
    )

}

CardAccount.defaultProps = {
    id: "",
    balance: 0,
    type: "",
  }
  
  CardAccount.propTypes = {
    id: propTypes.string,
    type: propTypes.string,
    balance: propTypes.number,
  }
  

export default CardAccount;