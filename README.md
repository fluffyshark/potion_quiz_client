![potion_quiz_starter](https://user-images.githubusercontent.com/16481598/221392045-02304a78-b33c-4a41-a874-6ca06bb33114.png)



**Languages and tools used**

<p align="center">
  <img width="80%" src="https://user-images.githubusercontent.com/16481598/221394297-07336305-7642-45fb-9530-432b6ae2c704.png" alt="Material Bread logo">
</p>


**Description**
-
Web app build with React to increase students engagement in quiz questions regardless 
of subjects. The app make use of an alchemistic theme and students answer questions to
gain coins, which they spend on ingredients to brew magic potion. The potions can be 
activated for improving various aspects of the quiz, or just to be a jerk to your classmates.
The main goal of the game is to unlock all 20 potions at the highest level. The host's view, which shows a leaderboard, is designed to be displayed at a projector or big monitor. Before start, the host's view dispays a game code and a lobby for players to connect to.   





<p align="center">
  <img width="50%" src="https://user-images.githubusercontent.com/16481598/221392077-61883de7-589a-4a74-88c1-92ce3e08454b.gif" alt="Material Bread logo">
</p>



The app is split between a React client and an Express server. Both parts are hosted
on an AWS Ubuntu instance. The parts communicate via socket.io. Redux is used as a global store in the client part.
The web app uses Axios to fetch quizzes from the Quiz Editor's database.

**Features**
-
- Complete quiz questions and be rewarded gold.
- Spend gold on buying ingredients.
- Craft potions by combining the correct ingredients.
- Use potions to improve gameplay for you and your classmates, or not.
- Sell and buy ingredients to on a market.
- Buy potions on a Dutch auction.

<p align="center">
  <img width="80%" src="https://user-images.githubusercontent.com/16481598/221401593-ed52db3b-72ed-4f36-9863-c352e2a24491.png" alt="Material Bread logo">
</p>

**Potion effects**
-
**Level 1 - Novice**
- GIFT EXP - Gives two players a gift of experience to help unlock new potions. 
- DOUBLE POINTS - Double you income for each question for x seconds.
- SPEED UP - Reduces the wait time between questions.
- PROTECTION - Gives you protection agains all harmful potions.

**Level 2 - Apprentice**
- FREEZE - Makes your target unable to do anything by freezing the screen for a time.
- 50 / 50 - You will only need to choose between two answer alternatives.
- POINT POISON - Your target will lose 2 gold every second this potion is active.
- GIVE GIFT - Gift two players a set crafting ingredients.

**Level 3 - Expert**
- TRANSMUTATION - Transform several ingredients into one of your choosing.
- TRIPPLE POINTS - Tripple you income for each question.
- JUKEBOX - The host starts playing background music of your choosing. 
- PRICE RUNNER - Get disconts at the shop for 60 seconds.

**Level 4 - Master**
- MASS PROTECTION - Gives you and three others protection agains all harmful potions.
- REVEAL - Reveal ingredient's correct amount for random potions.
- BLOCKER - Throw slime on your target's screen and locks him in the quiz section.
- DOUBLE BATCH - Craft two potions instead of one while this potion is active.

**Level 5 - Grandmaster**
- EPIC CHALLEGE - Clear the challenges and get a random rewards for it.
- STREAK BONUS - Get increasing bonus income for every correct question in a row. While you stay in quiz section.
- MASS FREEZE - Makes three players unable to do anything by freezing the screen.
- GOLDEN POINTS - Makes the each question worth 5x the normal income.

<br/>

**Potion effects example**
-
**Me being a jerk to my fellow classmate**
<p align="center">
  <img width="70%" src="https://user-images.githubusercontent.com/16481598/221404464-764ac1e6-83e9-4c06-a218-1786e34d5ed1.gif" alt="Material Bread logo">
</p>

<p align="center">
  My screen
</p>

<br/>

<p align="center">
  <img width="70%" src="https://user-images.githubusercontent.com/16481598/221404507-28d65cb3-86d5-4e86-a692-3d1bea85e192.gif" alt="Material Bread logo">
</p>
<p align="center">
  My classmate's screen
</p>




