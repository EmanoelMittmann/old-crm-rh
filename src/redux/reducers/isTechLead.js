import { TECHLEAD } from "../types"

const inicialState = false;

const validTechLead = (state = inicialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case TECHLEAD:
            state = payload
            return state;
        default:
            if (JSON.parse(localStorage.getItem('@UbiRH/USER'))) {
                return JSON.parse(localStorage.getItem('@UbiRH/USER')).isTechLead
            }
            return state
    }
}

export default validTechLead;