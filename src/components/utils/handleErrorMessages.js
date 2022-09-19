export const handleErrorMessages = (error, defaultMessage = 'Inválido') => {
  let obj = {};

  const message = Object.values(error).map((value) => {
    return value || defaultMessage;
  });

  const keys = Object.keys(error).map((value) => {
    return value;
  });

  console.log(keys);

  keys.forEach((key, index) => (obj[key] = message[index]));

  console.log(obj);
  return obj;
};
