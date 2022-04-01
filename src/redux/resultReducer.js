import axios from 'axios'

const SET_PARTS = 'SET_PARTS'
const LOADER = 'LOADER'
const SET_VALUE = 'SET_VALUE'

let initialState = {
   partsList: {},
   category: 'КПП',
   isFetching: false
}

export const resultReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_PARTS:
         return {
            ...state,
            partsList: {...state.partsList, ...action.data}
         }
      case LOADER:
         return {
            ...state,
            isFetching: action.value
         }
      case SET_VALUE:
         return {
            ...state,
            category: action.category
         }
      default: return state
   }
}

export const setParts = (data) => ({type: SET_PARTS, data})
export const setLoader = (value) => ({ type: LOADER, value })
export const setCategoryValue = (category) => ({type: SET_VALUE, category})

export const getParts = (value) => {
   return (dispatch) => {
      dispatch(setLoader(true))
      axios.get(`https://623c162e8e9af587894b96cb.mockapi.io/parts/${value}`)
         .then(res => {
            dispatch(setParts(res.data))
            dispatch(setLoader(false))
      })
   }
}