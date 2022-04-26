// import axios from "app/api/axios"
import { userLogInAction } from "app/redux/reducer/userSlices";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import useHttpClient  from "app/hook/useHttpClient";

function Form (){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const httpClient = useHttpClient();
  
    function LogIn(e) {
          e.preventDefault()
      
        if(username.trim() === ""){
            setError("Please fill the username input")
        }
        if(password.trim() === ""){
            setError("Please fill the password input")
        }
        const informations = username+password
        if(informations.trim() === ""){
          setError("Please inform your informations before log in ")
      }
        
            const userLogIn = async () => {
                
              try{
                  /* eslint-disable */
                  const reponse = await httpClient.login(username,password)
                 
                dispatch(userLogInAction(reponse.data.body))
                if(reponse.status === 200){
                    navigate("/profile")
                }
               return reponse
              }catch (error){
                
                setError("Access denied: Please verified your username and password.")
              
              return error
              }
               
            };
            if(username && password){
                userLogIn()
            }
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
        <p>{error}</p>
        </div>
    )
}



export default Form;