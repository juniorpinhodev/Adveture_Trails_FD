import React from 'react';
import PropTypes from 'prop-types';

function CardTrilha(props) {
  const { 
    nomeTrilha,
    cidadeEstado,
    duracao,
    trajeto,
    dificuldade,
    tipoTrilha,
    nomeCriador,
    imagemURL
  } = props;

  return (
    <div>
      <h1>{nomeTrilha}</h1>
      <p>Cidade e Estado: {cidadeEstado}</p>
      <p>Duração: {duracao}</p>
      <p>Trajeto: {trajeto}</p>
      <p>Dificuldade: {dificuldade}</p>
      <p>Tipo de Trilha: {tipoTrilha}</p>
      <p>Criador: {nomeCriador}</p>
      <img src={imagemURL} alt={nomeTrilha} />
    </div>
  );
}

CardTrilha.propTypes = {
  nomeTrilha: PropTypes.string.isRequired,
  cidadeEstado: PropTypes.string.isRequired,
  duracao: PropTypes.string.isRequired,
  trajeto: PropTypes.string.isRequired,
  dificuldade: PropTypes.string.isRequired,
  tipoTrilha: PropTypes.string.isRequired,
  nomeCriador: PropTypes.string.isRequired,
  imagemURL: PropTypes.string.isRequired,
};

export default CardTrilha;
