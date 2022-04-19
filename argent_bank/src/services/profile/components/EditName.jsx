import { useState } from "react";
import axios from "app/api/axios";
import { useDispatch, useSelector } from "react-redux";
import { userDataAction } from "app/redux/reducer/userSlices";


function EditName (){
    const [isOpen, SetIsOpen] = useState(false);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const url = "user/profile";
    const token = useSelector(state => state.user.userAuth.body.token);
    const firstNameSelector = useSelector(state => state.user.userData.firstName);
    const lastNameSelector = useSelector(state => state.user.userData.lastName);
    const dispatch = useDispatch()
    const handleEditNames = (e) => {
       e.preventDefault();
   
       const userEditNames = async () => { 
           let newFirstName = firstName ;
           let newLastName = lastName
           if(firstName === firstNameSelector || firstName === null || firstName === undefined){
               newFirstName =  firstNameSelector      
           }
           if(lastName === lastNameSelector || lastName === null || lastName === undefined){
            newLastName = lastNameSelector
           }

        try{
            /* eslint-disable */
            const reponse = await axios.put(url,{firstName : newFirstName, lastName: newLastName },
                {headers : {"Authorization": "Bearer" + token}})
         
         return reponse
        }catch (error){
            console.log(error)
        return error
        }
         
      };
       userEditNames();
       SetIsOpen(false)
       setFirstName("")
       setLastName("")
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
    }

  return(
     <div>
         {isOpen?
            <form onSubmit={handleEditNames}>
          <div >
            <label htmlFor="firstname">
                <input type="text" id="firstname" value={firstName || ""} placeholder={firstNameSelector} onChange={(e) => setFirstName(e.target.value)}/>
            </label>
           
          </div>
          <div >
            <label htmlFor="latname">
                <input type="text" id="lastname" value={lastName || ""} placeholder={lastNameSelector} onChange={(e) => setLastName(e.target.value)}/>
            </label>
          </div>
          
         <button type="submit" className="edit-button">Save</button> <button type="button" onClick={()=>{SetIsOpen(false)}} className="edit-button">Cancel</button> 
        
        </form>

     
    : <button type="button" className="edit-button" onClick={()=>{SetIsOpen(true);setFirstName(null);
        setLastName(null)}}>Edit Name</button>}

    </div>)
}

export default EditName;