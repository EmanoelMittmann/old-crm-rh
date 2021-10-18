import { EDITPROJECTTYPECLICKED } from "../types"

const inicialState = 0;

const projectTypeId = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case EDITPROJECTTYPECLICKED:

        return payload;
        default:
            return state;
    }
}

export default projectTypeId;