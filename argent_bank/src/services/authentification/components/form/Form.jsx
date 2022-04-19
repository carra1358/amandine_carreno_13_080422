import axios from "app/api/axios"
import { userLogInAction } from "app/redux/reducer/userSlices";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";

function Form (){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
   // const testUsername = useSelector(state => state.login.value);
    const dispatch = useDispatch();
    const navigate = useNavigate()
  
    function LogIn(e) {
          e.preventDefault()
          const url = "user/login"
         
            const userLogIn = async () => {
                
              try{
                  /* eslint-disable */
                  const reponse = await axios.post(url, JSON.stringify({email : username, password:password }),
                  {
                    headers: {"Content-Type": "application/json", "Credential": true}
                  })
                
                dispatch(userLogInAction(reponse.data))
                
                if(reponse.status === 200){
                    navigate("/profile")
                }
               return reponse
              }catch (error){
              return error
              }
               
            };
            userLogIn();
        }
    
    
  

    return(
        <div>
            <form onSubmit={LogIn}>
          <div className="input-wrapper">
            <label htmlFor="username">
                Username:
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </label>
           
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">
                Password :
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
          </div>
          <div className="input-remember">
            <label htmlFor="remember-me">
            <input type="checkbox" id="remember-me"  />
                Remember me
                </label>
          </div>
         <button type="submit" className="sign-in-button">Sign In</button> 
        </form>
        </div>
    )
}



export default Form;