import './index.css';
import {Balance} from './components/Balance.js';
import {Spending} from './components/Spending.js';
import {Transactions} from './components/Transactions.js';
import {InputTransaction} from './components/InputTransaction.js';
import {GlobalProvider} from './GlobalState.js';

export default function App() {
  console.log("hello");
  return (
   <GlobalProvider>
     <Balance/>
     <Spending/>
     <Transactions/>
     <InputTransaction/>
   </GlobalProvider>
  );
}


