import {
    CHANGE_SEARCH_FIELD,
    REQUEST_LOOMIANS_PENDING,
    REQUEST_LOOMIANS_SUCCESS,
    REQUEST_LOOMIANS_FAILED
} from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchLoomians = (state = initialStateSearch, action = {}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

const initialStateLoomians = {
    loomians: [],
    isPending: true
}

export const requestLoomians = (state=initialStateLoomians, action={}) => {
    
    switch (action.type) {
    case REQUEST_LOOMIANS_PENDING:
        return Object.assign({}, state, {isPending: true})
    case REQUEST_LOOMIANS_SUCCESS:
        return Object.assign({}, state, {loomians: action.payload, isPending: false})
    case REQUEST_LOOMIANS_FAILED:
        return Object.assign({}, state, {error: action.payload})
    default:
        return state
    }
}