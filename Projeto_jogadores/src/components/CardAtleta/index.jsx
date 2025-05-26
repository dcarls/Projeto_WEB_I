import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

// assets
import Placeholder from '../../assets/placeholder.png';

const CardAtleta = ({ atleta, onAdicionarFavorito, isFavorito }) => {
  const nomeCompleto = `${atleta.firstname} ${atleta.lastname}`;
  const cardImage = atleta.photo ? atleta.photo.replace(/\\/g, '') : Placeholder;

  return (
    <div className="card h-100 shadow">
      <div className="position-relative">
        <img
          src={cardImage}
          alt={nomeCompleto}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'contain' }}
        />
      </div>

      <div className="card-body">
        <h3 className="card-title h5 fw-bold text-center">{atleta.name}</h3>

        <div className="card-text small">
          {nomeCompleto && (
            <p className="mb-1"><strong>Nome completo:</strong> {nomeCompleto}</p>
          )}

          {atleta.position && (
            <p className="mb-1"><strong>Posição:</strong> {atleta.position}</p>
          )}
          {atleta.age && (
            <p className="mb-1"><strong>Idade:</strong> {atleta.age} anos</p>
          )}

          {atleta.birth?.date && (
            <p className="mb-1"><strong>Data de Nascimento:</strong> {atleta.birth.date}</p>
          )}

          {atleta.height && (
            <p className="mb-1"><strong>Altura:</strong> {atleta.height}</p>
          )}

          {atleta.weight && (
            <p className="mb-1"><strong>Peso:</strong> {atleta.weight}</p>
          )}

        </div>
      </div>

      <div className="card-footer bg-white border-top-0 pb-3">
        <button
          onClick={() => onAdicionarFavorito(atleta)}
          className={`btn w-100 ${isFavorito
            ? 'btn-danger'
            : 'btn-primary'
            }`}
        >
          {isFavorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
        </button>
      </div>
    </div>
  );
};

export default CardAtleta;
