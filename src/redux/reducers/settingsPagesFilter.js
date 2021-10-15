import { SETSETTINGSPAGES, RESETCURRENTPAGE } from "../types"

const inicialState = []

const settingsPagesFilter = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETSETTINGSPAGES:

            state = payload;
        
        return state;
        case RESETCURRENTPAGE:
            
        return state
        default:
            return state;
    }
}

export default settingsPagesFilter;
