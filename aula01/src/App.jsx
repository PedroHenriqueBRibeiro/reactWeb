import { useState } from 'react'
import './App.css'
import AlertButton from './components/Alerta'
import Props from './components/Prop'
import Login from './pages/Login'

function App() {

  const texto = "Info componente pai"
return(
  <div>
  {/* <Props texto={texto}/>
  <Props texto="Texto da propriedade"></Props>
  <AlertButton/> */}
  <Login/>
  </div>

)}

export default App
