// CounterGame.jsx
import { useReducer, useRef, useCallback, useEffect, useState } from "react";

// Estado inicial
const initialState = { count: 0, history: [] };

// Reducer para manejar las acciones
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + action.payload,
        history: [...state.history, `+${action.payload} (Nuevo valor: ${state.count + action.payload})`],
      };
    case "decrement":
      return {
        count: state.count - 1,
        history: [...state.history, `-1 (Nuevo valor: ${state.count - 1})`],
      };
    case "reset":
      return initialState;
    case "undo":
      if (state.history.length === 0) return state;
      const lastEntry = state.history[state.history.length - 1];
      const newHistory = state.history.slice(0, -1);
      const newCount = eval(`${state.count} ${lastEntry.includes('+') ? '-' : '+'} ${parseInt(lastEntry.match(/\d+/)[0])}`);
      return { count: newCount, history: newHistory };
    case "loadHistory":
      return { ...state, history: action.payload };
    default:
      return state;
  }
}

function CounterGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const incrementBtnRef = useRef(null);
  const [inputValue, setInputValue] = useState(1); // Para el incremento personalizado

  // Enfocar botón de incremento
  useEffect(() => {
    incrementBtnRef.current.focus();
  }, []);

  // Guardar historial en localStorage
  useEffect(() => {
    localStorage.setItem("counterHistory", JSON.stringify(state.history));
  }, [state.history]);

  // Cargar historial si existe
  useEffect(() => {
    const stored = localStorage.getItem("counterHistory");
    if (stored) {
      dispatch({ type: "loadHistory", payload: JSON.parse(stored) });
    }
  }, []);

  // Funciones optimizadas con useCallback
  const handleIncrement = useCallback(() => {
    dispatch({ type: "increment", payload: parseInt(inputValue) || 1 });
  }, [inputValue]);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  const handleUndo = useCallback(() => {
    dispatch({ type: "undo" });
  }, []);

  return (
      <div style={{ padding: "20px" }}>
      <h2>Contador: {state.count}</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Incremento"
          style={{ marginRight: "10px" }}
        />
        <button ref={incrementBtnRef} onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleUndo}>Deshacer</button>
      </div>

      <h3>Historial de cambios:</h3>
      {state.history.length === 0 ? (
        <p>No hay historial aún.</p>
      ) : (
        <ul>
          {state.history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CounterGame;
