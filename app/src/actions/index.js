import axios from 'axios';

export const FETCH_QUOTES_SUCCESS = "FETCH_QUOTES_SUCCESS";
export const FETCH_QUOTES_FAIL = "FETCH_QUOTES_FAIL";
export const GET_RANDOM_QUOTE = "GET_RANDOM_QUOTE";

export const fetchQuotes = () => dispatch => {
    axios.get("https://type.fit/api/quotes")
         .then(res =>
               dispatch({type:FETCH_QUOTES_SUCCESS, payload:res.data}))
         .catch(err =>
                dispatch({type:FETCH_QUOTES_FAIL, payload:err}))
}

export const getRandomQuote = () => {
    return({type:GET_RANDOM_QUOTE})
}