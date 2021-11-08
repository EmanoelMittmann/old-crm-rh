import { SETSEARCHNAMEPROJECT } from "../types"

const inicialState = ''

const projectsSearchFilter = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETSEARCHNAMEPROJECT:

                state = payload

        return state;

        default:
            return state;
    }
}

export default projectsSearchFilter;