import {
    SAVE_LAUNDRY_LOADING,
    SAVE_LAUNDRY_SUCCESS,
    SAVE_LAUNDRY_FAILED,
    LOAD_LAUNDRY_LOADING,
    LOAD_LAUNDRY_SUCCESS,
    LOAD_LAUNDRY_FAILED,
    ADD_LAUNDRY,
    UPDATE_LAUNDRY,
    DELETE_LAUNDRY,
} from './actionTypes'


export function saveLaundry(laundry) {
    return function(dispatch) {
        dispatch(saveLaundryLoading(laundry));

        fetch(process.env.API_URL + '/laundries/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(laundry)
        })
            .then(response => response.json())
            .then(data => {
                dispatch(saveLaundrySuccess(data));
            })
            .catch(err => dispatch(saveLaundryFailed(err)))
    }
}


export function loadLaundry(page) {
    return function(dispatch) {
        dispatch(loadLaundryLoading());

        fetch(process.env.API_URL + '/laundries?page=' + page)
            .then(response => response.json())
            .then(data => {
                dispatch(loadLaundrySuccess(data));
            })
            .catch(err => dispatch(loadLaundryFailed(err)))
    }
}



export function loadLaundryLoading(laundries) {
    return {
        type: LOAD_LAUNDRY_LOADING,
        payload: laundries
    };
}

export function loadLaundrySuccess(laundries) {
    return {
        type: LOAD_LAUNDRY_SUCCESS,
        payload: laundries
    };
}

export function loadLaundryFailed(err) {
    return {
        type: LOAD_LAUNDRY_FAILED,
        payload: err
    };
}

export function saveLaundryLoading(laundry) {
    return {
        type: SAVE_LAUNDRY_LOADING,
        payload: laundry,
        loading: true
    };
}

export function saveLaundrySuccess(laundry) {
    return {
        type: SAVE_LAUNDRY_SUCCESS,
        payload: laundry,
        loading: false
    };
}

export function saveLaundryFailed(err) {
    return {
        type: SAVE_LAUNDRY_FAILED,
        payload: err,
        loading: false
    };
}



// Action pour ajouter une laverie
export function addLaundry(laundry) {
    return {
        type: ADD_LAUNDRY,
        payload: laundry
    };
}

// Action pour mettre à jour une laverie
export function updateLaundry(laundry) {
    return {
        type: UPDATE_LAUNDRY,
        payload: laundry
    };
}

// Action pour supprimer une laverie
export function deleteLaundry(laundry) {
    return {
        type: DELETE_LAUNDRY,
        payload: laundry
    };
}
