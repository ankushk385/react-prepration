import React from 'react'

const Child = ({name}) => {
  console.log("child component rendered")
  return (
    <div>
      <h3>Hello : {name}</h3>
    </div>
  )
}

export default React.memo(Child)
