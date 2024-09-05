import React, { useReducer } from 'react'

const initialState={
    firstCounter:0
}

const reducer = (state=initialState,{type,value})=>{

    switch (type) {
        case "increment":  
        return state=state+1
    
        case "decrement":
            return state=state-1

        case "reset":
            return state=0

            default:
                return state
    }
}

const new = () => {

 const [count,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
    <h1>{count}</h1>

    <button onClick={()=> dispatch("increment")}>Increment</button>
    <button onClick={()=> dispatch("decrement")}>decrement</button>
    <button onClick={()=> dispatch("reset")}>Reset</button> 
    </div>
  )
}

export default new