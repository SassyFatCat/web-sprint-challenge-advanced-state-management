import axios from 'axios';

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const getSmurfs = () => dispatch => {
dispatch({ type: FETCH_SMURFS })
axios
    .get('http://localhost:3333/smurfs')
    .then(success => {
        console.log(success);
        dispatch({ type: FETCH_SUCCESS, payload: success.data})
    })
    .catch(fail => {
        console.log(fail)
    })
}

export const POST_SMURF = "POST_SMURF";
export const postSmurf = smurf => dispatch => {
dispatch({ type: POST_SMURF })
axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(success => {
        dispatch({ type: FETCH_SUCCESS, payload: success.data })
    })
    .catch(fail => {
        console.log(fail)
    })
}