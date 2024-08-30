/* eslint-disable react/jsx-key */
//import { useState } from 'react'
import { planDeViajes } from './data'
import { Main, Aside } from './components/export'
import './App.css'

function App() {
  //const [count, setCou"nt] = useState(0)
//Object.keys(planDeViajes.destinosdla).map((i)=>console.log(planDeViajes.destinosdla[i]))
  console.log(Object.values(planDeViajes.destinosdla))

  return (
    <>
      <Main data={planDeViajes}/>
      <Aside />
    </>
  )
}

export default App
