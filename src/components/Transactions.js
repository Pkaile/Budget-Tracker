import React,{useContext} from 'react';
import {GlobalContext} from '../GlobalState';
import {Transaction} from './Transaction';
export const Transactions = () => {
    const {transactions} = useContext(GlobalContext);
    return (
        <div className="container">
        <h3 className='budget-title'>Transaction History</h3>
        <ul>
     {transactions.map((transaction) => (<Transaction key={transaction.id} transaction={transaction}/>))}
     </ul>
     </div>
    )
}
