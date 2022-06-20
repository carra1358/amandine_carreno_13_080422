/* eslint-disable */
import getBalance from "app/MOOK/getBalance";
import { useState } from "react";
import { GoChevronDown, GoChevronUp, GoX } from "react-icons/go";
import { FaPen } from "react-icons/fa"
import "./tabTransaction.scss"

/**
 * Coponents rendering table of transactions
 * @param {*} data mooked transations
 * @param {number} balance number account balance 
 * @retrun React.Fc
 */
function TabTransaction({ data, balance }) {

  const amountsArray = data.map(d => d.amount)
  const [isOpen, setIsOpen] = useState(false)
  const [iscartegoryOpen, setIsCategoryOpen] = useState(false)
  const [category, setCategory] = useState(null)
  const [isNotesOpen, setIsNotesOpen] = useState(false)
  const [notes, setNotes] = useState(null)


  return (
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
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }).split(' ').join(' ');
          const i = [...data].findIndex(el => el.operationId === operation.operationId)

          return (
            <tbody key={operation.operationId}>
              {isOpen ? <>
                <tr  >
                  <td className="toggle-transaction-open"><GoChevronDown onClick={() => setIsOpen(false)} /></td>
                  <td className="cell-transaction-open"><p>{date}</p></td>
                  <td className="cell-transaction-open">{operation.description} </td>
                  <td className="cell-transaction-open">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(operation.amount)}</td>
                  <td className="cell-transaction-open">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(getBalance(i, amountsArray, balance))}</td>
                </tr>
                <tr>
                  <td> </td>
                  <td colSpan="4">
                    <ul>
                      <li>
                        Transaction Type : {operation.operationType}
                      </li>
                      <li >
                        {iscartegoryOpen ?
                          <label htmlFor="cat">
                            Category:
                            <input type="text" value={category || ""} onChange={(e) => setCategory(e.target.value)} id="cat" />
                            <GoX onClick={() => setIsCategoryOpen(false)} />
                          </label> :
                          <>
                            Category: {operation.category} <FaPen onClick={() => setIsCategoryOpen(true)} />
                          </>}
                      </li>
                      <li >
                        {isNotesOpen ?
                          <label htmlFor="note">
                            Notes:
                            <input type="text" value={notes || ""} onChange={(e) => setNotes(e.target.value)} id="note" />
                            <GoX onClick={() => setIsNotesOpen(false)} />
                          </label> :
                          <>
                            Notes:{operation.notes} <FaPen onClick={() => setIsNotesOpen(true)} />
                          </>}
                      </li>


                    </ul>
                  </td>
                </tr></>
                :

                <tr key={operation.operationId}>
                  <td className="toogle-transaction"><GoChevronUp onClick={() => setIsOpen(true)} /></td>
                  <td className="cell-transaction"><p>{date}</p></td>
                  <td className="cell-transaction">{operation.description} </td>
                  <td className="cell-transaction">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(operation.amount)}</td>
                  <td className="cell-transaction">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(getBalance(i, amountsArray, balance))}</td>

                </tr>
              }

            </tbody>
          )




        })}
      </table>
    </div>
  )
}




export default TabTransaction;