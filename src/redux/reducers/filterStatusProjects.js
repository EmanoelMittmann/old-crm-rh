import { SETFILTERSTATUSPROJECTS, RESETFILTERSTATUSPROJECTS } from "../types"

const inicialState = ''

const filterStatus = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETFILTERSTATUSPROJECTS:
        
        return payload;
        case RESETFILTERSTATUSPROJECTS: 

        return inicialState;
        default:
            return state;
    }
}

export default filterStatus;