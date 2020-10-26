import { DATA_LOADING, DATA_SUCCESS, DATA_FAILURE } from './userData.types';

export function loadingData() {
    return {
        type: DATA_LOADING,
        payload: "LOADING"
    };
}
export function successData(data) {
    return {
        type: DATA_SUCCESS,
        payload: data
    };
}
export function failureData(err) {
    return {
        type: DATA_FAILURE,
        payload: err
    };
}
export function getData(id) {
    return function (dispatch) {
        dispatch(loadingData())
        return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(json => dispatch(successData(json)))
            .catch(err => dispatch(failureData(err)))
    };
}