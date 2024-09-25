import PropTypes from "prop-types";

const Filtro = ({ statType, setStatType }) => {
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

Filtro.propTypes = {
  statType: PropTypes.string.isRequired,
  setStatType: PropTypes.func.isRequired,
};
export default Filtro;
