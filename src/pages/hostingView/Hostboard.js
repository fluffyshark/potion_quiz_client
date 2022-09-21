import React, { useEffect, useState } from 'react'
import "./hostboard.css"
import "./responsive/tablet.css"
import leaderboard from "../../image_assets/general/leaderboard.png"
import { useSelector, useDispatch } from "react-redux"
import { activate_power, dectivate_power } from "../../redux/PowerReducer"
import bronze_card_display from "../../image_assets/general/bronze_card_display.png"
import silver_card_display from "../../image_assets/general/silver_card_display.png"
import gold_card_display from "../../image_assets/general/gold_card_display.png"
import money_icon from "../../image_assets/general/money_icon.png"
import small_card from "../../image_assets/general/small_card.png"


function Hostboard() {

  const [rankedPlayers, setRankedPlayers] = useState([
    {name: "NO PLAYER", coins: 0, cards: [0,0,0], points: 0},
    {name: "NO PLAYER", coins: 0, cards: [0,0,0], points: 0},
    {name: "NO PLAYER", coins: 0, cards: [0,0,0], points: 0},
    {name: "NO PLAYER", coins: 0, cards: [0,0,0], points: 0},
    {name: "NO PLAYER", coins: 0, cards: [0,0,0], points: 0},
    {name: "NO PLAYER", coins: 0, cards: [0,0,0], points: 0}
  ])

  const dispatch = useDispatch()
  const [showWinMode, setShowWinMode] = useState(true)
  const gameStats = useSelector((state) => state.GameData.value)
  const powersList = useSelector((state) => state.powers.value)

  let rankPlacement = [
    "leaderboard_containter_rank01", "leaderboard_containter_rank02", "leaderboard_containter_rank03",
    "leaderboard_containter_rank04", "leaderboard_containter_rank05", "leaderboard_containter_rank06"
  ]

  const calculateRank = () => {
    let playersPointsAndNames = []
    
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

    // if leaderboard not full, then fill up leaderboard with placeholder players
    if (playersPointsAndNames.length < 6) {
      for (let i = 0; playersPointsAndNames.length < 6 ; i++) {playersPointsAndNames.push({name: "NO PLAYER", coins: 0, cards: [0,0,0], points: 0})}
    }

    // Set ranked array as state
    setRankedPlayers(playersPointsAndNames) 
  }


 
  // Render out transparent card or visible card depending on how many gold cards each player on the leaderboard have.
  // Shows how many gold cards each player have left until victory (20 cards).
  const calculateWinCards = (nr) => {
    
    // Declare array with CSS-class that gives all cards a low opacity
    let cardClassPlayer = [
      "winCardTransparent", "winCardTransparent", "winCardTransparent", "winCardTransparent", "winCardTransparent",
      "winCardTransparent", "winCardTransparent", "winCardTransparent", "winCardTransparent", "winCardTransparent",
      "winCardTransparent", "winCardTransparent", "winCardTransparent", "winCardTransparent", "winCardTransparent",
      "winCardTransparent", "winCardTransparent", "winCardTransparent", "winCardTransparent", "winCardTransparent",]

    // Loop top 6 players as many times as they have they gold cards, to add a CSS-class that restores opasity, to the end of array and then reverse order to make it in front  
    for (let i = 0; i < rankedPlayers[nr].cards[2]; i++) {cardClassPlayer.push("winCardSolid")}; cardClassPlayer.reverse()

    // Add 20 <img>-tags to declared cardImgCollector, with classes from the the cardClassPlayer 
    let cardImgCollector = []
    for (let i = 0; i < 20; i++) {cardImgCollector.push(<img src={small_card} className={cardClassPlayer[i]} alt="" />)}
     
    return (
      <div className='leaderboard_rank_container_cards_winmode'>
        {cardImgCollector}
      </div>)
  }

  
  useEffect(() => {calculateRank()}, [gameStats])
  
  // Hooks on to global counter, leaderboard switch between two set of statistics every 15 seconds.
  useEffect(() => {
    if (powersList[20].leaderboard_card === "active") {setShowWinMode(true)} 
    if (powersList[20].counter20_card > 15) {
      dispatch(activate_power({power_name: "LEADERBOARD STATS"})); 
      dispatch(dectivate_power({power_name: "LEADERBOARD CARDS"}))
    }
  },[powersList[20].counter20_card])

  // Hooks on to global counter, leaderboard switch between two set of statistics every 15 seconds.
useEffect(() => {
  if (powersList[21].leaderboard_stats === "active") {setShowWinMode(false)} 
    if (powersList[21].counter21_stats > 15) {
      dispatch(dectivate_power({power_name: "LEADERBOARD STATS"}))
      dispatch(activate_power({power_name: "LEADERBOARD CARDS"}))
    }
  },[powersList[21].counter21_stats])

  



  return (
    <div className='leaderboardView'>
        
      <div className="leaderboard_middle">
        <div className="leaderboard_middle_container">
          <div className="leaderboard_image_container">
              <img src={leaderboard} alt="" />

              {showWinMode ? (
              
                <div>

                  {rankedPlayers.map((player, i) => {
                    return (
                    
                      <div key={i} className="leaderboard_rank_container" id={rankPlacement[i]} >
                          <div className='leaderboard_rank_container_name_winmode'>
                            <p>{player.name}</p>
                          </div>
                          {calculateWinCards(i)}   
                      </div>
                    )})} 
                </div>
              
              ) : (
          
                <div>
                  {rankedPlayers.map((player, i) => {
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
                    
                    )})} 
              </div>

            )}
              
      
          </div>
        </div>
      </div>
        
      <div className="leaderboard_footer"></div>
    </div>
  )
}


export default Hostboard
