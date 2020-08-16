import React ,{useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState';


export const Balance = () => {

    const {transactions} = useContext(GlobalContext);

    const amt = transactions.map(transactions=>transactions.Amount)
    // console.log(amt)

    const total = amt.reduce((acc,item)=>(acc+=item),0).toFixed(1);
    // console.log(total)
    return (
        <div className="container my-3 text-center">
            <h4>Your Balance</h4>
            <h3 id="balance">{total}</h3>
            
        </div>
    )
}
