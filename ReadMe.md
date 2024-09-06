- Write/design a library to determine a winner in a fake card game called ComboBreaker. Don't worry about UI or implementing every method, just draw out or stub what you need and who will call what, and we will dive deeper into the interesting areas.
- Initial Rules:
  - The game consists of 30 cards, where each card has a Value which is a number
    between 0-9 and a Color which is Red, Green, or Blue (RGB)
  - Each player gets 3 cards
  - Each game consists of some number of players, and winners are determined by who has the best Combo:
    1. Color Combo (3 cards same color)
    - Value Combo (3 cards same value)
    - Pair Combo (2 cards with same value, and 1 random card)
      <incremental additions for extensibility: what if we wanted to change the order of the combos? what if we want to add new combos?>
- Write the library required to play this game.
  // CMD input or passed somehow to application
  let noOfPlayer: number;

// What does a card look like
// Value and a colour

# How to Play

`npm run start`

This will build and start the app for you.

# Software Flow

TODO: Add Mermaid flowchart

```mermaid

```

# Package choices
