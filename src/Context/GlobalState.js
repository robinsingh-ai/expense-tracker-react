import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'
const initialState = {
    transactions:[
        {id:1 , text: 'Enter Your Transactions Below' , Amount: 0},
        
    ]
};

// Create Context

export const GlobalContext = createContext(initialState);


//Provider Component
export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState);


//Actions 
function Deleteitmes(id){
    dispatch({
        type:'Delete_Item',
        payload : id
    });
}

function Additmes(transactions){
    dispatch({
        type:'Add_Item',
        payload : transactions
    });
}

    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            Deleteitmes,Additmes
        }}>
            {children}
        </GlobalContext.Provider>
    );

};