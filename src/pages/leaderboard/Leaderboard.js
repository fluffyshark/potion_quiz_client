import React from 'react'
import "./leaderboard.css"
import Navbar from '../../components/navbar/Navbar'
import leaderboard from "../../image_assets/general/leaderboard.png"

function Leaderboard() {
  return (
    <div className='leaderboardView'>
        <Navbar />
        
        <div className="leaderboard_middle">
          <div className="leaderboard_middle_container">
            <div className="leaderboard_image_container">
              <img src={leaderboard} alt="" />
              <p className="leaderboard_ranks your_rank">YOUR RANK 10 - 98 456</p>
              <p className="leaderboard_ranks first_rank_name">ADAM</p>
              <p className="leaderboard_ranks first_rank_score">139 234</p>

              <p className="leaderboard_ranks second_rank_name">SARA</p>
              <p className="leaderboard_ranks second_rank_score">131 345</p>

              <p className="leaderboard_ranks third_rank_name">JOHN</p>
              <p className="leaderboard_ranks third_rank_score">128 676</p>

              <p className="leaderboard_ranks fourth_rank_name">YASMIN</p>
              <p className="leaderboard_ranks fourth_rank_score">126 667</p>

              <p className="leaderboard_ranks fifth_rank_name">CASIAN</p>
              <p className="leaderboard_ranks fifth_rank_score">110 544</p>

              <p className="leaderboard_ranks sixth_rank_name">SEBASTIAN</p>
              <p className="leaderboard_ranks sixth_rank_score">99 234</p>
            </div>
          </div>
        </div>
        
        <div className="leaderboard_footer"></div>
    </div>
  )
}

export default Leaderboard