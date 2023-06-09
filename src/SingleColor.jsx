/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react'
import rgbToHex from './rgbToHex';

export default function SingleColor({rgb,weight,index}) {
    const[alert,setAlert]=useState(false)

    const bcg=rgb.join(',')
    const hex=rgbToHex(...rgb).toUpperCase();
    const style={
        backgroundColor:`rgb(${bcg})`,
        color:`${index>10 && '#fff'}`,
        padding:'2em'
    }
    useEffect(()=>{
      const timeout=setTimeout(()=>{
        setAlert(false);
      },2000)
      return()=>clearTimeout(timeout)
    })
  return (
    <article style={style} className='relative'
    onClick={()=>{
      setAlert(true);
      navigator.clipboard.writeText(hex);
    }}
    >
        <p>{weight}%</p>
        <p>{hex}</p>
        {alert && <p className='absolute inset-0 text-center border-2 border-slate-500 rounded-sm'>Copied to clipboard</p>}
    </article>
  )
}
 