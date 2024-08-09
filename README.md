# Color Mania Game
Welcome to the Color Mania Game! This project is a simple implementation of the classic memory game using HTML, CSS, JavaScript, Node.js, and MySQL.

## Play the Game 💜💛💙❤️
You can play the game [here](https://siniekoo19.github.io/Color-Mania/).

## How to Play 🎮
1. **Start the Game:**
   - To start the game, press any key on the keyboard.
2. **Watch the Sequence:**
   - One of the four colored boxes will flash.
   - Remember the sequence of the flashed boxes.
3. **Repeat the Sequence:**
   - Click the boxes in the same order as they flashed.
   - If you repeat the sequence correctly, the game will proceed to the next round and add another flash to the sequence.
4. **Continue the Sequence:**
   - Each round adds a new box to the sequence.
   - Keep repeating the sequence correctly to advance to higher rounds.
5. **Game Over:**
   - If you click the wrong box, the game ends.
   - Your score, which is the number of rounds you completed, will be displayed.
   - To restart the game, press any key on the keyboard again.

## Backend Features 🚀
This project now includes a backend powered by Node.js and MySQL. The backend handles user data through a REST API, allowing for the following features:
- **User Authentication:** 
  - A home page is opened where you can log in if you already have an account or sign up if you don't.
- **Top 5 High Scores:**
  - The home page also displays the top 5 highest-scoring users.
- **Password Recovery:**
  - If you forget your password, you can use the "Forgot Password" feature to reset it.
- **Highest Score Tracking:**
  - The game page shows the highest level you have achieved to date.
  - If you score higher than your previous highest score, the database is updated with your new high score.

## Technology Stack 💻
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **API:** REST API

## Project Structure 🚀
The project consists of the following files:
- **index.html:** The main HTML file containing the structure of the game.
- **styles.css:** The CSS file for styling the game elements.
- **script.js:** The JavaScript file that contains the game logic.
- **server.js:** The Node.js file that handles backend logic.
- **database.sql:** The SQL file that sets up the MySQL database.

## GamePlay Mechanics
- **Sequence Generation:** The game randomly selects one of the four boxes to flash in each round. The sequence of flashed boxes is stored and extended in each round.
- **User Input:** Users must click the boxes in the exact sequence as they flashed. The game checks the user input against the stored sequence.
- **Feedback:** The game provides visual feedback by flashing the body red to indicate the user entered the wrong sequence and displays the current score with a game over message when applicable.
- **Responsive Design:** The game is designed to be responsive. On smaller screens (less than 600px), a "Start" button will be displayed. Once the game starts, the button will disappear, and the level information will be displayed. If the user inputs a wrong sequence, the game over message will be displayed, and the user can restart the game by pressing the "Start" button again.

## 🚀 About Me
👋 Hi there! I'm Sinchana Chatterjee, an enthusiastic and determined B.Tech student with a fervent aspiration to excel as a Web Developer.

## Authors
[@siniekoo19](https://github.com/siniekoo19)

## Acknowledgments
- Thanks to the open-source community for their invaluable contributions to the tools and frameworks used in this project.

## Feedback
If you have any feedback, please reach out to me at csinchana19@gmail.com


