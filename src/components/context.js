import React, { createContext, useContext, useState } from 'react'

const appContext = createContext(null);

const initialValue = {
    logi:Boolean(false),
       uname:''
}

export const useAppContext = ()=>useContext(appContext);
function Context({children}) {
   const [state,setState]=useState(initialValue);
    const contextValue = {
        state,
        setState
     
        
    }
    return (
        <appContext.Provider value={contextValue}>
          {children}
        </appContext.Provider>
    )
}

export default Context;
