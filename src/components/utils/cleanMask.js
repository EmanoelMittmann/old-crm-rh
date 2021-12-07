export const cleanMask = (mask) => {
    const value = mask.replace(/\D/g, '')
    return value;
}