import {useSelector} from 'react-redux'

const UserDetails = () => {

  const UserData = useSelector((state=>state.user))

  return (
    <div>
      <h1>user details</h1>
    <h3>name : {UserData?.name}</h3>
    <h3>city : {UserData?.city}</h3>

    </div>
  )
}

export default UserDetails
