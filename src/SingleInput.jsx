import { useState } from 'react'

function SingleInput() {

  console.log(`Hello ${Math.random()}`)
  const [name,setName] = useState("Vivek Sajwan");
  let changeName = (e) => {
    setName(e.target.value)
  }
  
  return (
    <div>
      <input onChange={changeName} value={name} type="text" placeholder='enter name'/>
      <button>Submit</button>
    </div>
  )
}

export default SingleInput
