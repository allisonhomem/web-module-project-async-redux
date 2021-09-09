import { FETCH_QUOTES_SUCCESS, FETCH_QUOTES_FAIL, GET_RANDOM_QUOTE } from '../actions/index.js';

export const initialState = {
    quotes: [],
    quote: {},
    error:""
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_QUOTES_SUCCESS:
            return({
                ...state,
                quotes: action.payload
            })
        case FETCH_QUOTES_FAIL:
            return({
                ...state,
                error: action.payload
            })
        case GET_RANDOM_QUOTE:
            return({
                ...state,
                quote: state.quotes[Math.floor(Math.random()*state.quotes.length)]
            })
        default:
            return state;
    }
}

export default reducer;