/* eslint-disable react/prop-types */
import  { useState } from 'react'
import rgbToHex from './rgbToHex';

export default function SingleColor({rgb,weight,index}) {
    const[alert,setAlert]=useState(false)
    const bcg=rgb.join(',')
    const hex=rgbToHex(...rgb).toUpperCase();
    const style={
        backgroundColor:`rgb(${bcg})`,
        color:`${index>10 && 'white'}`
    }
  return (
    <article style={style}>
        <p>{weight}%</p>
        <p>{hex}</p>
    </article>
  )
}
 