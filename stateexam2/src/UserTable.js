import { useState } from "react";
import UserAdd from "./UserAdd";

function UserTable(){
    
    const [userList,setUserList] = useState([]);
    return(
        <div className="App">
        
        {/* 부모컴포넌트에 있는 userList와 setUserList를 넘겨주어야 자식컴포넌트에서 사용이 가능 */}
        <UserAdd userList={userList} setUserList={setUserList}/>
        <div>
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

export default UserTable;