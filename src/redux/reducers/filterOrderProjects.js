import { SETFILTERORDERPROJECTS } from "../types"

const inicialState = ''

const filterOrder = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETFILTERORDERPROJECTS:

        return payload;

        default:
            return state;
    }
}

export default filterOrder;