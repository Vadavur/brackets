module.exports = function check(str, bracketsConfig) {
// make the array of brackets from the string
  
  str = str.split('');

  // make the map of brackets inverted (key - closing bracket, value - opening bracket) 
  // - to go through the array backwords
  // - to slice from the end of the array instead of shifting it
  // - to make less 'inner' operations
  
  const bracketsMap = new Map();
  bracketsConfig.forEach((element) => {bracketsMap.set(element[1], element[0])});

  // return false, if last bracket is the opening one
  
  if (!(bracketsMap.has(str[str.length-1]))) {
    return false
  }

}

// show the world the magic of recurrence

// well, I tried... May be later.



// return recurBracketCheck(str[str.length-1], str.slice(0, -1))

// this recurrent function takes the last closing bracket and the rest of the string without it as parameters
// if the previous to the last bracket is the closing one too, it goes deeper in the recurrence
// 

// function recurBracketCheck(lastBracket, strArr) {
  
//   if (strArr[strArr.length - 1] == bracketsMap.get(lastBracket)){
//     if (str.length == 1) {
//       return true;
//     }

//     else {
//       if (bracketsMap.has(strArr[strArr.length - 1])) {
//         // do something
//       }

//       else {
//         return false;
//       }
//     }
//   }

//   else {
//     if (recurBracketCheck(strArr[strArr.length - 1], str.slice(0, -1))){

//     };
//   }
// }
  



//   if (bracketsMap.has(strArr[strArr.length - 1])) {
//     if (recurBracketCheck(strArr[strArr.length - 1], str.slice(0, -1))) {
//       if (str.length == 1) {
//         return (strArr[0] == bracketsMap.get(lastBracket)) ? true : false; 
//       } 
//       else


//       true : (recurBracketCheck(strArr[strArr.length - 1], str.slice(0, -1)))
//     }
//   }
//   else {
//     if (strArr[strArr.length - 1] == bracketsMap.get(lastBracket)) {
//       if (strArr.length ==1) {
//         return true
//       }
//       else {
//         return recurBracketCheck(strArr[strArr.length - 1], str.slice(0, -1))
//       } 
//     }
//     else return false
//   }
