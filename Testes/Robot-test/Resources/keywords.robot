*** Settings ***
Library           SeleniumLibrary

*** Keywords ***
Open Browser To Application
    Open Browser    ${URL}    ${BROWSER}
    Maximize Browser Window

Verificar Título da Página
    Title Should Be    Apoio ao QA

Preencher Campo de História
    Input Text    id:userStory    ${USER_STORY}

Deixar Campo de História em Branco
    Clear Element Text    id:userStory

Clicar no Botão Enviar
    Click Button    xpath://button[contains(text(), 'Enviar')]

Verificar Resultado Gerado
    Wait Until Page Contains Element    id:output
    Element Text Should Contain    id:output    Feature:

Verificar Mensagem de Erro
    Wait Until Page Contains Element    id:output
    Element Text Should Be    id:output    Por favor, insira uma história de usuário.
