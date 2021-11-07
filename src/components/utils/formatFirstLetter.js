export const formatFirstLetter = (data) => {
    const formattedArray = data?.map(element => {
        const firstLetter = element.name[0].toUpperCase();
        const newName = firstLetter + element.name.slice(1)
        return {...element, name: newName}
    })

    return formattedArray;
}