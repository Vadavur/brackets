module.exports = function check(str, bracketsConfig) {
  
  // make the array of brackets from the string
  
  strArr = str.split('');

  // make the map of brackets (key - opening bracket, value - closing bracket)
  
  const bracketsMap = new Map();
  bracketsConfig.forEach((element) => {bracketsMap.set(element[0], element[1])});

  // go through the array
  // removing close standing pairs of the same opening-closing brackets
  // jumping back, if pair was removed

  for (let i = 0; i < strArr.length;){
    if ((strArr[i + 1] != undefined) && (strArr[i + 1] == bracketsMap.get(strArr[i]))){
      strArr.splice(i, 2);
      if (i != 0) {i--} ;
    } else i++;
  }

  // return true if all brackets were removed

  if (strArr.length == 0){
    return true;
  }
  else return false;
}
