import React, { useState } from "react";

const CriarChamado = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    informacoes: "",
    impacto: "Baixo",
    dataOcorrencia: "",
    atribuido: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSalvar = () => {
    console.log("Chamado salvo!", formData);
    // Aqui você faria a requisição para o backend (axios.post)
  };

  return (
    <div style={{ padding: "20px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2>Bem vindo, Pedro Moreira</h2>
        <button onClick={() => console.log("Sair clicado!")}>Sair</button>
      </header>
      <h3>Detalhes do Chamado</h3>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label>Título</label>
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleInputChange}
            placeholder="Informe um título..."
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Informações</label>
          <textarea
            name="informacoes"
            value={formData.informacoes}
            onChange={handleInputChange}
            placeholder="Insira as instruções aqui..."
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Impacto</label>
          <select name="impacto" value={formData.impacto} onChange={handleInputChange}>
            <option value="Baixo">Baixo</option>
            <option value="Médio">Médio</option>
            <option value="Alto">Alto</option>
          </select>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Data da Ocorrência</label>
          <input
            type="date"
            name="dataOcorrencia"
            value={formData.dataOcorrencia}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Atribuir</label>
          <input
            type="text"
            name="atribuido"
            value={formData.atribuido}
            onChange={handleInputChange}
            placeholder="Selecione o usuário responsável..."
          />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button type="button" onClick={() => console.log("Voltar clicado!")}>
            Voltar
          </button>
          <button type="button" onClick={handleSalvar}>
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CriarChamado;
