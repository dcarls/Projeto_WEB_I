import axios from 'axios';

// Configuração da API NBA
const apiNBA = axios.create({
  baseURL: 'https://api-nba-v1.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY || 'SUA_CHAVE_AQUI',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
  }
});

// Função para buscar jogadores por nome
export const buscarJogadoresPorNome = async (nome) => {
  try {
    const response = await apiNBA.get('/players', {
      params: { search: nome }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar jogadores:', error);
    throw error;
  }
};

// Função para buscar detalhes de um jogador por ID
export const buscarJogadorPorId = async (id) => {
  try {
    const response = await apiNBA.get(`/players`, {
      params: { id: id }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar detalhes do jogador:', error);
    throw error;
  }
};

// Função para obter imagem do jogador (solução alternativa)
export const obterImagemJogador = (nome) => {
  // Como a API não fornece imagens, usaremos uma API de placeholder como alternativa
  // Em uma implementação real, poderíamos integrar com outra API de imagens ou usar um banco de imagens
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(nome)}&background=random&size=200`;
};

export default apiNBA;
