import React,{useState} from 'react'
import Child from './Child'

const Parent = () => {
const [count, setCount] = useState(0)
console.log("Parent component rendered")
  return (
    <div>
      <p>Display count : {count}</p>
      <button onClick={()=>setCount(count+1)} >Click</button>
      {/*passing the same prop very time*/}
      <Child name="Ankush" />
    </div>
  )
}

export default Parent
