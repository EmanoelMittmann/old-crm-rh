import { SETFILTERTYPESPROJECTS, RESETFILTERTYPESPROJECTS } from "../types"

const inicialState = ''

const filterTypes = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETFILTERTYPESPROJECTS:
        
        return payload;
        case RESETFILTERTYPESPROJECTS: 

        return inicialState;
        default:
            return state;
    }
}

export default filterTypes;