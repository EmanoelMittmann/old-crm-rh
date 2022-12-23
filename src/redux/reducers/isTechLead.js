import { TECHLEAD } from "../types"

const inicialState = JSON.parse(localStorage.getItem('@UbiRH/USER')).isTechLead;

const validTechLead = (state = inicialState, action) => {
    const { type, payload } = action;
    
    switch (type) {
        case TECHLEAD:
            state = payload
            return state;

        default:
            return state;
    }
}

export default validTechLead;