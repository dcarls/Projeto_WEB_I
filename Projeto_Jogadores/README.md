# Sistema de Pesquisa de Atletas

Um sistema web desenvolvido com ReactJS e Bootstrap que permite pesquisar atletas de basquete, visualizar suas informações e gerenciar favoritos.

## Funcionalidades

- Pesquisa de atletas por nome
- Exibição de informações detalhadas no componente CardAtleta
- Visualização de imagens dos atletas
- Adição/remoção de atletas aos favoritos
- Painel de favoritos para gerenciar atletas salvos

## Tecnologias Utilizadas

- ReactJS com JavaScript
- Bootstrap para estilização
- Axios para requisições HTTP
- API-NBA da RapidAPI
- Vite como bundler

## Configuração do Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Descompacte o arquivo zip
2. Navegue até a pasta do projeto:
```bash
cd app_atletas_js
```

3. Instale as dependências:
```bash
npm install
```

4. Configure a chave da API:

Para utilizar a API-NBA, você precisa obter uma chave de API na plataforma RapidAPI:

- Acesse [RapidAPI](https://rapidapi.com/api-sports/api/api-nba)
- Inscreva-se e obtenha sua chave de API
- Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
```
VITE_RAPIDAPI_KEY=sua_chave_aqui
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## Estrutura do Projeto

- `/src/components/Pesquisa`: Componente de pesquisa de atletas
- `/src/components/CardAtleta`: Componente para exibição de informações do atleta
- `/src/components/PainelFavoritos`: Componente para gerenciar atletas favoritos
- `/src/services/api.js`: Configuração e funções de integração com a API-NBA

## Build para Produção

Para gerar uma versão de produção do projeto:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist`, prontos para serem hospedados em qualquer servidor web estático.

## Observações

- A API-NBA não fornece imagens dos atletas diretamente, então utilizamos uma solução alternativa para gerar avatares baseados nos nomes dos atletas.
- O plano gratuito da API-NBA tem um limite de requisições, verifique a documentação para mais detalhes.

## Licença

MIT
"# HelpDani" 
