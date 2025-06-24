# Random 10- A Quiz App

[Welcome to **Random 10**!](https://juno-joseph.github.io/Project-2/public/)


A fun, interactive trivia web app that challenges you with 10 random questions every time you play. Test your knowledge, compete for high scores, and enjoy a vibrant, modern UI with sound effects and smooth animations.

## Features

- **10 Random Questions:** Each game session presents a new set of questions.
- **Instant Feedback:** See if your answer is correct or incorrect with color highlights and sound effects.
- **Timer:** Answer each question before time runs out!
- **Score Tracking:** Your score is saved and displayed on the results page.
- **Responsive Design:** Looks great on desktop and mobile.
- **Volume Control:** Adjust sound effects volume in-game.

## Folder Structure

```
Project-2/
│
├── index.html         # Home page
├── game.html          # Quiz game page
├── result.html        # Results page
├── main.js            # Main quiz logic
├── questions.json     # Question data (not included here)
├── style.css          # Additional styles
└── sounds/
    ├── correct.mp3    # Sound for correct answers
    └── incorrect.mp3  # Sound for incorrect answers
```

## Getting Started

1. **Clone or Download** this repository.


2. Make sure you have the following files:
   - `index.html`, `game.html`, `result.html`
   - `main.js`, `style.css`
   - `sounds/correct.mp3`, `sounds/incorrect.mp3`
   - `questions.json` (add your own questions in the correct format)


3. Open `index.html` in your browser to start playing!

## How to Play

1. Click **Start Quiz** on the home page.
2. Answer each question before the timer runs out.
3. Get instant feedback with colors and sounds.
4. At the end, view your score and try again to improve!

## Customization

- **Add/Change Questions:** Edit `questions.json` with your own trivia.
- **Change Sounds:** Replace the MP3 files in the `sounds/` folder.
- **Style:** Modify `style.css` or the `<style>` blocks in the HTML files for a new look.


## Credits

- Akash Ramkaran
  * Design and implement the overall UI/UX (color themes, layouts, responsive design).
  * Create and style all HTML pages (index.html, game.html, result.html).
  * Collaborate on integrating feedback and animation elements.

- Juno Joseph
 * Develop the main quiz logic in main.js (question loading, answer checking, score tracking, timer).
 * Handle data management (fetching and shuffling questions from questions.json).
 * Implement local storage for saving scores and quiz state.  
 * Collaborate on integrating sound and feedback logic. 

- Mret Hein
 * Implement interactive features: sound effects, feedback animations, and visual cues
 * Add and configure audio files and volume controls.
 * Enhance user experience with instant feedback, GIFs, and text animations.
 * Collaborate on testing, debugging, and refining the app’s interactivity.


---

## Demo Walkthrough

Watch the video below for a quick walkthrough of Random 10 in action:

[![Demo Video](/demo-screenshot.jpg)](/demo-1.mp4)

*Click the image above to view the demo

Invite your friends and have a go at Random 10!  
