import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PainelFavoritos = ({ favoritos, onRemoverFavorito }) => {
  const [expandido, setExpandido] = React.useState(false);

  if (favoritos.length === 0) {
    return (
      <div className="card shadow mb-4">
        <div className="card-header bg-secondary text-white">
          <h2 className="h5 mb-0">Painel Favoritos</h2>
        </div>
        <div className="card-body">
          <p className="text-muted mb-0">Nenhum atleta favorito adicionado.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow mb-4">
      <div className="card-header bg-secondary text-white d-flex justify-content-between align-items-center">
        <h2 className="h5 mb-0">Painel Favoritos ({favoritos.length})</h2>
        <button 
          onClick={() => setExpandido(!expandido)}
          className="btn btn-sm btn-outline-light"
        >
          {expandido ? 'Recolher' : 'Expandir'}
        </button>
      </div>

      {expandido && (
        <div className="card-body">
          <div className="list-group">
            {favoritos.map((atleta) => (
              <div 
                key={atleta.id} 
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(`${atleta.firstname} ${atleta.lastname}`)}&background=random&size=50`}
                    alt={`${atleta.firstname} ${atleta.lastname}`}
                    className="rounded-circle me-3"
                    width="40"
                    height="40"
                  />
                  <span>{atleta.firstname} {atleta.lastname}</span>
                </div>
                <button
                  onClick={() => onRemoverFavorito(atleta.id)}
                  className="btn btn-sm btn-danger"
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PainelFavoritos;
