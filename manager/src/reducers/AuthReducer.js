import { EMAIL_CHANGED } from "../actions/types";

const INITAL_STATE = { email: '' };

export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            state.email = action.payload;
            return { ...state, email: action.payload};
        default:
            return state;
    }
}