# lessergo-puyo

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A Puyo Puyo game featuring the faces of Red Pandas, created to celebrate the 40th anniversary of the Sabae Nishiyama Zoo. This game uses open data assets provided by the zoo.

## Demo

You can play the game directly in your browser:
**[Play lessergo-puyo](http://ww31.tiki.ne.jp/~vz5yjpqo/sabae/)**

## Features

- **Red Panda Theme:** Uses CC BY-licensed images and vocalizations of Red Pandas from the Sabae Nishiyama Zoo.
- **Classic Gameplay:** Implements familiar Puyo Puyo mechanics, including score tracking, combo chains, and an "All-Clear" bonus.
- **Responsive Controls:** Play using keyboard arrow keys or touch-based swipe gestures.
- **Dynamic Sound:** Features two different sound effects for combo chains.
- **Configurable:** Game parameters like falling speed, board size, and the number of puyo types can be easily modified in `src/config.js`.

## Getting Started

1.  Clone this repository.
2.  Open `index.html` in a modern web browser to play.

### Asset Download (Optional)

This repository includes all necessary image and sound assets. If they are missing, you can download them from the demo server using the provided Deno script.

1.  Install [Deno](https://deno.land/).
2.  Run the script from the project root:
    ```sh
    deno run --allow-net --allow-write tool/download.js
    ```

## How to Play

-   **Move:** Left/Right Arrow Keys or Swipe Left/Right
-   **Rotate:** Up Arrow Key or Swipe Up
-   **Drop Faster:** Down Arrow Key or Swipe Down

## Data and Attribution

-   **Red Panda Assets:** Images and vocalizations are open data from the Sabae Nishiyama Zoo (CC BY).
-   **Game Logic:** The Puyo Puyo rules are based on materials from the official [Puyo Puyo eSports x Programming](https://puyo.sega.jp/program_2020/) initiative.

## License

MIT License — see [LICENSE](LICENSE).