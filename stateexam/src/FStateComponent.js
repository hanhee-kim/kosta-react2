//function 

import { useState } from "react";

function FStateComponent(){
    const [stateString,setStateString] = useState('react');
    const [stateNumber,setStateNumber] = useState(500);
    return(
        <>
            <button onClick={()=>{setStateString('리액ㅌ')}}>string 변경</button><br/>
            <button onClick={(e)=>{setStateNumber(503)}}>number 변경</button><br/>
            StateString : {stateString}<br/>
            stateNumber : {stateNumber}<br/>
        </>
    )
}


export default FStateComponent;