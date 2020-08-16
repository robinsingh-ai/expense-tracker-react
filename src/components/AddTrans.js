import React, { useState, useContext } from 'react'
import {GlobalContext} from '../Context/GlobalState';
export const AddTrans = () => {

    const {Additmes} = useContext(GlobalContext);


    const [text,settext] = useState('');
    const [amt,setAmt] = useState(0);

    const ONSubmit = e =>{
        e.preventDefault();

        const addedTrans={
            id:Math.floor(Math.random()*1000000000),
            text,
            Amount:+amt
        }

        Additmes(addedTrans);
    }

    return (
        <div className="container my-3 text-center">
          <h3>Add New Transaction</h3>
          <form onSubmit={ONSubmit}>
  <div className="form-group">
    <label htmlFor="text">text</label>
    <input type="text" className="form-control" value={text} onChange={(event)=>settext(event.target.value)} />
    <small  className="form-text text-muted">Enter Details 'For Deposit Enter +ve Number and For Withdrawn Use - Sign'</small>
  </div>
  <div className="form-group">
    <label htmlFor="amount">Amount</label>
    <input type="number" className="form-control" value={amt} onChange={(event)=>setAmt(event.target.value) } />
  </div>
  
  <button type="submit" className="btn btn-primary">Add</button>
</form>
            
        </div>
    )
}
