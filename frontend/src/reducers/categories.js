import * as Types from "../actions/actionTypes"


function categories(state = {
    all: [],
    current: null
}, action) {

    switch (action.type) {
        case Types.FETCH_CATEGORY:
            return {...state, all: action.categories};

        default:
            return state
    }

}

export default categories