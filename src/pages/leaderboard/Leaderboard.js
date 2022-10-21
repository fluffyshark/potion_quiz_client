import React, { useEffect, useState } from 'react'
import "./leaderboard.css"
import "./responsive/responsive.css"
import "./responsive/leaderboardTablet.css"
import Navbar from '../../components/navbar/Navbar'
import leaderboard from "../../image_assets/general/leaderboard.webp"
import Icer from "../../components/powers/Icer"
import MassFreeze from "../../components/powers/MassFreeze.js"
import { useSelector } from "react-redux"
import bronze_card_display from "../../image_assets/general/bronze_card_display.png"
import silver_card_display from "../../image_assets/general/silver_card_display.png"
import gold_card_display from "../../image_assets/general/gold_card_display.png"
import money_icon from "../../image_assets/general/money_icon.webp"
import ReceiveGiveGift from '../../components/powers/GiveGift'


function Leaderboard() {

  var props = {
    focus: "leaderboard",
  }

  const [rankedPlayers, setRankedPlayers] = useState([
    {name: "NO PLAYER", coins: 0, cards: [0,0,0], points: 0},
    {name: "NO PLAYER", coins: 0, cards: [0,0,0], points: 0},
    {name: "NO PLAYER", coins: 0, cards: [0,0,0], points: 0},
    {name: "NO PLAYER", coins: 0, cards: [0,0,0], points: 0},
    {name: "NO PLAYER", coins: 0, cards: [0,0,0], points: 0},
    {name: "NO PLAYER", coins: 0, cards: [0,0,0], points: 0}
  ])

  const gameStats = useSelector((state) => state.GameData.value)
  const powersList = useSelector((state) => state.powers.value)

  let rankPlacement = [
    "scoreboard_containter_rank01", "scoreboard_containter_rank02", "scoreboard_containter_rank03",
    "scoreboard_containter_rank04", "scoreboard_containter_rank05", "scoreboard_containter_rank06"
  ]


  const calculateRank = () => {
    let playersPointsAndNames = rankedPlayers

    // Before any player crafted a card, gameStats is not an Array. But will become when gameStats is sent from server, at first potion crafted.
    if (gameStats.hasOwnProperty('data')) {
       // Award points for each card players have (bronze = 20) (silver = 50) (gold = 150)
      gameStats.data.map((player) => {
        let points = (player.cards[0] * 20) + (player.cards[1] * 50) + (player.cards[2] * 150)
        playersPointsAndNames.push({name: player.playerName, coins: player.coins, cards: player.cards, points: points})
      })
    } else {
      // Award points for each card players have (bronze = 20) (silver = 50) (gold = 150)
      gameStats.map((player) => {
        let points = (player.cards[0] * 20) + (player.cards[1] * 50) + (player.cards[2] * 150)
        playersPointsAndNames.push({name: player.playerName, coins: player.coins, cards: player.cards, points: points})
      })
    } 

   
    // Rank the array of players based of the amount of points
    playersPointsAndNames.sort((a, b) => b.points - a.points);
  //  console.log("playersPointsAndNames: ", playersPointsAndNames)

    // Remove all players except to top 6
    for (let i = 0; i < playersPointsAndNames.length; i++) {
      if (playersPointsAndNames.length > 6) {playersPointsAndNames.pop()}
    }
    // Set ranked array as state
    setRankedPlayers(playersPointsAndNames) 
  }


  // NEXT - FIX LEADERBOARD 
  // 1. gameStats is not an array at start, no players have been .pushed yet
  // 2. server not removing old players from other gameCodes


  useEffect(() => {
  //  console.log("Leaderboard gameStats: ", gameStats)
    setTimeout(function() {
      calculateRank()
    }, 1000);
  }, [gameStats])

  
  return (
    <div className='scoreboardView'>

      {powersList[4].freeze === "active" && powersList[3].protection !== "active" && <Icer />}
      {powersList[18].mass_freeze === "active" && powersList[3].protection !== "active" && <MassFreeze />}
      {powersList[7].gift === "active" && <ReceiveGiveGift />}

      <Navbar focus={props}/>
        
        <div className="leaderboard_middle">
          <div id="leaderboard_middle_container_id" className="leaderboard_middle_container">
            <div className="scoreboard_image_container">
              <img id="leaderboardImage" src={leaderboard} alt="" />

              <p className="player_leaderboard_your_rank">YOUR RANK 10 - 98 456</p>


              {
              
              
              rankedPlayers.map((player, i) => {
                return (
                  
                  <div key={i} className="scoreboard_rank_container" id={rankPlacement[i]} >
                      <div className='scoreboard_rank_container_name'>
                        <p>{player.name}</p>
                      </div>
                      
                      <div className='scoreboard_rank_container_cards'>
                        <p className='leaderboard_bronze_cards'>{player.cards[0]}x</p>
                        <img src={bronze_card_display} alt="" />
                        <p className='leaderboard_silver_cards'>{player.cards[1]}x</p>
                        <img src={silver_card_display} alt="" />
                        <p className='leaderboard_gold_cards'>{player.cards[2]}x</p>
                        <img src={gold_card_display} alt="" />
                      </div>
                      
                      <div className='scoreboard_rank_container_coins'>
                        <p>{player.coins}</p>
                        <img src={money_icon} alt="" />
                      </div>
                  </div>
                
                )
        
              })
             
             }
                


            </div>
          </div>
        </div>
        
        <div className="leaderboard_footer"></div>
    </div>
  )
}

export default Leaderboard


