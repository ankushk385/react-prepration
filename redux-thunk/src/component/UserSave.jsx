import { useState } from "react" 
import {useDispatch} from 'react-redux'
import { save_user } from "../redux/userSlice"

const UserSave = () => {

  const [formData, setFormData] = useState({name:"",city:""})
    const dispatch = useDispatch()
  
  
    const handleInput = (e)=>{
setFormData({...formData,[e.target.name]:e.target.value})

  }

  

  const handleSubmit = (e)=>{
    e.preventDefault()
   dispatch(save_user(formData)) 
console.log(formData)
  }


  return (
    <div>
     <form onSubmit={handleSubmit}>
      <input type="text" placeholder='enter name' name='name' onChange={handleInput}/>
      <input type="text" placeholder='enter city' name='city' onChange={handleInput}/>
      <button type="submit">save data</button>
     </form>
    </div>
  )
}

export default UserSave
