![potion_quiz_starter](https://user-images.githubusercontent.com/16481598/221392045-02304a78-b33c-4a41-a874-6ca06bb33114.png)



**Languages and tools used**

<p align="center">
  <img width="80%" src="https://user-images.githubusercontent.com/16481598/221394297-07336305-7642-45fb-9530-432b6ae2c704.png" alt="Material Bread logo">
</p>


**Description**
Web app build with React to increase students engagement in quiz questions regardless 
of subjects. The app make use of an alchemistic theme and students answer questions to
gain coins, which they spend on ingredients to brew magic potion. The potions can be 
activated for improving various aspects of the quiz, or just to be a jerk to your classmates.
The main goal of the game is to unlock all 20 potions at the highest level. 





<p align="center">
  <img width="50%" src="https://user-images.githubusercontent.com/16481598/221392077-61883de7-589a-4a74-88c1-92ce3e08454b.gif" alt="Material Bread logo">
</p>
![gif_potion_quiz](https://user-images.githubusercontent.com/16481598/221392077-61883de7-589a-4a74-88c1-92ce3e08454b.gif)


The app is split between a React client and an Express server. Both parts are hosted
on an AWS Ubuntu instance. The parts communicate via socket.io. Redux is used as a global store in the client part.
The web app uses Axios to fetch quizzes from the Quiz Editor's database.
