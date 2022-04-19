
import { useSelector, useDispatch } from "react-redux";
import axios from "app/api/axios";
import { userDataAction} from "app/redux/reducer/userSlices";
import Footer from "services/common/components/footer/Footer";
import Head from "services/common/components/header/Head";
import Greetings from "../components/greetings/Greetings";


function Profile (){

 
   
        const url = "user/profile"
        const token = useSelector(state => state.user.userAuth.body.token)
        const dispatch = useDispatch();


          const userAuth = async () => {
             
            try{
                /* eslint-disable */
                const reponse = await axios.post(url,{token},
                    {headers : {"Authorization": "Bearer" + token}})
                
              console.log(reponse)
              dispatch(userDataAction(reponse.data.body))
              
             return reponse
            }catch (error){
                console.log(error)
            return error
            }
             
          };
          userAuth();
      
  const userName = useSelector(state => state.user.userData.firstName)
    
    return (
        <div>
           <Head mode="userLogin"/>
           <Greetings name={userName}/>
           <Footer/>
        </div>
    )
}




export default Profile;
