import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const VotingContext = createContext();

export const useVoting = () => {
  return useContext(VotingContext);
};

export const VotingProvider = ({ children }) => {
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
    <VotingContext.Provider
      value={{ votes, statType, setStatType, handleVote, totalVotes }}
    >
      {children}
    </VotingContext.Provider>
  );
};

VotingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
