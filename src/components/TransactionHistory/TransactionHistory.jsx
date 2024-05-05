
import css from "./TransactionHistory.module.css"
export default function TransactionHistory ({data}) {
    return <div>
    <table className={css.table}>
       <thead className={css.tableHead}>
           <tr className={css.headText}>
               <th className={css.headItem}>Type</th>
               <th className={css.headItem}>Amount</th>
               <th className={css.headItem}>Currency</th>
           </tr>
       </thead>
       <tbody>
                   {data.map((transaction) => ( 
                       <tr className={css.row} key={transaction.id}>
                           <td className={css.rowItem}>{transaction.type}</td>
                           <td className={css.rowItem}>{transaction.amount}</td>
                           <td className={css.rowItem}>{transaction.currency}</td>
                       </tr>    
                   ))}
       </tbody>
   </table>
   </div>
};