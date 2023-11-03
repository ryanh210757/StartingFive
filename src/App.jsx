import React, { useState } from 'react'
import './App.css'
import PlayerComponent from './PlayerComponent.jsx'
import data from './data.js'


export default function App(){
  const [players, setPlayers] = React.useState(setDefaultPlayers())

  function setDefaultPlayers(){
      const newArray = []
      const positions = ["PG", "SG", "SF", "PF", "C"]

      for(let i=0; i<positions.length; i++){
       
        let player = data.filter(player => {
          return player.position === positions[i]
        })
        newArray.push(player[Math.floor(Math.random()*player.length)])
        }
        return newArray
        }

  function rollButton(){
      setPlayers(prev => {
        return prev.map(item => {
          return data[Math.floor(Math.random()*data.length)]
        })
      })
  }

console.log(players)
const mapPlayers = players.map(item => (
      <PlayerComponent
      item={item}
      />
  ))

console.log(mapPlayers)


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
        <button
        onClick={rollButton}
        >Roll</button>
     </>
  )
}

