import "../homePage/homePage.css";

export const Rules = () => (
  <>
    <h2>RULES</h2>
    <hr />
    <div className="rules">
      <p> ) Each throw, the player decides which piece to move </p>
      <br />
      <p>
        ) A piece simply moves in a clockwise direction around the track given
        by the number thrown.
      </p>
      <br />
      <p>
        ) If no piece can legally move according to the number thrown, play
        passes to the next player.
      </p>
      <br />
      <p>
        ) A throw of 6 gives another turn. A player must throw a 6 to move a
        piece from the starting circle onto the first square on the track. (and
        the player then has another throw).
      </p>
      <br />
      <p>
        ) If a piece lands on a piece of a different colour, the piece jumped
        upon is returned to its starting circle. If a piece lands upon a piece
        of the same colour, this forms a block.
      </p>
      <br />
      <p>
        ) When a piece has circumnavigated the board, it proceeds up the home
        column. A piece can only be moved onto the home triangle by an exact
        throw. The first person to move all 4 pieces into the home triangle
        wins.
      </p>
    </div>
    <hr />
  </>
);
