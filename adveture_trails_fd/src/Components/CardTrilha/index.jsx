import * as PropTypes from "prop-types";
import "./style.css";
import { Chip, Rating } from "@mui/material";

function CardTrilha({ dadosTrilha }) {
  // Mapeamento dos níveis de dificuldade para valores de Rating
  const dificuldadeMap = {
    "MuitoFácil" : 1,
    "Fácil": 2,
    "Moderada": 3,
    "Difícil": 4,
    "MuitoDifícil" : 5
  };

  return (
    <div className="card_container">
      <div
        style={{ backgroundImage: `url(${dadosTrilha.imagem_url})` }}
        className="card_imagem"
        alt="imagem trilha"
      />
      <div className="card_data_container">
        <h1>
          {dadosTrilha.nome} - {dadosTrilha.cidade} / {dadosTrilha.estado}
        </h1>
        <h4>Por: {dadosTrilha.nomeUsuario}</h4>
        <div className="duracao_trajeto">
          <p>Duração: {dadosTrilha.duracao}</p>
          <p>Trajeto: {dadosTrilha.trajeto}</p>
        </div>
        <div className="dificuldade_tipo">
          <Chip label={dadosTrilha.dificuldade} />
          <Chip label={dadosTrilha.tipo} />
        </div>
        <div>
          <Rating name="read-only" value={dificuldadeMap[dadosTrilha.dificuldade]} readOnly />
        </div>
      </div>
    </div>
  );
}

// Configuração das PropTypes
CardTrilha.propTypes = {
  dadosTrilha: PropTypes.exact({
    nome: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    duracao: PropTypes.string.isRequired,
    trajeto: PropTypes.string.isRequired,
    dificuldade: PropTypes.oneOf(["MuitoFácil", "Fácil", "Moderada", "Difícil", "MuitoDifícil"]).isRequired,
    tipo: PropTypes.oneOf(["caminhada / trekking", "ciclismo"]).isRequired,
    nomeUsuario: PropTypes.string.isRequired,
    imagem_url: PropTypes.string.isRequired
  })
};

export default CardTrilha;
