import { Link } from 'react-router-dom';

function Citas() {
  // Ejemplo de citas simuladas
  const citas = [
    { id: 1, paciente: 'Juan Pérez' },
    { id: 2, paciente: 'Ana López' },
  ];

  return (
    <div>
      <h2>Lista de Citas</h2>
      <ul>
        {citas.map((cita) => (
          <li key={cita.id}>
            <Link to={`/cita/${cita.id}`}>
              Cita con {cita.paciente}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Citas;
