import PropTypes from "prop-types";

const VotosIndividuales = ({ votes, statType }) => {
  const totalVotes = Object.values(votes).reduce(
    (sum, voteCount) => sum + voteCount,
    0
  );

  const renderStatistics = () => {
    return (
      <div>
        {Object.keys(votes).map((candidate) => (
          <div key={candidate}>
            {statType !== "percentages" && (
              <p>
                {candidate}: {votes[candidate]} votos
              </p>
            )}
            {statType === "percentages" || statType === "both" ? (
              <p>
                Porcentaje: {((votes[candidate] / totalVotes) * 100).toFixed(2)}
                %
              </p>
            ) : null}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h2>Estadísticas:</h2>
      {totalVotes > 0 ? renderStatistics() : <p>Aún no hay votos.</p>}
    </div>
  );
};

VotosIndividuales.propTypes = {
  votes: PropTypes.objectOf(PropTypes.number).isRequired,
  statType: PropTypes.string.isRequired,
};

export default VotosIndividuales;
