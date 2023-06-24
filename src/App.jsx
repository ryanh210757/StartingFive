import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlayerComponent from './PlayerComponent.jsx'
import data from './data.js'


export default function App(){
  const [players, setPlayers] = React.useState(setDefaultPlayers())

  function setDefaultPlayers(){
      const newArray = []
      for(let j=0; j<data.length; j++){
        newArray.push(data[j])
        console.log(data[j])
      }
      return newArray
  }
  console.log(players)
  console.log(data)
  const mapPlayers = players.map(item => (
      <PlayerComponent
      value={item}
      />
  ))
  

  return (
    <>
      <h1>BUILD YOUR STARTING FIVE </h1>
        <div className="flex">
          {mapPlayers}
        </div>
        <div className="positions">
          <h1>PG</h1>
          <h1>SG</h1>
          <h1>SF</h1>
          <h1>PF</h1>
          <h1>C</h1>
        </div>
        <button>Roll</button>
     </>
  )
}

