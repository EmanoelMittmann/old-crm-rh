import { MODALEDITOPEN, MODALREGISTEROPEN } from "../types"

const inicialState = {
    edit: false,
    register: false
}

const modalFunctionality = (state = inicialState, action) => {
    const {type} = action;
    
    switch (type) {
        case MODALEDITOPEN:
          state = {edit: true, register: false}

        return state;
        case MODALREGISTEROPEN:
            state = {edit: false, register: true}
        
        return state;
        default:
            return state;
    }
}

export default modalFunctionality;
