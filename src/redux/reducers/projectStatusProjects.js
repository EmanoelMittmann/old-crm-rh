import { SETSTATUSLISTPROJECTS} from "../types"

const inicialState = []

const projectStatusProjects = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETSTATUSLISTPROJECTS:

            state = payload;
        
        return state;

        
        default:
            return state;
    }
}

export default projectStatusProjects;
