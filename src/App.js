
import './App.css';
import {Balance} from './components/Balance';
import {Heading} from './components/Heading';
import {IncomeExpenses} from './components/IncomeExpenses';
import {Transactionlist} from './components/Transactionlist';
import {Addtransaction} from './components/Addtransaction';
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
   <GlobalProvider>
     <div>
     <Heading/>
      <div className="container">
        <Balance/>
      </div> 
        <IncomeExpenses/>
      <Transactionlist/>
      <Addtransaction/>
    </div>
   </GlobalProvider>
  );
}

export default App;
