import { EDITJOBCLICKED } from "../types"

const inicialState = 0;

const jobId = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case EDITJOBCLICKED:

        return payload;
        default:
            return state;
    }
}

export default jobId;
