import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userDataAction } from "app/redux/reducer/userSlices";
import "./greetings.scss"
import useHttpClient from "app/hook/useHttpClient";


// Component that renders and updates user name
function EditName (){

    const httpClient = useHttpClient()
    const [isOpen, SetIsOpen] = useState(false);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const firstNameSelector = useSelector(state => state.user.userData.firstName);
    const lastNameSelector = useSelector(state => state.user.userData.lastName);
    const dispatch = useDispatch()
    
    /**
     * function called on click on save button
     * recover firstname and lastname input
     * call request to send new information
     * * call request to widthdraw information updated in the data base
     * clears inputs
     * @param {*} e 
     */
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
          
              const reponse = await httpClient.editName(newFirstName,newLastName)
            if(reponse.status(200)){
              const res = await httpClient.accessData("user/profile")  
              return   dispatch(userDataAction(res.data.body))      
            }  
         return reponse
        }catch (error){
          
        return error
        }
         
      };
       userEditNames();
       SetIsOpen(false)
       setFirstName("")
       setLastName("")
      
    }
 

  return(
     <div className="header">
         {isOpen?
         <>
          <h1>Welcome back</h1>
            <form onSubmit={handleEditNames}>
          <div className="greetings-input-container">
            <label htmlFor="firstname">
                <input type="text" id="firstname" value={firstName || ""} placeholder={firstNameSelector} onChange={(e) => setFirstName(e.target.value)}/>
            </label>
           
            <label htmlFor="latname">
                <input type="text" id="lastname" value={lastName || ""} placeholder={lastNameSelector} onChange={(e) => setLastName(e.target.value)}/>
            </label>
          </div>
          
           <div className="greetings-button-container">
           <div className="greetings-button">
         <button type="submit" className="edit-button">Save</button>
         </div>
         <div className="greetings-button">
          <button type="button" onClick={()=>{SetIsOpen(false)}} className="edit-button">Cancel</button> 
         </div>
           </div>
        
        </form>
        </>
     
    :
     <>
     <h1>Welcome back<br /><span className="greetings-name">{firstNameSelector}</span> <span className="greetings-name">{lastNameSelector}</span>!</h1>
     <button type="button" className="edit-button-close" onClick={()=>{SetIsOpen(true);setFirstName(null);
        setLastName(null)}}>Edit Name</button>
    </>}
    </div>)}


export default EditName;