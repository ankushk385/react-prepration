import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { logout } from '../redux/userSlice';

const UserInfo = () => {

const dispatch = useDispatch();
const userData = useSelector((state)=>state.user);
const handleLogout = (e)=>{
e.preventDefault();
dispatch(logout())

}
  return (
    <div>
      <h1>User Information</h1>
      {!userData.isLoggedIn ? <h3>Please login</h3> : <h3>User Logged out</h3>}
      {/* {console.log(userData)} */}
      <div>
        {userData.isLoggedIn && <>
            <h2>Name : <span>{userData?.user?.name}</span> </h2>
            <h2>Email : <span>{userData?.user?.email}</span> </h2>
        </>}
        
      </div>
      <button onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default UserInfo;
