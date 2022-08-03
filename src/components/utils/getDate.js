export const getDate = (inputDate) => {
    const newDate = new Date(inputDate)
    const day = newDate.getDate().toString()
    const newDay = day.length === 1 ? day.padStart(2, '0') : day
    let month = newDate.getMonth() + 1
    month = month.toString()
    const newMonth = month.length === 1 ? month.padStart(2, '0') : month;
    const year = newDate.getFullYear()
    const projectDate = `${year}-${newMonth}-${newDay}`
    
    return projectDate;
}