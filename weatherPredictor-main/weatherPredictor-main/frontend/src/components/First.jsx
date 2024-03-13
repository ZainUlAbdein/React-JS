import React,{useState} from 'react'

const First = () => {
  const[style,setStyle] = useState({height:"100vh"})
  const up =()=>{
    setStyle({height:"0vh"})
  }
  return (
    <div className="main" style={style}>
      <div className="main2">
        <h1 className='main_h1_1'>Welcome to </h1>
        <h1 className='main_h1'>weather predictor app</h1>
        <button onClick={up}>Lets predict</button>
      </div>
    </div>
  )
}

export default First