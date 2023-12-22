import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from './app/messSlice'
import Heading from './components/Heading'



const App = () => {
  // const print = useSelector((state) => state.message.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Hello </h1>
      <Heading/>
      <button onClick={()=>{
         dispatch(setName('Rakesh'));
      }}>print</button>
    </div>
  )
}

export default App