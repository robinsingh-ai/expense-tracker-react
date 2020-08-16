import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { Expenses } from './components/Expenses'
import { Transaction } from './components/Transaction'
import { AddTrans } from './components/AddTrans'
import { GlobalProvider } from './Context/GlobalState'


function App() {
  return (
    <div>

      <GlobalProvider>
        <Header />
        <div className="balance-container">
          <Balance />
          <Expenses />
          <Transaction />
          <AddTrans />
        </div>

        </GlobalProvider>
    </div>
  );
}

export default App;
