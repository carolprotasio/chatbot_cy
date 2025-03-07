# Chatbot Cypress

## 🚀 Introdução
Este projeto foi desenvolvido para testar a funcionalidade de um chatbot utilizando o framework de testes automatizados Cypress. O objetivo é validar o comportamento do chatbot em diferentes cenários de rastreamento de encomendas, garantindo que as respostas sejam exibidas corretamente.

<img src="https://github.com/carolprotasio/chatbot_cy/blob/main/landing_page.png" alt="web" width="600"/>
<img src="https://github.com/carolprotasio/chatbot_cy/blob/main/sensei.png" alt="web" width="600"/>

## 🛠️ Tecnologias Utilizadas
- **JavaScript**
- **Cypress**
- **Node.js**

## 🧪 Cenários e Casos de Testes
Os seguintes cenários foram testados para verificar as respostas do chatbot:

| Código do Teste | Descrição                                    |                                           
|----------------|-----------------------------------------------|
| CT-001        | Deve indicar que a encomenda já foi entregue   | 
| CT-002        | Deve indicar que a encomenda está em rota de entrega | 
| CT-003        | Deve indicar que a encomenda já foi despachada | 
| CT-004        | Deve indicar que a encomenda não foi encontrada |
| CT-005        | Deve exibir erro para código inválido           | 

<img src="https://github.com/carolprotasio/chatbot_cy/blob/main/cy_ui.png" alt="web" width="600"/>
<img src="https://github.com/carolprotasio/chatbot_cy/blob/main/cy_cli.png" alt="web" width="600"/>

## ▶️ Como Instalar o Projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/carolprotasio/chatbot_cy.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd chatbot_cy
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute os testes:
   ```bash
   npx cypress open
   ```

## ✅ Conclusão
Este projeto permitiu a validação do comportamento de um chatbot em diferentes cenários de rastreamento de encomendas. A utilização do Cypress como ferramenta de testes automatizados garantiu maior eficiência na verificação dos fluxos de resposta, proporcionando uma abordagem ágil e confiável para validação de micro serviços.
