let initialState = {
   partsList: [
      {id: 1, title: 'some title', price: 12000},
      {id: 2, title: 'some title', price: 10000},
      {id: 3, title: 'some title', price: 16000},
      {id: 4, title: 'some title', price: 22000}
   ],
   isFetching: false
}

export const resultReducer = (state = initialState, action) => {
   return state
}