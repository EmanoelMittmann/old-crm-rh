import { PROJECTOPTIONCLICKED, SETPROJECTLIST} from "../types"


const inicialState = []

const projects = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETPROJECTLIST:

            state = payload;
        
        return state;

        case PROJECTOPTIONCLICKED: 

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

export default projects;