import {
    VALIDTOKEN,
    MENUSTATUS,
    HEADERMENUITEMCLICKED,
    iTEMONMOUSEOVER,
    iTEMONMOUSEOUT,
    OPENMODAL,
    CLOSEMODAL,
    SETJOBLIST,
    JOBOPTIONCLICKED,
    MODALEDITOPEN,
    MODALREGISTEROPEN,
    EDITJOBCLICKED,
} from '../types'

export const loggingIn = (payload) => ({
    type: VALIDTOKEN,
    payload
});

export const menuItemClicked = (payload) => ({
    type: HEADERMENUITEMCLICKED,
    payload
})

export const showItemDescription = (payload) => ({
    type: iTEMONMOUSEOVER,
    payload
})

export const hideItemDescription = (payload) => ({
    type: iTEMONMOUSEOUT,
    payload
})

export const settingsMenu = (payload) => ({
    type: MENUSTATUS,
    payload
})

export const openModal = () => ({
    type: OPENMODAL,
})

export const closeModal = () => ({
    type: CLOSEMODAL,
})

export const setJobList = ( payload ) => ({
    type: SETJOBLIST,
    payload
})

export const jobOptionClicked = (payload) => ({
    type: JOBOPTIONCLICKED,
    payload
})

export const modalEditOpen = () => ({
    type: MODALEDITOPEN
})

export const modalRegisterOpen = () => ({
    type: MODALREGISTEROPEN
})

export const editJobClicked = (payload) => ({
    type: EDITJOBCLICKED,
    payload
})
