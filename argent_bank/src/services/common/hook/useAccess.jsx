import useHttpClient from "app/hook/useHttpClient"
import { useDispatch } from "react-redux";
import { userDataAction } from "app/redux/reducer/userSlices";


const useAccess= async (url) => {

 const client = useHttpClient();
 const dispatch = useDispatch();
        
       try {
        const reponse = await client.accessData(url)  
        return   dispatch(userDataAction(reponse.data.body))      
       } catch (error) {
         return error      
       }
        
}

export default useAccess;