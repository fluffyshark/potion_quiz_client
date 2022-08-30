import React, { useEffect, useState } from 'react'
import "./hostboard.css"
import leaderboard from "../../image_assets/general/leaderboard.png"
import { useSelector } from "react-redux"
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
  const [showWinMode, setShowWinMode] = useState(true)
  const gameStats = useSelector((state) => state.GameData.value)

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


  // FOR EVERY PLAYER, HOW MANY GOLD CARDS, MAKE THEM SOLID, THE REST TRANSPARENT

  let cardClassPlayer1 = []


  const calculateWinCards = () => {
    rankedPlayers.map((player) => {
      let nrOfGoldCards = player.cards[2]
      for (let i = 0; i < nrOfGoldCards; i++) {
        cardClassPlayer1[i] = "winCardSolid"
      }
    })
  }


  useEffect(() => {
    console.log("Leaderboard gameStats: ", gameStats)
    calculateRank()
    calculateWinCards()
  }, [gameStats])


  // NEXT - ADD WINCARDS IMAGES AND FUNCTION
 /// NEXT - CONNECT TO THE GLOBAL COUNTER IN POWERREDUCER MIGHT NEED TO CREATE A NEW CLOCK COUNTER
  /// NEXT - AFTER X SECONDS SWITCH PART OF LEADERBOARD TO WIN PROGRESS

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
                          
                          <div className='leaderboard_rank_container_cards_winmode'>
                            <img src={small_card} className={cardClassPlayer1[0]} alt="" /><img src={small_card} alt="" />
                            <img src={small_card} alt="" /><img src={small_card} alt="" />
                            <img src={small_card} alt="" /><img src={small_card} alt="" />
                            <img src={small_card} alt="" /><img src={small_card} alt="" />
                            <img src={small_card} alt="" /><img src={small_card} alt="" />
                            <img src={small_card} alt="" /><img src={small_card} alt="" />
                            <img src={small_card} alt="" /><img src={small_card} alt="" />
                            <img src={small_card} alt="" /><img src={small_card} alt="" />
                            <img src={small_card} alt="" /><img src={small_card} alt="" />
                            <img src={small_card} alt="" /><img src={small_card} alt="" />
                          </div>
                          
                          
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
