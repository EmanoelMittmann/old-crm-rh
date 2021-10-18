import { SETFILTERSTATUS, RESETFILTERSTATUS } from "../types"

const inicialState = ''

const filterStatus = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETFILTERSTATUS:
        
        return payload;
        case RESETFILTERSTATUS: 

        return inicialState;
        default:
            return state;
    }
}

export default filterStatus;