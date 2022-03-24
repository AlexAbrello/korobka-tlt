import axios from 'axios'

const SET_PARTS = 'SET_PARTS'

let initialState = {
   partsList: {},
   isFetching: false
}

export const resultReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_PARTS:
         return {
            ...state,
            partsList: {...state.partsList, ...action.data}
         }
      default: return state
   }
}

export const setParts = (data) => ({type: SET_PARTS, data})

export const getParts = (value) => {
   return (dispatch) => {
      axios.get(`https://623c162e8e9af587894b96cb.mockapi.io/parts/${value}`)
         .then(res => {
         dispatch(setParts(res.data))
      })
   }
}