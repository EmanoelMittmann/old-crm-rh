import { SETVALUECOMMISSION, SETVALUECOMMISSIONCLICKED } from "../types"

const inicialState = []

const valueCommission = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETVALUECOMMISSION:

            state = payload;
        
        return state;

        case SETVALUECOMMISSIONCLICKED: 

        state = state.map(commission => {
            if (commission.id === payload) return {
                ...commission,
                clicked: !commission.clicked
            };
            if (commission.id !== payload) return {
                ...commission,
                status: false
            };
        })
        return state;
        
        default:
            return state;
    }
}

export default valueCommission;