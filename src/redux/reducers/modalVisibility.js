import { OPENMODAL, CLOSEMODAL } from "../types"

const inicialState = false;

const modalVisibility = (state = inicialState, action) => {
    const {type} = action;
    
    switch (type) {
        case OPENMODAL:
            state = true;
        return state;

        case CLOSEMODAL:
            state = false;
        return state;
        
        default:
            return state;
    }
}

export default modalVisibility;
