import { useState } from 'react'
import Values from 'values.js'
import './App.css'
import SingleColor from '../SingleColor'

function App() {
  const [color, setColor]=useState('')
  const [errpor, setError]=useState(false); 
  const [list,setList]=useState([])

  const submitHandler=(e)=>{
    e.preventDefault();
    try{
      let colors=new Values(color).all(10);
      setList(colors);
    }
    catch(error){
      setError(true); 
    }
  }

  const handleChange=(e)=>{
    // setHexColor(e.target.value);
    setColor(e.target.value);
  }
  return (
    <>
    <form onSubmit={submitHandler}>
      <h1>Color Palette</h1>
      <input type="color" name="colorPalette" onChange={handleChange} value={color} autoComplete='color'/>
      <input type="text" name="hexColor" onChange={handleChange} value={color} placeholder='#fff000'/>
      <button type='submit' style={{backgroundColor:`${color}`}}>Submit</button>
    </form>
    <div>
      {list.map((item,index)=>{
        return (<SingleColor key={index} {...item} index={index}/>)
      })}
    </div>
    </>
  )
}

export default App
