import { toast } from 'react-toastify'
import { messages as msg } from '../../i18n/messages'

export const handleErrorMessages = (error, type = "error", defaultMessage = "Erro desconhecido") => 
Object.values(error).map((a) => {

  return toast[type](msg[a] || defaultMessage)
})