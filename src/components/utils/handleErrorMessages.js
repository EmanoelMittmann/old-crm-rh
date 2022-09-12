import { messages } from '../../i18n/messages'

export const handleErrorMessages = (error, defaultMessage = "Inválido") => {
  let obj = {}

  const message = Object.values(error).map((value) => {
    return value || defaultMessage
  })

  const keys = Object.keys(error).map((value) => {
    return value
  })

  keys.forEach((key, index) => obj[key] = message[index])
  return obj
}