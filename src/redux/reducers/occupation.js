import { OCCUPATIONOPTIONCLICKED, SETOCCUPATIONLIST} from "../types"

const inicialState = []

const occupation = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETOCCUPATIONLIST:

            state = payload;
        
        return state;

        case OCCUPATIONOPTIONCLICKED: 

        state = state.map(occupation => {
            if (occupation.id === payload) return {
                ...occupation,
                clicked: !occupation.clicked
            };
            if (occupation.id !== payload) return {
                ...occupation,
                status: false
            };
        })
        return state;
        
        default:
            return state;
    }
}

export default occupation;