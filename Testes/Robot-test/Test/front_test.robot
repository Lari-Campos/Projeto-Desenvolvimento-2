*** Settings ***
Library           SeleniumLibrary
Resource          ../resources/keywords.robot
Suite Setup       Open Browser To Application
Suite Teardown    Close Browser

*** Variables ***
${URL}            http://127.0.0.1:5500/index.html   # Atualize com o caminho do Live Server ou local
${BROWSER}        Chrome
${USER_STORY}     Como cliente, quero acessar a loja para buscar produtos.

*** Test Cases ***
Testar Exibição da Página
    [Tags]    Smoke
    Verificar Título da Página

Testar Envio de História de Usuário
    [Tags]    Functional
    Preencher Campo de História
    Clicar no Botão Enviar
    Verificar Resultado Gerado

Testar Envio de Campo Vazio
    [Tags]    Negative
    Deixar Campo de História em Branco
    Clicar no Botão Enviar
    Verificar Mensagem de Erro
