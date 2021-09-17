import { VALIDTOKEN } from "../types"

const inicialState = false;

const authentication = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case VALIDTOKEN:
            const userData = JSON.stringify(payload.googleData)
            localStorage.setItem('googleData', userData)

        return payload;
        default:
            return state;
    }
}

export default authentication;
