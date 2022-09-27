import { SETCOMPANYLISTITEMS,SETCOMPANYCLICKED } from "../types"

const inicialState = []

const CompaniesList = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETCOMPANYLISTITEMS:
            
            state = payload

        return payload;

        case SETCOMPANYCLICKED:
        
        state = state.map(company => {
            if (company.id === payload) return {
                ...company,
                clicked: !company.clicked
            };
            if (company.id !== payload) return {
                ...company,
                status:false
            }
        })
        return state;

        default:
            return state;
    }
}

export default CompaniesList;

