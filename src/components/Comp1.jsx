import React from 'react'
import { useDispatch } from 'react-redux'
import { showData } from '../app/dataSlice'

const Comp1 = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <h1>comp1</h1>
        <button onClick={()=>dispatch(showData('raju'))}>Open</button>
    </div>
  )
}

export default Comp1