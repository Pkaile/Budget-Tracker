import React,{useContext} from 'react';
import { GlobalContext } from '../GlobalState';

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    let numArr = [];
    let expenses = [];
    let income = [];
    let sumTotal = transactions.map(transaction =>{
        numArr.push(transaction.amount);
        if(transaction.amount > 0) income.push(transaction.amount);
        else expenses.push(transaction.amount);
    });
    sumTotal = numArr.reduce((a,b) => a+b, 0).toFixed(2);
    expenses = expenses.reduce((a,b) => a-b, 0).toFixed(2);
    income = income.reduce((a,b) => a+b, 0).toFixed(2);
    return (
        <div className="container">
        <div className="card">
        <h1 className={`income ${sumTotal > 0 ? "green" : "red"}`}>${sumTotal}</h1>
        <p className="desc-cash">| <span className="income">Income: ${income}</span> | <span className="spending">Spending:${expenses}</span> | </p>
        </div>
        </div>
    )
}
