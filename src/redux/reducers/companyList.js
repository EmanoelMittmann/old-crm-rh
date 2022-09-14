import { SETCOMPANYLISTITEMS,SETCOMPANYCLICKED } from "../types"

const inicialState = []

const CompaniesList = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETCOMPANYLISTITEMS:
            
            state = payload

        return payload;

        case SETCOMPANYCLICKED:
        
        state = state.map(project => {
            if(project.id === payload) return {
                ...project,
                clicked: !project.clicked
            };
            if(project.id !== payload) return {
                ...project,
                status:false
            }
        })
        return state;

        default:
            return state;
    }
}

export default CompaniesList;

