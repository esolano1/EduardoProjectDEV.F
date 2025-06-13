import React, { useState, useEffect, useMemo } from 'react';
import Planeta from './Planeta';
import Bitacora from './Bitacora';

function App() {
  // ... (estado)
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);

  useEffect(() => {
    console.log("¡El panel está listo!"); // Montaje

    const intervalo = setInterval(() => { // Montaje
      // ... (simulación de vuelo)
      setDistancia(prev => prev + 10);
      setCombustible(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(intervalo); // Desmontaje
      console.log("El panel se ha apagado."); // Desmontaje
    };
  }, []);

  useEffect(() => {
    console.log("¡Combustible actualizado!"); // Actualización
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  const aterrizar = () => {
    setEstadoNave("Aterrizando");
    const nuevoPlaneta = `Planeta ${planetasVisitados.length + 1}`;
    setPlanetasVisitados([...planetasVisitados, nuevoPlaneta]);
  };

  return (
    <div>
      {/* ... (información del panel) */}
      <h1>Panel de Control</h1>
      <p>Distancia: {distancia} km</p>
      <p>Combustible: {combustible} %</p>
      <p>{mensajeEstado}</p>
      <button onClick={aterrizar} disabled={combustible <= 0}>Aterrizar</button>

      {planetasVisitados.map((planeta, index) => (
        <Planeta key={index} nombre={planeta} />
      ))}


      <Bitacora />
      
    </div>
  );
}

export default App;
