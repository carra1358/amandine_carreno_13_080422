import { useSelector, useDispatch } from "react-redux";
import axios from "app/api/axios";
import { useEffect } from "react";
import { createBrowserHistory } from "history";
import { userDataAction} from "app/redux/reducer/userSlices";
import getBalance from "app/MOOK/getBalance";
import transactionData  from "app/MOOK/transactionData";
import Footer from "services/common/components/footer/Footer";
import Head from "services/common/components/header/Head";
import CardAccount from "../components/card_account.jsx/CardAccount";
import EditName from "../components/greetings/EditName";






function Profile (){

    const history = createBrowserHistory()

    useEffect(()=> {
        const handleHistory = () => {
          history.listen(({action}) => {
             if(action === "POP"){
              history.back(1)
             }

          })
        }
        handleHistory();
        
      })
        
        const url = "user/profile"
        const token = useSelector(state => state.user.userAuth.token)
        const dispatch = useDispatch();


          const userAuth = async () => {
             
            try{
                /* eslint-disable */
                const reponse = await axios.post(url,{token},
                    {headers : {"Authorization": "Bearer" + token}})
                
             
              dispatch(userDataAction(reponse.data.body))
              
             return reponse
            }catch (error){
                console.log(error)
            return error
            }
             
          };
          userAuth();

    
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
                
            return  transactionData? <CardAccount className="account" key={account.id} type={account.type} balance={getBalance(i,array,account.balance)} id={account.id}/>: ""
            
           })}
             </div>
           </div>
           <Footer/>
        </div>
    )
}




export default Profile;
