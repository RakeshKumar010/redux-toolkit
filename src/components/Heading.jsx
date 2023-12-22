import React from 'react'
import { useSelector } from 'react-redux'

const Heading = () => {
    const mess = useSelector((state)=>state.message.value)
  return (
    <div>Heading{mess}</div>
  )
}

export default Heading