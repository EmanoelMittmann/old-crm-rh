import { MENUSTATUS } from "../types"

const inicialState = [
    [
        {
            id: 1,
            title: "Cargos",
            status: true
        },

        {
            id: 2,
            title: "Lorem um",
            status: false
        },

        {
            id: 3,
            title: "Lorem dois",
            status: false
        }
    ],

    [
        {
            id: 4,
            title: "Lorem tres",
            status: false
        },

        {
            id: 5,
            title: "Lorem quatro",
            status: false
        },

        {
            id: 6,
            title: "Lorem cinco",
            status: false
        }
    ]
]

const settingsStatus = (state = inicialState, action) => {
    const {type, payload: id} = action;

    switch (type) {
        case MENUSTATUS:
            const newStatus = state.map(nav => {
                const newNav = nav.map((item) => {
                    if(item.id === id) return {...item, status: true};
                    if(item.id !== id) return {...item, status: false};
                })
                return newNav;
            })

            return newStatus;
        default:
            return state;
    }
}

export default  settingsStatus;