import { SETPROJECTTYPELISTPROJECTS} from "../types"

const inicialState = []

const projectTypeProjects = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case  SETPROJECTTYPELISTPROJECTS:

            state = payload;
        
        return state;

        
        default:
            return state;
    }
}

export default projectTypeProjects;
