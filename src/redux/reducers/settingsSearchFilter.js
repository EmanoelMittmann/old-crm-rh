import { SETSEARCHNAME } from "../types"

const inicialState = ''

const settingsSearchFilter = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETSEARCHNAME:

                state = payload
        
        return state;

        default:
            return state;
    }
}

export default settingsSearchFilter;
