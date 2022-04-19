import { useState } from "react";

function EditName (){
    const [isOpen, SetIsOpen] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
  return(
     <div>
         {isOpen?
            <form onSubmit={()=>{console.log(firstName,lastName)}}>
          <div >
            <label htmlFor="firstname">
                <input type="text" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </label>
           
          </div>
          <div >
            <label htmlFor="latname">
                <input type="text" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </label>
          </div>
          
         <button type="submit" className="edit-button">Save</button>  <button type="button" onClick={()=>{SetIsOpen(false)}} className="edit-button">Cancel</button> 
        
        </form>

     
    : <button type="button" className="edit-button" onClick={()=>{SetIsOpen(true)}}>Edit Name</button>}

    </div>)
}

export default EditName;