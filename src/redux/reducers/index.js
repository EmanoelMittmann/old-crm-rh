import { VALIDTOKEN } from "../types"

const inicialState = false;

const authentication = (state = inicialState, action) => {
    const {type, payload: token} = action;
    
    switch (type) {
        case VALIDTOKEN:
            const userData = JSON.stringify(token)
            localStorage.setItem('googleData', userData)

        return token;
        default:
            return state;
    }
}

export default authentication;
