## Como Rodar os Testes
Instalar Dependências:

pip install -r requirements.txt

Iniciar o Frontend: Certifique-se de que o Live Server esteja rodando e que o URL definido em ${URL} no arquivo frontend_tests.robot aponte para a página.

Executar os Testes: 
No terminal, dentro do diretório robot-tests, execute:

robot tests/frontend_tests.robot

Verificar os Resultados: Após a execução, o Robot Framework gerará arquivos output.xml, log.html e report.html. 
Abra o report.html em um navegador para visualizar os resultados detalhados.