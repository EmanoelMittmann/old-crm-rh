import { SETSTATUSCOLORS } from "../types"

const inicialState = [];

const statusColors = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETSTATUSCOLORS:

            state = payload

        return state;
        default:
            return state;
    }
}

export default statusColors;
