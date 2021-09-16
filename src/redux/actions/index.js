import { VALIDTOKEN } from '../types'

export const loggingIn = ( payload ) => ({
    type: VALIDTOKEN,
    payload: payload
});