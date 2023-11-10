import React, { useState } from 'react'
import './App.css'
import PlayerComponent from './PlayerComponent.jsx'
import data from './data.js'


export default function App(){
  const [players, setPlayers] = React.useState(setDefaultPlayers())

  function setDefaultPlayers(){

      let newArray = []
      const positions = ["PG", "SG", "SF", "PF", "C"]

    
      for(let i=0; i<positions.length; i++){
          
            let player = data.filter(player => player.position === positions[i])
 
            newArray.push(player[Math.floor(Math.random()*player.length)])
            }



        return newArray
        }
      
    
     
  

    function holdPlayer(name){
        setPlayers(prev => {
          return prev.map(item => {
           return item.name === name ? {
                  ...item,
                  isHeld: !item.isHeld
                } : item
          })
        })
  
    }

    console.log(players)

function rollButton(){
      setPlayers(prev => {
        return prev.map(item => {
         return item.isHeld ? item : getPlayers(!item.isHeld, item.position)
        })
      })
    }

     
    
function getPlayers(held, position){

  let neww = []
  const positions = ["PG", "SG", "SF", "PF", "C"]

  for(let i=0; i<positions.length; i++){
        if(position === positions[i] & held){
          let player = data.filter(player => player.position === positions[i])
          neww.push(player[Math.floor(Math.random()*player.length)])
      }
  }
  return neww.find(item=>item)
  
}


const mapPlayers = players.map(item => (
      <PlayerComponent image={item.image} name={item.name} position={item.position} isHeld={item.isHeld} holdPlayer={() => holdPlayer(item.name)}/>
  ))



  return (
    <>
      <h1>BUILD YOUR STARTING FIVE </h1>
        <div className="container">
          {mapPlayers}
        </div>
        
        <button onClick={rollButton}>Roll</button>
     </>
  )


  }