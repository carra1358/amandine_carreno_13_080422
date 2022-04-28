import getBalance from "app/MOOK/getBalance";
import transactionData from "app/MOOK/transactionData";
import { useSelector } from "react-redux";
import Footer from "services/common/components/footer/Footer";
import Head from "services/common/components/header/Head";
import CardAccount from "services/profile/components/card_account.jsx/CardAccount";
import TabTransaction from "./components/TabTransaction";
import "./transaction.scss"

// Component rendering Transation page for each user account
function Transaction (){

  const  userPathSelector = useSelector(state => state.user.userPath)

  const data = transactionData.find(account => account.id === userPathSelector);
  
  const i = data.operations.length-1

  const array = data.operations.map(op => op.amount)

    return(
        <div>
            <Head/>
            <CardAccount className="transaction-account" type={data.type} balance={getBalance(i,array,data.balance)} id={data.id}/>
            <div className="main bg-dark">
            <TabTransaction data={data.operations} balance={data.balance} />
            </div>
            <Footer/>
        </div>
    )
}


export default Transaction;