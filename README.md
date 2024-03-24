# Teste Cypress: Verificação do Título e Conteúdo da Página


### Visão Geral do Teste
Este conjunto de testes Cypress foi desenvolvido para verificar o título e o conteúdo da página do site exemplo (https://example.com). O objetivo é garantir que a página esteja carregando corretamente e contenha o texto "More information".

### Estrutura do Teste
O teste é composto por duas especificações:

### 1. Verificação do Título da Página
Descrição: Este teste verifica se o título da página corresponde ao texto esperado, que neste caso é "Example Domain".
Passos:
Visitar a página "https://example.com".
Verificar se o título da página é "Example Domain" usando o comando cy.title().
2. Verificação do Conteúdo da Página
Descrição: Este teste verifica se a página contém o texto "More information".
Passos:
Visitar a página "https://example.com".
Verificar se a página contém o texto "More information" usando o comando cy.contains().
Executando o Teste
Para executar este teste:

Certifique-se de ter o Cypress instalado no seu projeto.
Coloque os testes dentro do diretório cypress/integration.
Execute o Test Runner do Cypress com o comando npx cypress open.
Selecione o arquivo de teste nome_do_arquivo_spec.js.
Os testes serão executados automaticamente em um navegador controlado pelo Cypress.
Conclusão
Estes testes Cypress oferecem uma verificação simples, porém eficaz, do título e do conteúdo da página do site exemplo. Eles podem ser expandidos para incluir mais verificações e cenários de teste, conforme necessário para garantir a funcionalidade e integridade da aplicação.
