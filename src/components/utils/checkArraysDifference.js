// primeiro parâmetro é o array que contem todos os itens e o segundo parâmetro é o array com itens para comparação;
import differenceBy from 'lodash.differenceby'

export function checkArraysDifference(array1, array2) {  
  if ( !array2.length) {
    return array1 
  }

  return differenceBy(array1, array2, "id") 
}