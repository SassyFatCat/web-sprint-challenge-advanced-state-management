import {FETCH_SUCCESS} from '../actions/smurfActions';

const initialState = {
    smurfs: []
};


export const smurfReducer = (state = initialState, action) => {
switch(action.type) {
    case FETCH_SUCCESS: {
        return {
            ...state,
            smurfs: action.payload
        }
    }

    default: return state
}

}