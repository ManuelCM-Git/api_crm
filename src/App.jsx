import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layaout from "./layout/Layaout";
import Inicio from "./paginas/Inicio";
import NuevoCliente from "./paginas/NuevoCliente/";
import EditarCliente from "./paginas/EditarCliente";
import VerCliente from "./paginas/VerCliente";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Layaout />}>
          <Route index element={<Inicio />} />
          <Route path="nuevo" element={<NuevoCliente />} />
          <Route path="editar/:id" element={<EditarCliente />} />
          <Route path=":id" element={<VerCliente />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
