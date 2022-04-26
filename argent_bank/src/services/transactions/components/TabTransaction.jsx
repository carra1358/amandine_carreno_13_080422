/* eslint-disable */
import  getBalance  from "app/MOOK/getBalance";
import { useState } from "react";
import {GoChevronDown, GoChevronUp, GoX} from "react-icons/go";
import {FaPen} from "react-icons/fa"
import "./tabTransaction.scss"

function TabTransaction ({data,balance}){

    const amountsArray = data.map(data => data.amount)
    
    

    return(
        <div className="container-Transaction">
            <table className="Table-Transaction">
                <thead>
                  <tr>
                    <th className="sr-only">extend row</th>
                    <th className="table-header">Date</th>
                    <th className="table-header">description</th>
                    <th className="table-header">amount</th>
                    <th className="table-header">balance</th>
                  </tr>
                </thead>
                {data.map(operation => {
                     
                     const date = new Date(operation.date).toLocaleDateString('en-US', {
                        month : 'long',
                        day : 'numeric',
                        year : 'numeric'
                    }).split(' ').join(' ');
                     const description = operation.description
                     const amount = operation.amount
                     const i = [...data].findIndex( el => el.operationId === operation.operationId)
                     const [isOpen , setIsOpen] = useState(false)
                     const [iscartegoryOpen, setIsCategoryOpen] = useState(false)
                     const [category, setCategory] = useState(operation.category)
                     const [isNotesOpen, setIsNotesOpen] = useState(false)
                     const [notes, setNotes] = useState(operation.notes)
                      
                     return(
                         <tbody key={operation.operationId}>
                             { isOpen? <>
                         <tr  >
                         <td className="toggle-transaction-open"><GoChevronDown onClick={()=> setIsOpen(false)}/></td>
                         <td className="cell-transaction-open"><p>{date}</p></td>
                        <td className="cell-transaction-open">{description} </td>
                        <td className="cell-transaction-open">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(amount)}</td>
                        <td className="cell-transaction-open">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(getBalance(i,amountsArray,balance))}</td>
                         </tr>
                         <tr>
                           <td></td>
                           <td colSpan="4">
                           <ul>
                             <li>
                                Transaction Type : {operation.operationType}
                             </li>
                             <li >
                             {iscartegoryOpen?  
                            <label>
                                Category:
                                 <input type="text" value={category}  onChange={(e) => setCategory(e.target.value)}/>
                                 {<GoX onClick={() => setIsCategoryOpen(false)}/>}
                             </label>  : 
                              <>
                              Category: {operation.category} {<FaPen onClick={() => setIsCategoryOpen(true)}/>} 
                          </>}
                             </li>
                             <li >
                             {isNotesOpen?  
                            <label>
                                 Notes:
                                 <input type="text" value={notes||undefined}  onChange={(e) => setNotes(e.target.value)}/>
                                 {<GoX onClick={() => setIsNotesOpen(false)}/>}
                             </label>  : 
                              <>
                              Notes:{operation.note} {<FaPen onClick={() => setIsNotesOpen(true)}/>}        
                          </>}
                             </li>
                           
                           
                         </ul>
                           </td>
                         </tr></> 
                         :
                         < >
                         <tr key={operation.operationId}>
                         <td className="toogle-transaction"><GoChevronUp onClick={()=> setIsOpen(true)}/></td>
                         <td className="cell-transaction"><p>{date}</p></td>
                        <td className="cell-transaction">{description} </td>
                        <td className="cell-transaction">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(amount)}</td>
                        <td className="cell-transaction">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(getBalance(i,amountsArray,balance))}</td>

                         </tr>
                         </>}

                         </tbody>
                     )
                     
                        

                     
                   })}
            </table>
        </div>
    )
}

/**
 *  return(
                        <>
                    <tr key={operation.operationId} className="table-row">
                        <td className="toogle-transaction">{isOpen?<GoChevronDown onClick={()=> setIsOpen(false)}/>: <GoChevronUp onClick={()=> setIsOpen(true)}/> }</td>
                        {isOpen ?
                        <td aria-rowspan="2" className="cell-transaction"><p>{date}</p>
                         <form >
                             <div>
                             <label>
                                 Transaction Type :
                                 <input type="text" value={operation.operationType} readOnly/>
                             </label>
                             </div>
                             <div>
                             {iscartegoryOpen?  
                            <label>
                                 Category:
                                 <input type="text" value={category} onChange={(e) => setCategory(e.target.value)}/>
                                 {<GoX onClick={() => setIsCategoryOpen(false)}/>}
                             </label>  : 
                              <label>
                              Category:
                              <input type="text" value={operation.category} readOnly/>
                              {<FaPen onClick={() => setIsCategoryOpen(true)}/>}
                          </label>}
                             </div>
                             <div>
                             {isNotesOpen?  
                            <label>
                                 Notes:
                                 <input type="text" value={notes||undefined} onChange={(e) => setNotes(e.target.value)}/>
                                 {<GoX onClick={() => setIsNotesOpen(false)}/>}
                             </label>  : 
                              <label>
                              Notes:
                              <input type="text" value={operation.note} readOnly/>
                              {<FaPen onClick={() => setIsNotesOpen(true)}/>}
                          </label>}
                             </div>
                           
                           
                         </form>
                        </td> 
                        :

                        <td className="cell-transaction"><p>{date}</p></td>}
                        <td className="cell-transaction">{description} </td>
                        <td className="cell-transaction">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(amount)}</td>
                        <td className="cell-transaction">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(getBalance(i,amountsArray,balance))}</td>

                    </tr>
                    </>
                )
 */

  


export default TabTransaction;