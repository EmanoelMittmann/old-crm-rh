import { TECHLEAD } from "../types"

const inicialState = false;

const validTechLead = (state = inicialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case TECHLEAD:
            state = JSON.parse(localStorage.getItem('@UbiRH/USER')).isTechLead;
            return state;
        default:
            return state;
    }
}

export default validTechLead;