import React,{useContext, useState} from 'react'
import { GlobalContext} from '../GlobalState'
import {v4 as uuid} from 'uuid';
export const InputTransaction = () => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("Misc.");
    const [date, setDate] = useState(Date.now());
    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: uuid(),
            title:title,
            category: category,
            date, date,
            amount:+amount,
        }
        addTransaction(newTransaction);
        setTitle("");
        setAmount("");
    }
    return (
        <div className="container">
                <h3 className='budget-title'>Add a Transaction</h3>
            <form action="" onSubmit ={onSubmit} className="entry-form">
            <p className="explain-text">Title the expense/deposit</p>
            <input type="text" name="title" placeholder="Enter a title" value={title} onChange = {e => setTitle(e.target.value)} required/>
            <select name="category" id="category" value={category} onChange={e =>{setCategory(e.target.value)}}>
                <option value="Food">Food</option>
                <option value="Payment Recieved">Deposit</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Grocery">Grocery</option>
                <option value="Travel">Travel</option>
                <option value="Supplies">Supplies</option>
                <option value="Textbooks/Books">Textbooks/Books</option>
                <option value="Transportation">Transportation</option>
                <option value="Education">Education</option>
                <option value="Home">Home Improvement</option>
                <option value="Gaming">Gaming</option>
                <option value="cosmetics">Cosmetics</option>
                <option value="Recurring Transaction">Reccuring Transaction ⭐</option>
                <option value="Misc.">Misc.</option>
            </select>
            <p className="explain-text">Enter an amount use a ( - ) sign for an expense</p>
            <input type="number" step="any" name="amount" placeholder="Enter an Amount (USD)" value={amount} onChange={e => { setAmount(e.target.value)}}/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
