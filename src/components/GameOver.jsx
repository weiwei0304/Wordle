import { useContext } from 'react';
import { AppContext } from '../App';

function GameOver() {
  const { gameOver, currAttempt, correctWord } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>{gameOver.guessedWord ? 'Congratulations!' : 'Game Over'}</h3>
      <h1>Correct : {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
      <button className="btn" onClick={() => window.location.reload()}>
        Retry
      </button>
    </div>
  );
}

export default GameOver;
