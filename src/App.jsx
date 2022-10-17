import './assets/css/global.css'

// import { Fragment } from 'react'

import { Header } from "./components/Header/Header"
import {About} from './components/About/About'
import { Servicos } from './components/Servicos/Servicos'
import { Contato } from './components/Contato/Contato'
import { Fragment } from 'react'

function App() {
  

  return (
    <>
      <Header/>
      <About/>
      <Servicos/>
      <Contato/>
    </>
  )
}

export default App
