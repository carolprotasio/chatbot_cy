describe('consulta de encomenda no chat', () => {
  it('CT-001 deve indicar que a encomenda já foi entregue', () => {
    const trakingCode = 'PD123456785BR'
    cy.abrirChatbot()
    cy.verfificarMsg('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
    cy.selecionarOpcao('Sim, por favor!').click()
    cy.verfificarMsg('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')   
    cy.informarCode(trakingCode)    
    cy.verfificarMsg(`Confirmando: você informou o código de rastreio ${trakingCode}. Está tudo certo?`)    
    cy.selecionarOpcao('Sim, está certo!')
     
    cy.verfificarMsg('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
    cy.verfificarMsg('Boa notícia! Sua encomenda já foi entregue com sucesso. 🎉', 7000)
    
  })
  it('CT-002 deve indicar que a encomenda está em rota de entrega', () => {
    const trakingCode = 'QW112233445BR'
    cy.abrirChatbot()
    cy.verfificarMsg('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
    cy.selecionarOpcao('Sim, por favor!').click()
    cy.verfificarMsg('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')   
    cy.informarCode(trakingCode)    
    cy.verfificarMsg(`Confirmando: você informou o código de rastreio ${trakingCode}. Está tudo certo?`)    
    cy.selecionarOpcao('Sim, está certo!')
     
    cy.verfificarMsg('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
    cy.verfificarMsg('Ótima notícia! Sua encomenda está em rota de entrega e chega ainda hoje. Fique de olho! 👀📦', 7000)
    
  })
  it('CT-003 deve indicar que a encomenda já foi dispachada', () => {
    const trakingCode = 'BR987654321BR'
    cy.abrirChatbot()
    cy.verfificarMsg('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
    cy.selecionarOpcao('Sim, por favor!').click()
    cy.verfificarMsg('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')   
    cy.informarCode(trakingCode)    
    cy.verfificarMsg(`Confirmando: você informou o código de rastreio ${trakingCode}. Está tudo certo?`)    
    cy.selecionarOpcao('Sim, está certo!')
     
    cy.verfificarMsg('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
    cy.verfificarMsg('A sua encomenda já foi despachada e está a caminho! 🚚', 7000)
    
  })
  it('CT-004 deve indicar que a encomenda já foi dispachada', () => {
    const trakingCode = 'AB123456789XY'
    cy.abrirChatbot()
    cy.verfificarMsg('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
    cy.selecionarOpcao('Sim, por favor!').click()
    cy.verfificarMsg('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')   
    cy.informarCode(trakingCode)    
    cy.verfificarMsg(`Confirmando: você informou o código de rastreio ${trakingCode}. Está tudo certo?`)    
    cy.selecionarOpcao('Sim, está certo!')
     
    cy.verfificarMsg('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
    cy.verfificarMsg('Hmm... Não encontrei uma encomenda com os dados informados.', 7000)
    
  })
  it('CT-005 exibir erro para o código de rastreio não encontrado', () => {
    const trakingCode = 'AB123456789X2'
    cy.abrirChatbot()
    cy.verfificarMsg('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
    cy.selecionarOpcao('Sim, por favor!').click()
    cy.verfificarMsg('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')   
    cy.informarCode(trakingCode)    
    cy.verfificarMsg(`Confirmando: você informou o código de rastreio ${trakingCode}. Está tudo certo?`)    
    cy.selecionarOpcao('Sim, está certo!')
     
    cy.verfificarMsg('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
    cy.verfificarMsg('Hmm... Não encontrei uma encomenda com os dados informados. Vamos tentar de novo?', 7000)
    
  })
})
