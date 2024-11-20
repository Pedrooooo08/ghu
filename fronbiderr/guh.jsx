import React, { useState, useEffect } from "react";
import axios from "axios";

const ListarChamados = () => {
  const [chamados, setChamados] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/chamados") // Substitua pela URL correta do backend
      .then((response) => setChamados(response.data))
      .catch((error) => console.error("Erro ao buscar chamados:", error));
  }, []);

  const handleFiltro = (event) => {
    setFiltro(event.target.value);
  };

  const chamadosFiltrados = chamados.filter((chamado) =>
    chamado.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2>Bem vindo, Pedro Moreira</h2>
        <button onClick={() => console.log("Sair clicado!")}>Sair</button>
      </header>
      <input
        type="text"
        placeholder="Filtrar..."
        value={filtro}
        onChange={handleFiltro}
        style={{ marginBottom: "10px", padding: "5px" }}
      />
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Impacto</th>
            <th>Data Ocorrência</th>
            <th>Atribuído</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {chamadosFiltrados.map((chamado) => (
            <tr key={chamado.id}>
              <td>{chamado.titulo}</td>
              <td>{chamado.impacto}</td>
              <td>{chamado.dataOcorrencia}</td>
              <td>{chamado.atribuido}</td>
              <td>
                <button onClick={() => console.log("Editar", chamado.id)}>✏️</button>
                <button onClick={() => console.log("Excluir", chamado.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button style={{ marginTop: "20px" }} onClick={() => console.log("Novo Chamado")}>
        Novo Chamado
      </button>
    </div>
  );
};

export default ListarChamados;
