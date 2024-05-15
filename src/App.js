import { Card } from "./componentes/Card/Card";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";

function App() {
  return (
    <ProvedorTema>
      <Estilos/>
      <Card>
      <h1>Freeelando</h1>
      </Card>
    </ProvedorTema>
  );
}

export default App;
