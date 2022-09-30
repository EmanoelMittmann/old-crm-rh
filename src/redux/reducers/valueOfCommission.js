import { SETVALUECOMMISSION } from "../types"

const initialState = []

const valueOfCommission = (state = initialState, action) =>{
    const {type, payload} = action

    switch(type){
        case SETVALUECOMMISSION:
            return payload
            
        break;
        default:
            return state;
    }
}

export default valueOfCommission;