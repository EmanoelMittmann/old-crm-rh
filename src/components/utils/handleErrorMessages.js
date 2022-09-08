export const handleErrorMessages = (error, defaultMessage = 'Inválido') => {
  let obj = {};

  const message = Object.values(error).map((value) => {
    console.log(value);
    return value || defaultMessage;
  });

  console.log(message);

  const keys = Object.keys(error).map((value) => {
    return value;
  });

  console.log(keys);

  keys.forEach((key, index) => (obj[key] = message[index]));

  console.log(obj);
  return obj;
};
