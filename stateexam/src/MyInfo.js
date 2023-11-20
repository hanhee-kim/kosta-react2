import { useState } from "react";

function MyInfo(){
const [name,setName] = useState('');
const [age,setAge] = useState(0);
const [address,setAddress] = useState('');
    

    return(
        <>
            이름입력 : <input type="text" onChange={(e)=>setName(e.target.value)}/><br/>
            나이     : <input type="text" onChangeCapture={(e)=>setAge(e.target.value)}/><br/>
            주소     : <input type="text" onChangeCapture={(e)=>setAddress(e.target.value)}/><br/>
            {name},{age},{address}
            <br/><br/><br/>
        </>
    )
}


export default MyInfo;