import { EDITSTATUSCLICKED } from "../types"

const inicialState = 0;

const statusId = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case EDITSTATUSCLICKED:

        return payload;
        default:
            return state;
    }
}

export default statusId;