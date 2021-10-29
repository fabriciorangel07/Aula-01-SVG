import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Comp1 from './components/PrimeiroComp'
import Comp2 from './components/SegundoComp'
import Comp3 from './components/TerceiroComp'

const msg = 'Olá React!!!'

ReactDOM.render(

    <>
      {msg}
      <Comp1/>
      <Comp2/>
      <Comp3
        nome = 'João'
        nota = {3}
      />

      <Comp3
        nome = 'Maria'
        nota = {8}
      />
    </>,
    document.getElementById('root')
)