const INITIAL_STATE = {
  description: 'Teste',
  list: [
    {_id: 1, description: 'Pagar fatura do cartãoe', done: true},
    {_id: 2, description: 'Reunião as 10 horas', done: false},
    {_id: 3, description: 'Consulta Medica', done: false}
  ]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':      
      return { ...state, description: action.payload}
  
    default:
      return state;
  }
}