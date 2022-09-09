import React, { useEffect, useState } from 'react'
import "./leaderboard.css"
import Navbar from '../../components/navbar/Navbar'
import leaderboard from "../../image_assets/general/leaderboard.png"
import Icer from "../../components/powers/Icer"
import { useSelector } from "react-redux"
import bronze_card_display from "../../image_assets/general/bronze_card_display.png"
import silver_card_display from "../../image_assets/general/silver_card_display.png"
import gold_card_display from "../../image_assets/general/gold_card_display.png"
import money_icon from "../../image_assets/general/money_icon.png"


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
    "leaderboard_containter_rank01", "leaderboard_containter_rank02", "leaderboard_containter_rank03",
    "leaderboard_containter_rank04", "leaderboard_containter_rank05", "leaderboard_containter_rank06"
  ]

  const calculateRank = () => {
    let playersPointsAndNames = rankedPlayers
    
    // Award points for each card players have (bronze = 20) (silver = 50) (gold = 150)
    gameStats.map((player) => {
      let points = (player.cards[0] * 20) + (player.cards[1] * 50) + (player.cards[2] * 150)
      playersPointsAndNames.push({name: player.playerName, coins: player.coins, cards: player.cards, points: points})
    })
    // Rank the array of players based of the amount of points
    playersPointsAndNames.sort((a, b) => b.points - a.points);
    console.log("playersPointsAndNames: ", playersPointsAndNames)

    // Remove all players except to top 6
    for (let i = 0; i < playersPointsAndNames.length; i++) {
      if (playersPointsAndNames.length > 6) {playersPointsAndNames.pop()}
    }
    // Set ranked array as state
    setRankedPlayers(playersPointsAndNames) 
  }


  useEffect(() => {
    console.log("Leaderboard gameStats: ", gameStats)
    calculateRank()
  }, [gameStats])


  return (
    <div className='leaderboardView'>

      {powersList[4].freeze === "active" && powersList[3].protection !== "active" && <Icer />}

      <Navbar focus={props}/>
        
        <div className="leaderboard_middle">
          <div className="leaderboard_middle_container">
            <div className="leaderboard_image_container">
              <img src={leaderboard} alt="" />

              <p className="leaderboard_your_rank">YOUR RANK 10 - 98 456</p>


              {
              
              
              rankedPlayers.map((player, i) => {
                return (
                  
                  <div className="leaderboard_rank_container" id={rankPlacement[i]} >
                      <div className='leaderboard_rank_container_name'>
                        <p>{player.name}</p>
                      </div>
                      
                      <div className='leaderboard_rank_container_cards'>
                        <p className='leaderboard_bronze_cards'>{player.cards[0]}x</p>
                        <img src={bronze_card_display} alt="" />
                        <p className='leaderboard_silver_cards'>{player.cards[1]}x</p>
                        <img src={silver_card_display} alt="" />
                        <p className='leaderboard_gold_cards'>{player.cards[2]}x</p>
                        <img src={gold_card_display} alt="" />
                      </div>
                      
                      <div className='leaderboard_rank_container_coins'>
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


