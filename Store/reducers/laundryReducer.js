import {
    SAVE_LAUNDRY_LOADING,
    SAVE_LAUNDRY_SUCCESS,
    SAVE_LAUNDRY_FAILED,
    LOAD_LAUNDRY_LOADING,
    LOAD_LAUNDRY_SUCCESS,
    LOAD_LAUNDRY_FAILED,
    ADD_LAUNDRY,
    UPDATE_LAUNDRY,
    DELETE_LAUNDRY
} from '../actions/actionTypes'

const initialState = {
    loading: false,
    error: null,
    laundries: []
};

function reducerLaundry(state = initialState, action) {
    let nextState

    switch (action.type) {

        case SAVE_LAUNDRY_LOADING:
            nextState = { ...state, loading: true };
            return nextState;
        case SAVE_LAUNDRY_SUCCESS:
            nextState = { ...state, laundries: [ ...state.laundries, action.payload ], loading: false };
            return nextState;
        case SAVE_LAUNDRY_FAILED:
            nextState = { ...state, loading: false, error: action.payload };
            return nextState;


        case LOAD_LAUNDRY_LOADING:
            nextState = { ...state, loading: true };
            return nextState;
        case LOAD_LAUNDRY_SUCCESS:
            nextState = { ...state, laundries: [ ...state.laundries, ...action.payload.laundries ], loading: false };
            return nextState;
        case LOAD_LAUNDRY_FAILED:
            nextState = { ...state, loading: false, error: action.payload };
            return nextState;



        case ADD_LAUNDRY:
            nextState = { ...state, laundries: [ ...state.laundries, action.payload ]};
            return nextState;
        case UPDATE_LAUNDRY:
            nextState = { ...state, laundries: state.laundries.filter((laundry) => laundry.id !== action.id)
            };
            return nextState;
        case DELETE_LAUNDRY:
            nextState = { ...state, laundries: state.laundries.filter((laundry) => laundry.id !== action.payload)
            };
            return nextState;




        default:
            return state;
    }
}

export default reducerLaundry;