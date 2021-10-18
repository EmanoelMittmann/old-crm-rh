import { PROJECTTYPEOPTIONCLICKED, SETPROJECTTYPELIST} from "../types"

const inicialState = []

const projectType = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETPROJECTTYPELIST:

            state = payload;
        
        return state;

        case PROJECTTYPEOPTIONCLICKED: 

        state = state.map(project => {
            if (project.id === payload) return {
                ...project,
                clicked: !project.clicked
            };
            if (project.id !== payload) return {
                ...project,
                status: false
            };
        })
        return state;
        
        default:
            return state;
    }
}

export default projectType;