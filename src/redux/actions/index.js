import {
    VALIDTOKEN,
    MENUSTATUS,
    HEADERMENUITEMCLICKED,
    iTEMONMOUSEOVER,
    iTEMONMOUSEOUT
} from '../types'

export const loggingIn = (payload) => ({
    type: VALIDTOKEN,
    payload: payload
});

export const menuItemClicked = (payload) => ({
    type: HEADERMENUITEMCLICKED,
    payload: payload
})

export const showItemDescription = (payload) => ({
    type: iTEMONMOUSEOVER,
    payload: payload
})

export const hideItemDescription = (payload) => ({
    type: iTEMONMOUSEOUT,
    payload: payload
})

export const settingsMenu = (payload) => ({
    type: MENUSTATUS,
    payload: payload
})
