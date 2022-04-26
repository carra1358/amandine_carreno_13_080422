import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import  api  from "app/api/api"
import store from "../redux/store"


const useHttpClient = () => {
   
    const user = useSelector(state => state.user)
    
    const [token ,setToken ] = useState(user.userAuth?.token ?? null)

    const client = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
        "Content-Type": "application/json", 
        "Authorization": `Bearer ${token}`
    }
    });

    useEffect(() => {
        store.subscribe(() => {
            if(token !==  user.userAuth?.token){
                setToken(user.userAuth?.token)
                
            }
            console.log(store.getState())
        })
    },[token])
   
    useEffect(()=> {
        if(token !==  user.userAuth?.token){
            setToken(user.userAuth?.token)
            
        }
       
        
    },[token])

  return {
      ...api(client),
  }
} 

export default useHttpClient;
