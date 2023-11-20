import { useState } from "react";

function UserList(){

    const [user,setUser] = useState({name:'',age:'',addr:''});
    const [userList,setUserList] = useState([]);
  //change가 일어나면 
  //e : 각자 이벤트가 발생한 element
    const change = (e) => {
    //타겟의 name (name 속성의 값을가져오고)
    let name = e.target.name;
    //타겟의 value (실제 값을 가져와서)
    let value = e.target.value;
    //user를 전개식으로 복사하고, 속성과 값을 넣어준다.같은 속성인 값이면 변화하기 때문
    //변한값으로 setUser가 됨 => 값이 변경된게 반영이 됨
    setUser({...user,[name]:value});    //전개연산자가 객체 타입
    }

    const addUser =() => {
        setUserList([...userList,user]);    //user 추가 // 전개연산자가 배열타입
        setUser({name:'',age:'',addr:'',phon:''});
    }
    return(
        <div className="centerDiv">
        name : <input type="text" name="name" value={user.name} onChange={change}/><br/>
      age : <input type="text" name="age" value={user.age} onChange={change}/><br/>
      addr : <input type="text" name="addr" value={user.addr} onChange={change}/><br/>
      phon : <input type="text" name="phon" value={user.phon} onChange={change}/>
      <button onClick={addUser}>추가</button><br/><br/>
      <div>
        {/* and연산자를 사용하여 왼쪽 값이 true일때 오른쪽의 태그 자체를 출력한다 */}
        {userList.length > 0 && 
        <table border="1">
          <tbody>
            <tr>
              <th>name</th><th>age</th><th>addr</th><th>phon</th>
            </tr>
            {/* 배열의 map은 아이템을 반복하며 삽입해준다.
             즉, 배열에 있는 데이터만큼 tr한줄씩 삽입이 된다. */}
            {userList.map((item)=>{
                return(
                    <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.addr}</td>
                        <td>{item.phon}</td>
                    </tr>
                )
            })}
          </tbody>
        </table>
        }
      </div>
        </div>
    )
}

export default UserList;