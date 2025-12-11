import {useDispatch} from 'react-redux'
import { useState } from 'react';
import { login } from '../redux/userSlice';

const LoginForm = ()=>{

const [email,setEmail] = useState("")
const [name,setName] = useState("")
const dispatch = useDispatch()

const handleSubmit = (e)=>{

    e.preventDefault()
    dispatch(login({name,email}))
   

}

    return(
    <>
    <h1>Login form</h1>
    <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    <label>Email</label>
    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}  />
    <button type='submit'>Login</button>
    </form>
    </>
    )
}

export default LoginForm;