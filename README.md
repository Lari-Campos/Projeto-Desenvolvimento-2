# Apoio ao QA #

## Descrição
Este projeto é uma solução web para auxiliar equipes de QA na geração de cenários de teste no formato Gherkin, utilizando a API do ChatGPT. Os usuários podem inserir uma história de usuário e, com um clique, obter cenários de teste gerados automaticamente. A aplicação é dividida em frontend (HTML, CSS, JavaScript) e backend (Node.js).


## Pré-requisitos
Node.js instalado em sua máquina.
Chave de API válida da OpenAI.
Navegador chrome

################################    
## Instalação e Configuração
- Clone o repositório:

    git clone https://github.com/seu-usuario/qa-test-generator.git

- Instale as dependências do backend:

    npm install

- Configure a chave da API da OpenAI:

    Abra o arquivo server.js.
    Substitua 'SUA_API_KEY_AQUI' pela sua chave de API.

- Inicie o backend:

node server.js
Abra o arquivo index.html

### Como Usar ###
No navegador, insira uma história de usuário no campo de texto, como:

Como um cliente, quero pesquisar produtos na loja online para encontrar o melhor preço.
Clique no botão "Enviar".
