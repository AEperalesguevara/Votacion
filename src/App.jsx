import { useState } from "react";
import VotingButtons from "./VotingButtons";
import StatSelector from "./Filtro";
import Statistics from "./VotosIndividuales";
import TotalVotes from "./TotalVotos";
import "./App.css";

const App = () => {
  const [votes, setVotes] = useState({
    "Candidato 1": 0,
    "Candidato 2": 0,
    "Candidato 3": 0,
    "Candidato 4": 0,
  });

  const [statType, setStatType] = useState("total");

  const handleVote = (candidate) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [candidate]: prevVotes[candidate] + 1,
    }));
  };

  const totalVotes = Object.values(votes).reduce(
    (sum, voteCount) => sum + voteCount,
    0
  );

  return (
    <div className="container">
      <VotingButtons handleVote={handleVote} />
      <StatSelector statType={statType} setStatType={setStatType} />
      <Statistics votes={votes} statType={statType} />
      <TotalVotes total={totalVotes} />
    </div>
  );
};

export default App;
