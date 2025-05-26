import React, { useState, useEffect } from 'react';
import Pesquisa from './components/Pesquisa';
import CardAtleta from './components/CardAtleta';
import PainelFavoritos from './components/PainelFavoritos';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [atletas, setAtletas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [carregando, setCarregando] = useState(false);

  // Carregar favoritos do localStorage ao iniciar
  useEffect(() => {
    const favoritosArmazenados = localStorage.getItem('favoritos');
    if (favoritosArmazenados) {
      try {
        setFavoritos(JSON.parse(favoritosArmazenados));
      } catch (error) {
        console.error('Erro ao carregar favoritos:', error);
      }
    }
  }, []);

  // Salvar favoritos no localStorage quando mudar
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const handleResultadoPesquisa = (resultados) => {
    setAtletas(resultados);
    setCarregando(false);
  };

  const handleAdicionarFavorito = (atleta) => {
    // Verificar se o atleta já está nos favoritos
    const isFavorito = favoritos.some(fav => fav.id === atleta.id);
    
    if (isFavorito) {
      // Remover dos favoritos
      setFavoritos(favoritos.filter(fav => fav.id !== atleta.id));
    } else {
      // Adicionar aos favoritos
      setFavoritos([...favoritos, atleta]);
    }
  };

  const handleRemoverFavorito = (id) => {
    setFavoritos(favoritos.filter(fav => fav.id !== id));
  };

  const verificarFavorito = (id) => {
    return favoritos.some(fav => fav.id === id);
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Sistema de Pesquisa de Atletas</h1>
      
      <div className="row">
        <div className="col-md-4 mb-4">
          <Pesquisa onResultadoPesquisa={handleResultadoPesquisa} />
          <PainelFavoritos 
            favoritos={favoritos} 
            onRemoverFavorito={handleRemoverFavorito} 
          />
        </div>
        
        <div className="col-md-8">
          {carregando ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Carregando...</span>
              </div>
              <p className="mt-2 text-muted">Carregando atletas...</p>
            </div>
          ) : atletas.length > 0 ? (
            <>
              <h2 className="mb-3">Resultados da Pesquisa</h2>
              <div className="row row-cols-1 row-cols-md-2 g-4">
                {atletas.map(atleta => (
                  <div className="col" key={atleta.id}>
                    <CardAtleta 
                      atleta={atleta} 
                      onAdicionarFavorito={handleAdicionarFavorito}
                      isFavorito={verificarFavorito(atleta.id)}
                    />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-5 bg-light rounded">
              <p className="text-muted mb-0">Pesquise por um atleta para ver os resultados.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
