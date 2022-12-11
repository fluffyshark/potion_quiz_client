import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import ingredientReducer from './redux/IngredientReducer.js';
import coinsReducer from './redux/CoinsReducer'
import potionReducer from './redux/PotionReducer';
import craftReducer from './redux/CraftReducer';
import recipeReducer from "./redux/PotionRecipeReducer"
import levelExpReducer from "./redux/LevelExpReducer"
import powerReducer from "./redux/PowerReducer"
import playerStatsSlice from "./redux/PlayerSocketReducer"
import gameStatsSlice from './redux/GameStatsReducer';
import marketSlice from './redux/MarketplaceReducer';
import buyLetterSlice from './redux/LetterReducer';
import auctionSlice  from './redux/AuctionReducer';
import endGameSlice  from './redux/EndGameReducer';


const store = configureStore({
  reducer: {
    ingredients: ingredientReducer,
    coins: coinsReducer,
    potions: potionReducer,
    crafting: craftReducer,
    recipe: recipeReducer,
    levelExp: levelExpReducer,
    powers: powerReducer,
    playerStats: playerStatsSlice,
    GameData: gameStatsSlice,
    theMarket: marketSlice,
    buyletter: buyLetterSlice,
    auction: auctionSlice,
    endgame: endGameSlice
  }
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
