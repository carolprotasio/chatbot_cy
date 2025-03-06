describe('consulta de encomenda no chat', () => {

  const cenarios = [
    {titulo:'CT-001 deve indicar que a encomenda já foi entregue', trakingCode: 'PD123456785BR', msg:'Boa notícia! Sua encomenda já foi entregue com sucesso. 🎉'},
    {titulo:'CT-002 deve indicar que a encomenda está em rota de entrega', trakingCode: 'QW112233445BR', msg:'Ótima notícia! Sua encomenda está em rota de entrega e chega ainda hoje. Fique de olho! 👀📦'},
    {titulo:'CT-003 deve indicar que a encomenda já foi dispachada', trakingCode: 'BR987654321BR', msg:'A sua encomenda já foi despachada e está a caminho! 🚚'},
    {titulo:'CT-004 deve indicar que a encomenda já foi dispachada', trakingCode: 'AB123456789XY', msg:'Hmm... Não encontrei uma encomenda com os dados informados.'},
    {titulo:'CT-005 deve exibir erro para o código de rastreio não encontrado', trakingCode: 'AB123456789X2', msg:'Hmm... Não encontrei uma encomenda com os dados informados. Vamos tentar de novo?'}
  ]

  cenarios.forEach(function(cenarios){
    it(cenarios.titulo, () => {
      const trakingCode = cenarios.trakingCode
      cy.abrirChatbot()
      cy.verfificarMsg('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
      cy.selecionarOpcao('Sim, por favor!').click()
      cy.verfificarMsg('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')   
      cy.informarCode(trakingCode)    
      cy.verfificarMsg(`Confirmando: você informou o código de rastreio ${trakingCode}. Está tudo certo?`)    
      cy.selecionarOpcao('Sim, está certo!')
       
      cy.verfificarMsg('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
      cy.verfificarMsg(cenarios.msg, 7000)
      
    })
  })
})
