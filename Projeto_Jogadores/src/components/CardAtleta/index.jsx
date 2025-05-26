import React from 'react';
import { obterImagemJogador } from '../../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardAtleta = ({ atleta, onAdicionarFavorito, isFavorito }) => {
  const nomeCompleto = `${atleta.firstname} ${atleta.lastname}`;
  
  return (
    <div className="card h-100 shadow">
      <div className="position-relative">
        <img 
          src={obterImagemJogador(nomeCompleto)} 
          alt={nomeCompleto}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </div>
      
      <div className="card-body">
        <h3 className="card-title h5 fw-bold">{nomeCompleto}</h3>
        
        <div className="card-text small">
          {atleta.birth?.country && (
            <p className="mb-1"><strong>País:</strong> {atleta.birth.country}</p>
          )}
          
          {atleta.birth?.date && (
            <p className="mb-1"><strong>Data de Nascimento:</strong> {atleta.birth.date}</p>
          )}
          
          {atleta.height?.meters && (
            <p className="mb-1"><strong>Altura:</strong> {atleta.height.meters}m</p>
          )}
          
          {atleta.weight?.kilograms && (
            <p className="mb-1"><strong>Peso:</strong> {atleta.weight.kilograms}kg</p>
          )}
          
          {atleta.college && (
            <p className="mb-1"><strong>Faculdade:</strong> {atleta.college}</p>
          )}
          
          {atleta.nba?.start && (
            <p className="mb-1"><strong>Início na NBA:</strong> {atleta.nba.start}</p>
          )}
        </div>
      </div>
      
      <div className="card-footer bg-white border-top-0 pb-3">
        <button
          onClick={() => onAdicionarFavorito(atleta)}
          className={`btn w-100 ${
            isFavorito 
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
