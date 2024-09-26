import { useVoting } from "./VotingContext";

const Filtro = () => {
  const { statType, setStatType } = useVoting();

  return (
    <div>
      <h2>Mostrar estadísticas:</h2>
      <select value={statType} onChange={(e) => setStatType(e.target.value)}>
        <option value="total">Total de votos</option>
        <option value="percentages">Porcentajes</option>
        <option value="both">Ambos</option>
      </select>
    </div>
  );
};

export default Filtro;
