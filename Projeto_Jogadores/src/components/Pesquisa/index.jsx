import React, { useState } from 'react';
import { buscarJogadoresPorNome } from '../../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pesquisa = ({ onResultadoPesquisa }) => {
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const handlePesquisa = async (e) => {
    e.preventDefault();
    
    if (!termoPesquisa.trim()) {
      setErro('Por favor, digite o nome de um atleta');
      return;
    }

    try {
      setCarregando(true);
      setErro('');
      
      const resultado = await buscarJogadoresPorNome(termoPesquisa);
      
      if (resultado.response && resultado.response.length > 0) {
        onResultadoPesquisa(resultado.response);
      } else {
        setErro('Nenhum atleta encontrado com esse nome');
        onResultadoPesquisa([]);
      }
    } catch (error) {
      console.error('Erro na pesquisa:', error);
      setErro('Ocorreu um erro ao buscar os atletas. Tente novamente.');
      onResultadoPesquisa([]);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header bg-primary text-white">
        <h2 className="h5 mb-0 text-center">Pesquisa de Atletas</h2>
      </div>
      
      <div className="card-body">
        <form onSubmit={handlePesquisa}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={termoPesquisa}
              onChange={(e) => setTermoPesquisa(e.target.value)}
              placeholder="Digite o nome do atleta..."
            />
          </div>
          
          <button
            type="submit"
            disabled={carregando}
            className="btn btn-primary w-100"
          >
            {carregando ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Buscando...
              </>
            ) : 'Buscar Atleta'}
          </button>
        </form>
        
        {erro && (
          <div className="alert alert-danger mt-3" role="alert">
            {erro}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pesquisa;
