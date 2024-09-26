import { useVoting } from "./VotingContext";

const VotingButtons = () => {
  const { handleVote } = useVoting();

  return (
    <div>
      <h2>Vote por su candidato:</h2>
      <button onClick={() => handleVote("Candidato 1")}>Candidato 1</button>
      <button onClick={() => handleVote("Candidato 2")}>Candidato 2</button>
      <button onClick={() => handleVote("Candidato 3")}>Candidato 3</button>
      <button onClick={() => handleVote("Candidato 4")}>Candidato 4</button>
    </div>
  );
};
export default VotingButtons;
