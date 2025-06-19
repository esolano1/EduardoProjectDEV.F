import React, { useState, useEffect } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';

const Game = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const generateRandomNumber = () => {
    const num = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(num);
    setMessage('');
    setUserInput('');
    setGameOver(false);
    setAttempts(0);
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleCheck = () => {
    const guess = Number(userInput);
    setAttempts(attempts + 1);

    if (guess === randomNumber) {
      setMessage(`¡Correcto! Adivinaste en ${attempts + 1} intento(s)`);
      setGameOver(true);
    } else if (guess < randomNumber) {
      setMessage('El número es mayor');
    } else {
      setMessage('El número es menor');
    }
  };

 return (
  <div className="game-container">
    <h2>Adivina el número del 1 al 100</h2>
    <InputNumber
      value={userInput}
      onChange={handleChange}
      disabled={gameOver}
    />
    <button onClick={handleCheck} disabled={gameOver || !userInput}>
      Adivinar
    </button>
    <Message message={message} />
    {gameOver && <RestartButton onClick={generateRandomNumber} />}
  </div>
);

};

export default Game;
