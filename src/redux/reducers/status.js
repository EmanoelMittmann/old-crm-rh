import { STATUSOPTIONCLICKED, SETSTATUSLIST} from "../types"

const inicialState = []

const status = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETSTATUSLIST:

            state = payload;
        
        return state;

        case STATUSOPTIONCLICKED: 

        state = state.map(status => {
            if (status.id === payload) return {
                ...status,
                clicked: !status.clicked
            };
            if (status.id !== payload) return {
                ...status,
                status: false
            };
        })
        return state;
        
        default:
            return state;
    }
}

export default status;
