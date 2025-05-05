# Bomb Defusal Game

A fun and interactive bomb defusal game where players must enter the correct codes to disarm the bomb before the timer runs out. 

## Classroom Activity Idea : Split Students into Teams
I used this app to create an engaging recap lesson on coding exercises. The classroom was split into multiple pairs, each pair receiving a code exercise. The result of the coding exercises is a digit. The final code is made up of all the digits of all the teams. If the code is correct proceed to the next round, where new tasks (coding exercises) will be given.

---

## Features

- **Countdown Timer**: Players must disarm the bomb before the timer reaches zero. (default time: 50min)
- **Multiple Rounds**: The game includes multiple rounds, each with a unique code to disarm the bomb. (default number of rounds: 3)
- **Sound Effects**: Includes success, failure, ticking, and explosion sounds for an engaging experience.
- **Visual Effects**: Explosion animations and background changes to enhance gameplay.
- **Restart Option**: Teacher can restart the game at any time by reloading the page.

---

## How to Play

1. Press the **Start** button to begin the game.
2. Enter the correct code for each round in the input fields.
3. Press the **Disarm** button to submit the code.
4. If the code is correct:
   - Progress to the next round.
   - Disarm all rounds to win the game.
5. If the code is incorrect:
   - Lose time as a penalty.
   - Try again before the timer runs out.
6. If the timer reaches zero, the bomb explodes, and the game ends.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bomb-game.git
   cd bomb-game
   ```
2. Install dependencies
   ```bash
   npm install express
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. Open the game in your browser
    ```bash
    http://localhost:3000
    ```