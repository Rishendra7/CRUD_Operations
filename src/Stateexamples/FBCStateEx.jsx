import React,{useState} from 'react'

const FBCStateEx = () => {
    const [value ,setValue]=useState("Shan");
    let ChangeName=()=>{
        setValue("Rishendra");
    }
  return (
    <div>FBCStateEx
      <h1>{value}</h1>
      <button onClick={ChangeName}>Click to Change</button>
    </div>
  )
}

export default FBCStateEx
