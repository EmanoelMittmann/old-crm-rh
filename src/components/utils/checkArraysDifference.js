import differenceBy from 'lodash.differenceby'

export function checkArraysDifference({completeArray, comparisonArray, key}) {  
  if (!comparisonArray?.length) {
    return completeArray
  }

  return differenceBy(completeArray, comparisonArray, key) 
}