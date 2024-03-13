import React from 'react'
import { useState } from 'react';

const Second = () => {
  const [inputvalue,setInputValue] = useState('')
  const [inputvalue2,setInputValue2] = useState('')
  const [inputvalue3,setInputValue3] = useState('')
  const [inputvalue4,setInputValue4] = useState('')
  const [inputvalue5,setInputValue5] = useState('')
  const [inputvalue6,setInputValue6] = useState('')
  const [inputvalue7,setInputValue7] = useState('')
  const [inputvalue8,setInputValue8] = useState('')
  const [data,setData] = useState('')
  const [loading,setLoading] = useState('')
  const [style1,set1] = useState({right:"100vw"})
  const [style2,set2] = useState({left:"0",right:"0"})
    const fetchData = async () => {
        setLoading(true);
        try {
          // const response = await fetch(`http://localhost:4000/predict/${selectedValue1}/${selectedValue}/${inputvalue2}/${inputvalue3}/${inputvalue4}/${inputvalue5}/${inputvalue6}/${inputvalue7}/${inputvalue8}`);
          // console.log(`http://localhost:4000/predict/${selectedValue1}/${selectedValue}/${inputvalue2}/${inputvalue3}/${inputvalue4}/${inputvalue5}/${inputvalue6}/${inputvalue7}/${inputvalue8}`);          ;
          // const response = await fetch('http://localhost:4000/predict/9/1/8.6889/8.6889/0.93/1.4329/290/5.8443/1012.96')
          const response = await fetch(`/predict/${selectedValue1}/${selectedValue}/${inputvalue2}/${inputvalue3}/${inputvalue4}/${inputvalue5}/${inputvalue6}/${inputvalue7}/${inputvalue8}`);
          const jsonData = await response.json();
          setData(jsonData.result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
        setLoading(false);
      };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };
    const handleInputChange2 = (e) => {
        setInputValue2(e.target.value);
      };
    const handleInputChange3 = (e) => {
        setInputValue3(e.target.value);
      };
    const handleInputChange4 = (e) => {
        setInputValue4(e.target.value);
      };
    const handleInputChange5 = (e) => {
        setInputValue5(e.target.value);
      };
    const handleInputChange6 = (e) => {
        setInputValue6(e.target.value);
      };
    const handleInputChange7 = (e) => {
        setInputValue7(e.target.value);
      };
    const handleInputChange8 = (e) => {
        setInputValue8(e.target.value);
      };

    const handleSubmit = (e)=>{
        e.preventDefault(); 
        set1({left:"0",right:"0"})
        set2({left:"100vw"})
        fetchData();
    }

    const [selectedValue, setSelectedValue] = useState('1');

  const handleChangeselect = (event) => {
    setSelectedValue(event.target.value);
  };
    const [selectedValue1, setSelectedValue1] = useState('1');

  const handleChangeselect1 = (event) => {
    setSelectedValue1(event.target.value);
  };
  const return2 =()=>{
    set1({right:"100vw"})
    set2({left:"0",right:"0"})
  }
  return (
    <div className="holder">
        <div className="holder1" style={style1}>
          {loading ? <p className='loading'>Loading pLease wait</p> : <>
          <h2 className="holder1-h1">According to given stats the prediction is {data}</h2>
          <div className="barholder">Temperature: {inputvalue2} <div className="bar"><div className='bar2' style={{width:`${Number(inputvalue2)*2.5}%`}}></div></div></div>
          <div className="barholder">Apparent Temperature: {inputvalue3} <div className="bar"><div className='bar2' style={{width:`${Number(inputvalue3)*2.6}%`}}></div></div></div>
          <div className="barholder">Humidity: {inputvalue4} <div className="bar"><div className='bar2' style={{width:`${Number(inputvalue4)*100}%`}}></div></div></div>
          <div className="barholder">Wind Speed: {inputvalue5} <div className="bar"><div className='bar2' style={{width:`${Number(inputvalue5)*1.78}%`}}></div></div></div>
          <div className="barholder">Wind Bearing: {inputvalue6} <div className="bar"><div className='bar2' style={{width:`${Number(inputvalue6)*0.27}%`}}></div></div></div>
          <div className="barholder">Visibility: {inputvalue7} <div className="bar"><div className='bar2' style={{width:`${Number(inputvalue7)*6.211}%`}}></div></div></div>
          <div className="barholder">Pressure: {inputvalue7} <div className="bar"><div className='bar2' style={{width:`${Number(inputvalue7)*0.1}%`}}></div></div></div>
          <button className="btn" style={{marginTop:"20px"}} onClick={return2}>Predict again</button>
          </>}
        </div>
        <div className="holder2" style={style2}>
            <form action="GET" onSubmit={handleSubmit}>
          <h1 className='holder2_h'>Let`s Predict</h1>
          <div>
        

      <label>Choose a Model:</label>
      <select value={selectedValue1} onChange={handleChangeselect1}>
        <option value="1">Logistic Regression Number 1</option>
        <option value="2">Logistic Regression Number 2</option>
        <option value="3">Logistic Regression Number 3</option>
        <option value="4">Random Forest Number 1</option>
        <option value="5">Random Forest Number 2</option>
        <option value="6">Random Forest Number 3</option>
        <option value="7">Neural Network Number 1</option>
        <option value="8">Neural Network Number 2</option>
        <option value="9">Neural Network Number 3</option>
      </select>
                
      <label>Choose a weather status:</label>
      <select value={selectedValue} onChange={handleChangeselect}>
        <option value="1">Rain</option>
        <option value="0">Snow</option>
      </select>

                <input type="text" placeholder='Temperature' onChange={handleInputChange2} value={inputvalue2}/>
                <input type="text" placeholder='Apparent Temperature' onChange={handleInputChange3} value={inputvalue3}/>
                <input type="text" placeholder='Humidity' onChange={handleInputChange4} value={inputvalue4}/>
                <input type="text" placeholder='Wind Speed' onChange={handleInputChange5} value={inputvalue5}/>
                <input type="text" placeholder='Wind Bearing' onChange={handleInputChange6} value={inputvalue6}/>
                <input type="text" placeholder='Visibilty' onChange={handleInputChange7} value={inputvalue7}/>
                <input type="text" placeholder='Pressure' onChange={handleInputChange8} value={inputvalue8}/>
          </div>
                
                    <button type="submit" className='btn'>Submit</button>
                </form>
        </div>
    </div>
  )
}

export default Second