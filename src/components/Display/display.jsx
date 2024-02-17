import React from 'react'
import { useSelector } from 'react-redux'
import '../../App.css'

export default function Display() {

    const count = useSelector((state) => state.counter.count)

  return (

    <div className='count'>{count}</div>

    
  )
}
