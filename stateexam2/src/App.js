import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [user,setUser] = useState({name:'',age:'',addr:''});
  //change가 일어나면 
  //e : 각자 이벤트가 발생한 element
  const change = (e) => {
    //타겟의 name (name 속성의 값을가져오고)
    let name = e.target.name;
    //타겟의 value (실제 값을 가져와서)
    let value = e.target.value;
    //user를 전개식으로 복사하고, 속성과 값을 넣어준다.같은 속성인 값이면 변화하기 때문
    //변한값으로 setUser가 됨 => 값이 변경된게 반영이 됨
    setUser({...user,[name]:value});
  }
  return (
    <div className="App">
      name : <input type="text" name="name" onChange={change}/><br/>
      age : <input type="text" name="age" onChange={change}/><br/>
      addr : <input type="text" name="addr" onChange={change}/><br/>
      phon : <input type="text" name="phon" onChange={change}/>
      <div>
        <table border="1">
          <tbody>
            <tr>
              <th>name</th><th>age</th><th>addr</th><th>phon</th>
            </tr>
            <tr><td>{user.name}</td><td>{user.age}</td><td>{user.addr}</td><td>{user.phon}</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
