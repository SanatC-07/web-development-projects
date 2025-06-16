# 🔴🟣🟢🟡 Simon Says Game Project

Simon says is a classic memory game where players follow instructions given by 'Simon'. This game generates a sequence of colors that the player needs to reproduce by clicking the corresponding color buttons in the correct order. The sequence grows with each level, increasing the challenge and testing the player’s memory. The game’s logic was implemented entirely using JavaScript, from generating color patterns and adding new levels, to verifying the player’s inputs and triggering game-over conditions when a mistake is made.

## File Structure
- `sounds/`: This directory includes MP3 sound files for the game's button effects.
- `game.js`: The JavaScript file that contains game logic, event handlers, and functionality.
- `index.html`: The HTML file that sets up the game’s structure and UI.
- `styles.css`: The stylesheet that handles the styling and visual effects for the game.

## Game Logic
The game logic is implemented using JavaScript’s event handlers, array operations, and condition checks within `game.js`. When the game starts, a colour is randomly selected from an array of four colours and added to a sequence. The game then plays back this sequence by flashing the corresponding colour buttons and plays their associated sounds. The player has to repeat the sequence by clicking the colour buttons in the correct order. If the correct sequence of colours are selected, a new colour is added each round which makes the game progressively more challenging. If the player makes a mistake, the game signals a game over through sound and animations. This resets the sequence, and waits for a restart. 

## Installation and How to Play
- Use the following command to download all files locally.

```bash
git clone https://github.com/SanatC-07/web-development-projects.git
cd web-development-projects/simon-says-game-challenge
```

- Open `index.html` in your browser.
- The game will start when you press any key.
- You will be given a sequence of colours to play, keep pressing the correct button corresponding to the highlighted button.