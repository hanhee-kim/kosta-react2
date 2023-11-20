import { useState } from "react";

//부모컴포넌트에서 가져온 userList와 setUserList를 사용하기위해 파라미터로 받아옴
function UserAdd({userList,setUserList}){
    const [user,setUser] = useState({name:'',age:'',addr:''});

    const change = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({...user,[name]:value});
    }
    const addUser =() => {
        setUserList([...userList,user]);    //user 추가 // 전개연산자가 배열타입
        setUser({name:'',age:'',addr:'',phon:''});
    }
    return(
        <>
        <div>
        name : <input type="text" name="name" value={user.name} onChange={change}/><br/>
        age : <input type="text" name="age" value={user.age} onChange={change}/><br/>
        addr : <input type="text" name="addr" value={user.addr} onChange={change}/><br/>
        phon : <input type="text" name="phon" value={user.phon} onChange={change}/><br/>
        <br/>
        <button onClick={addUser}>추가</button><br/><br/>
        </div>
        </>
    )

}

export default UserAdd;