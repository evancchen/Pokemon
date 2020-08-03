import { apiCall } from './api/api'
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_LOOMIANS_PENDING,
    REQUEST_LOOMIANS_SUCCESS,
    REQUEST_LOOMIANS_FAILED
} from './constants'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestLoomians = () => (dispatch) => {
    console.log('in request Loomians');
    dispatch({ type: REQUEST_LOOMIANS_PENDING })
    apiCall('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
    .then(data => dispatch({ type: REQUEST_LOOMIANS_SUCCESS, payload: data.results }))
    .catch(error => dispatch({ type: REQUEST_LOOMIANS_FAILED, payload: error }))
}