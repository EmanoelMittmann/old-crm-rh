import { VALIDTOKEN } from "../types"

const inicialState = false;

const authentication = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case VALIDTOKEN:
            const token = JSON.stringify(payload.token)
            localStorage.setItem('token', token)

        return payload;
        default:
            return state;
    }
}

export default authentication;
