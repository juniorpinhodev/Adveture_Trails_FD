import * as PropTypes from "prop-types"
import "./style.css"

function CardTrilha({dadosTrilha}){
  return (
    <div className="card_container">
      <img className="card_imagem" width={360} src={dadosTrilha.imagem_url} alt="imagem trilha" />
      <h1>{dadosTrilha.nome}</h1>
      <span>{dadosTrilha.cidade_estado}</span>
        <div>
          <p>Duração: {dadosTrilha.duracao}</p>
          <p>Trajeto: {dadosTrilha.trajeto}</p>
          <p>Didifuldade: {dadosTrilha.dificuldade}</p>
          <p>Tipo: {dadosTrilha.tipo}</p>
          <p>Criador: {dadosTrilha.criador}</p>
        </div>
    </div>
  );
};


// configuração das props types
CardTrilha.propTypes = {
  dadosTrilha: PropTypes.exact({
    nome: PropTypes.string.isRequired,
    cidade_estado: PropTypes.string.isRequired,
    duracao: PropTypes.number.isRequired,
    trajeto: PropTypes.number.isRequired,
    dificuldade: PropTypes.string.isRequired,
    tipo: PropTypes.oneOf(['caminhada / trekking', 'ciclismo']),
    criador: PropTypes.string.isRequired,
    imagem_url: PropTypes.string.isRequired
  })
};

export default CardTrilha;