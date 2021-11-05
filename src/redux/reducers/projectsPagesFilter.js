import { SETPROJECTSPAGES, RESETCURRENTPAGE } from "../types"

const inicialState = []

const projectsPagesFilter = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETPROJECTSPAGES:

            state = payload;
        
        return state;
        case RESETCURRENTPAGE:
            
        return state
        default:
            return state;
    }
}

export default projectsPagesFilter;
