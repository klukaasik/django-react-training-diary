import React, {useState, useEffect} from 'react'
import APIService from '../APIService'
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';

function LoginRegister() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [isLogin, setLogin] = useState(true)
    let history = useHistory()

    useEffect(() => {
        if(token['mytoken'] && token['mytoken'] !== 'undefined'){
            history.push('/')
        }
    }, [token])

    const loginBtn = () => {
        APIService.LoginUser({username, password})
        .then(console.log(username))
        .catch(error => console.log(error))
        .then(resp => setToken('mytoken', resp.token))
        .catch(error => console.log(error)) //moga byc problemy bo tak srednio moga tokeny w backendzie dzialac, do sprawdzenia
        sessionStorage.setItem("username", username)
    }

    const registerBtn = () => {
        APIService.RegisterUser({username, password})
        .then(() => loginBtn())
        .catch(error => console.log(error))
    }

    return (
    <div className='App'>
        <div className='col-md-4'>
            {isLogin ? <h1>Zaloguj się</h1> : <h1>Zarejestruj się</h1>}
            <br/>
            
            <div className='mb-3'>
                <label htmlFor='username' className='form-label'>Nazwa użytkownika</label>
                <input type = "text" className='form-control' id="username" placeholder='Wpisz swoją nazwę użytkownika' value={username} onChange = {e => setUsername(e.target.value)}></input>
            </div>

            <div className='mb-3'>
                <label htmlFor='password' className='form-label'>Hasło</label>
                <input type = "password" className='form-control' id="password" placeholder='Wpisz hasło' value={password} onChange = {e => setPassword(e.target.value)}></input>
            </div>

            {isLogin ? <button onClick = {loginBtn} className='btn btn-success'>Zaloguj się</button> 
            : <button onClick = {registerBtn} className='btn btn-success'>Zarejestruj się</button>}

            <div className='mb-3'>
                <br/>
                {isLogin ? <h5>Nie masz konta? <button className='btn btn-success' onClick = {() => setLogin(false)}>Zarejestruj się</button>!</h5>
                : <h5>Jeśli posiadasz konto, <button className='btn btn-success' onClick = {() => setLogin(true)}>Zaloguj się</button></h5>
                }
            </div>
        </div>

    </div>
  )
}

export default LoginRegister