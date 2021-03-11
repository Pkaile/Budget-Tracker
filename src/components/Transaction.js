import React,{useContext} from 'react';
import {GlobalContext} from '../GlobalState';
export const Transaction = ({transaction}) => {
const {amount, title, category, id} = transaction;
const amountDisplay = moneyFormat(amount);
const {deleteTransaction} = useContext(GlobalContext);
function moneyFormat(amount){
    //2 decimal points
    let cash = amount.toFixed(2);
    cash = cash.toString().split("");
    if(cash.includes('-')){
        let arr = "$";
        cash.shift();
        cash.unshift('- $');
    } else cash.unshift('$');
return cash;
}
    return (
        <>
        <div className="transaction">
        <button className="hide-btn delete" onClick={e => deleteTransaction(id)}>Delete</button>
        <div>
        <h2 className="title">{title}</h2>
        <p className="desc">Category:<span className="tag">{category}</span></p>
        {/* <p>remaining bal</p> */}
        </div>
        <div className={`cash-change-holder ${amount > 0 ? "green" : "red"}`}>
        <h5 className="amount">{amount > 0 ? "Deposit": "Withdrawl"}</h5>
        <h1 className="amount small">{amountDisplay}</h1>
        </div>
        </div>
        
        </>
    )
    }
//put the $ after the sign
