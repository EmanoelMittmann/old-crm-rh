import { SETFILTERORDER } from "../types"

const inicialState = ''

const filterOrder = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETFILTERORDER:

        return payload;

        default:
            return state;
    }
}

export default filterOrder;


