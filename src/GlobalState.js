import React, {createContext, useState, useReducer} from 'react';

const appReducer = (state, action) => {
switch(action.type){
    case 'ADD_TRANSACTION':
    return{
    ...state,
    transactions: [action.payload, ...state.transactions]
    }
    case 'DELETE_TRANSACTION':
        return{
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }

    default: 
    return state;
    }
}
const initialState = {
    transactions: [
        {id:1, title:'Burger', category:'Food',date:"", amount: -20},
        {id:2, title:'Burger', category:'Food',date:"", amount: -20},
        {id:3, title:'Burger', category:'Food',date:"", amount: -20},
        {id:4, title:'Salary', category:'Payment Recieved',date:"", amount: 2700}
    ]
}
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(appReducer, initialState);
    function deleteTransaction(id){
        dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    return (
    <GlobalContext.Provider value = {{transactions: state.transactions, deleteTransaction, addTransaction}}>
    {children}
    </GlobalContext.Provider>
        )
}
