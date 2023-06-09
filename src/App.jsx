import { useState } from 'react'
import Values from 'values.js'
import './index.css'
import SingleColor from './SingleColor'

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
    <div className='flex flex-col items-center mt-3'>
      <h1 className='text-3xl '>Color Palette</h1>
    <form className='mt-2 border border-slate-300 rounded-md p-3' onSubmit={submitHandler}>
      <input type="color" name="colorPalette" onChange={handleChange} value={color} autoComplete='color'/>
      <input type="text" name="hexColor" onChange={handleChange} value={color} placeholder='#fff000' className='border border-1 border-black mx-3 rounded-sm'/>
      <button type='submit' className='border py-1 px-2 rounded-sm border-1 border-black 'style={{backgroundColor:`${color}`}}>Submit</button>
    </form>
    <div className="grid grid-cols-4 w-full mt-2">
      {list.map((item,index)=>{
        return (<SingleColor key={index} {...item} index={index}/>)
      })}
    </div>
    </div>
  )
}

export default App
