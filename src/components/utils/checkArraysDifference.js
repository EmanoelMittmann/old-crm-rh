// primeiro parâmetro é o array que contem todos os itens, o segundo parâmetro é o array com itens para comparação e o terceiro parâmetro é a chave que eu desejo comparar;
import differenceBy from 'lodash.differenceby'

export function checkArraysDifference({completeArray, comparisonArray, key}) {  
  if (!comparisonArray.length) {
    return completeArray 
  }

  return differenceBy(completeArray, comparisonArray, key) 
}