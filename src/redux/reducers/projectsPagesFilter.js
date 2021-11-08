import { SETPROJECTSPAGES, RESETCURRENTPAGEPROJECT } from "../types"

const inicialState = []

const projectsPagesFilter = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETPROJECTSPAGES:

            state = payload;
        
        return state;
        case RESETCURRENTPAGEPROJECT:
            
        return state
        default:
            return state;
    }
}

export default projectsPagesFilter;
