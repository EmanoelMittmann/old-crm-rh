export const formatDate = (dateWithoutFormatting) => {
    if (!dateWithoutFormatting) return "-"
    const date = new Date(dateWithoutFormatting)
    const newDate = new Intl.DateTimeFormat('pt-BR').format(date)
    return newDate; 
}
