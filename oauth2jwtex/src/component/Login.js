import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {useDispatch} from 'react-redux';

const Login = () => {
    const [user, setUser] = useState({username:'',password:''});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeUser = (e) => {
        setUser({...user, [e.target.name]:e.target.value});
    }
    const login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8090/login", user)
            .then(res=> {
                console.log(res.headers.authorization);
                dispatch({type:"token", payload:res.headers.authorization});
                navigate("/user");
            })
            .catch(err=> {
                console.log(err);
            })
    }

    return(
        <>
        <h2>로그인</h2>
        <table border="1">
            <tbody>
            <tr>
            <td><label>username</label></td>
            <td><input name="username" value={user.username} onInput={changeUser}/></td>
            </tr>
            <tr>
            <td><label>passowrd</label></td>
            <td><input name="password" value={user.password} onInput={changeUser}/></td>
            </tr>
            <tr>
                <td colSpan="2"><button onClick={login}>로그인</button></td>
            </tr>
            <tr>
                <td colSpan="2">
                    <a href="http://localhost:8090/oauth2/authorization/naver">네이버 로그인</a>
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <a href="http://localhost:8090/oauth2/authorization/kakao">카카오 로그인</a>                
                </td>
            </tr>
            </tbody>
        </table>
        </>
    )
}


export default Login;