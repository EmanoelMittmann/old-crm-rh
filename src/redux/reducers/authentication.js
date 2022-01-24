import { VALIDTOKEN } from "../types"

const inicialState = false;

const authentication = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case VALIDTOKEN:
            const token = JSON.stringify(payload.token.token)
            const user = JSON.stringify(payload.user)
            const user_photo = JSON.stringify(payload.googleData.profileObj.imageUrl)
            localStorage.setItem('@UbiRH/token', token)
            localStorage.setItem('@UbiRH/user', user)
            localStorage.setItem('@UbiRH/user_photo', user_photo)
                   
        return payload;
        default:
            return state;
    }
}

export default authentication;
