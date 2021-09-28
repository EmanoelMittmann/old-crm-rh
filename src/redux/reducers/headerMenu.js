import {
    HEADERMENUITEMCLICKED,
    iTEMONMOUSEOVER,
    iTEMONMOUSEOUT
} from "../types"

const inicialState = [{
        id: 1,
        status: true,
        description: "Início",
        descriptionIsAppearing: false
    },

    {
        id: 2,
        status: false,
        description: "Job",
        descriptionIsAppearing: false
    },

    {
        id: 3,
        status: false,
        description: "Projetos",
        descriptionIsAppearing: false
    },

    {
        id: 4,
        status: false,
        description: "Horas Extras",
        descriptionIsAppearing: false
    },

    {
        id: 5,
        status: false,
        description: "Notas Fiscais",
        descriptionIsAppearing: false
    },

    {
        id: 6,
        status: false,
        description: "Relatórios",
        descriptionIsAppearing: false
    },

    {
        id: 7,
        status: false,
        description: "Ordens de serviço",
        descriptionIsAppearing: false
    },

    {
        id: 8,
        status: false,
        description: "Configurações",
        descriptionIsAppearing: false
    }
]

const headerMenu = (state = inicialState, action) => {
    const {
        type,
        payload: id
    } = action;

    switch (type) {
        case HEADERMENUITEMCLICKED:
            const newStatus = state.map(item => {
                if (item.id === id) return {
                    ...item,
                    status: true
                };
                if (item.id !== id) return {
                    ...item,
                    status: false
                };
            })

            return newStatus;
        case iTEMONMOUSEOVER:
            const newDescriptionDisplayed = state.map(item => {
                if (item.id === id) return {
                    ...item,
                    descriptionIsAppearing: true
                }
                if (item.id !== id) return {
                    ...item,
                    descriptionIsAppearing: false
                }
            })

            return newDescriptionDisplayed;
        case iTEMONMOUSEOUT:
            const newHiddenDescription = state.map((item) => {
                if (item.id === id) return {
                    ...item,
                    descriptionIsAppearing: false
                }
                if (item.id !== id) return {
                    ...item,
                    descriptionIsAppearing: false
                }
            })
            return newHiddenDescription;
        default:
            return state;
    }
}

export default headerMenu;