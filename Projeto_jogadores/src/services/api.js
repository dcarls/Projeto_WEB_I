import axios from 'axios';

// Configuração da API NBA
export const APIBaseConfig = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/v3',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_API_KEY || 'SUA_CHAVE_AQUI',
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
  }
});

// Função para buscar jogadores por nome
export const buscarJogadoresPorNome = async (nome, id) => {

  const params = {
    search: nome
  }

  // Buscar jogador por id
  if (id) {
    params.player = id
  }

  try {
    const response = await APIBaseConfig.get('/players/profiles', {
      params
    });
    return response.data.response;
  } catch (error) {
    console.error('Erro ao buscar jogadores:', error);
    throw error;
  }
};

// Função para obter imagem do jogador (solução alternativa)
export const obterImagemJogador = (nome) => {
  // Como a API não fornece imagens, usaremos uma API de placeholder como alternativa
  // Em uma implementação real, poderíamos integrar com outra API de imagens ou usar um banco de imagens
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(nome)}&background=random&size=200`;
};

