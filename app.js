import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListarChamados from "./ListarChamados";
import CriarChamado from "./CriarChamado";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListarChamados />} />
        <Route path="/chamado/novo" element={<CriarChamado />} />
        <Route path="/chamado/editar/:id" element={<CriarChamado />} />
      </Routes>
    </Router>
  );
}

export default App;
