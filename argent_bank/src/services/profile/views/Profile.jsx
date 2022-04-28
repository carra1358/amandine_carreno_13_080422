import { useDispatch } from "react-redux";
import useHttpClient from "app/hook/useHttpClient";
import { userDataAction} from "app/redux/reducer/userSlices";
import getBalance from "app/MOOK/getBalance";
import transactionData  from "app/MOOK/transactionData";
import Footer from "services/common/components/footer/Footer";
import Head from "services/common/components/header/Head";
import CardAccount from "../components/card_account.jsx/CardAccount";
import EditName from "../components/greetings/EditName";

// Components rendering user profile page
function Profile (){

    const dispatch = useDispatch();
    const client = useHttpClient()
    
    // async function to access user informations
    const acces = async () => {
        try {
                const reponse = await client.accessData("user/profile")  
                dispatch(userDataAction(reponse.data.body))  
                return reponse   
               } catch (error) {
                 return error      
               }
     }
    acces();
       
    return (
        <div>
           <Head />
           <div className="main bg-dark">
           <EditName/>
             <div>
             <h2 className="sr-only">Accounts</h2>
           {transactionData.map(account => {
                 
                 const data = account.operations
                 const i = [...data].length - 1
                 const array = data.map(op => op.amount)
                
            return  transactionData? <CardAccount className="account" key={account.id} type={account.type} balance={getBalance(i,array,account.balance)} id={account.id}/>
            : "" 
           })}
             </div>
           </div>
           <Footer/>
        </div>
    )
}




export default Profile;
