import { EDITOCCUPATIONCLICKED } from "../types"

const inicialState = 0;

const occupationId = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case EDITOCCUPATIONCLICKED:

        return payload;
        default:
            return state;
    }
}

export default occupationId;