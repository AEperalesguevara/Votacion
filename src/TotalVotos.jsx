import PropTypes from "prop-types";
import "./TotalVotos.css";

const TotalVotos = ({ total }) => {
  return (
    <div className="total-votes">
      <h1>Total de Votos</h1>
      <p>{total}</p>
    </div>
  );
};

TotalVotos.propTypes = {
  total: PropTypes.number.isRequired,
};

export default TotalVotos;
