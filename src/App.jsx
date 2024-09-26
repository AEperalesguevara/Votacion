import { VotingProvider } from "./VotingContext"; // Asegúrate de importar el contexto
import VotingButtons from "./VotingButtons";
import Filtro from "./Filtro"; // Asegúrate de que el nombre sea correcto
import VotosIndividuales from "./VotosIndividuales"; // Asegúrate de que el nombre sea correcto
import TotalVotos from "./TotalVotos";
import "./App.css";
const App = () => {
  return (
    <VotingProvider>
      <div className="container">
        <VotingButtons />
        <Filtro />
        <VotosIndividuales />
        <TotalVotos />
      </div>
    </VotingProvider>
  );
};

export default App;
