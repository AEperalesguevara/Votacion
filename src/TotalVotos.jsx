import { useVoting } from "./VotingContext"; // Importa el contexto

const TotalVotos = () => {
  const { totalVotes } = useVoting(); // Usa el contexto

  return (
    <div className="total-votes">
      <h1>Total de Votos</h1>
      <p>{totalVotes}</p>
    </div>
  );
};

export default TotalVotos;
