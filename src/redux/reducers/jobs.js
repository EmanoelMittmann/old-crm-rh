import { SETJOBLIST, JOBOPTIONCLICKED} from "../types"

const inicialState = []

const jobs = (state = inicialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case SETJOBLIST:

            state = payload;
        
        return state;

        case JOBOPTIONCLICKED: 

        state = state.map(job => {
            if (job.id === payload) return {
                ...job,
                clicked: !job.clicked
            };
            if (job.id !== payload) return {
                ...job,
                status: false
            };
        })
        return state;
        
        default:
            return state;
    }
}

export default jobs;
