import {SETPROJECTLISTPROJECTS} from "../types"

const inicialState = []

const projectsList = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETPROJECTLISTPROJECTS:

            state = payload;
        
        return state;
        
        default:
            return state;
    }
}

export default projectsList;