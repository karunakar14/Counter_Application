import React,{useState} from "react";
let Counter=()=>
    {
        let [count,setState]=useState(0)
        let inc = () => {
            setState(count + 1 );
        };
        let dec=()=>{
           setState(count-1)
        }
        let reset=()=>
        {
           setState(count=0)
        }
        return(
            <>
            <h1>{count}</h1>
            <button onClick={inc}>{count}</button>
            <button onClick={dec}>-</button>
            <button onClick={reset}>reset</button>
    
            </>
        )
    }


export default Counter