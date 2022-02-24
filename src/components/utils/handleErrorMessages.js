import { toast } from 'react-toastify'
import { messages } from '../../i18n/messages'

export const handleErrorMessages = (error, type = "error", defaultMessage = "Erro desconhecido") => 
Object.values(error).map((value) => {

  return toast[type](messages[value] || defaultMessage)
})