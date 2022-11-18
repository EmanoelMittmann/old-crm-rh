export const formatDate = (dateWithoutFormatting) => {
    console.log("dateWithoutFormatting: ", dateWithoutFormatting);
    const date = new Date(dateWithoutFormatting)
    const newDate = new Intl.DateTimeFormat('pt-BR').format(date)
    return newDate;
}