export const formatDate = (dateWithoutFormatting) => {
    if (!dateWithoutFormatting) return "-"
    const date = new Date(dateWithoutFormatting)
    const newDate = new Intl.DateTimeFormat('pt-BR').format(date)
    return newDate; 
}

export const formatAgeValidation = (dateWithoutFormatting) => {
    if (!dateWithoutFormatting) return "-";
    
    const date = new Date(dateWithoutFormatting);
    const isoDate = date.toISOString();
    const formattedDate = isoDate.substring(0, 10);

    return formattedDate;
};
