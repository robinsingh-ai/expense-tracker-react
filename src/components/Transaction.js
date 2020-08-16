import React, { useContext }  from 'react'
import {GlobalContext} from '../Context/GlobalState';
import {Transacttion} from './Transacttion'
export const Transaction = () => {

    const {transactions} = useContext(GlobalContext);
    


    return (
        <div className="container text-center my-3">
            <h3>History</h3>
            <hr/>
            <ul className="list-category py-1" id="lists">
                {transactions.map(Transaction=>(<Transacttion key={Transaction.id} Transaction={Transaction}/>))}
                

            </ul>
        </div>
    )
}
