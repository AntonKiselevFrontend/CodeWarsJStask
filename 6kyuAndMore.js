//You live in the city of Cartesia where all roads are laid out in a perfect grid. 
//You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
//The city provides its citizens with a Walk Generating App on their phones -- 
//everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
//You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, 
//so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) 
//and will, of course, return you to your starting point. Return false otherwise.
function isValidWalk(walk) {
  let ns = 0;
  let ew = 0;
  for (let elem of walk) {
    if (elem == "n") ns += 1;
    if (elem == "s") ns -= 1;
    if (elem == "e") ew += 1;
    if (elem == "w") ew -= 1;
  } 
  return walk.length === 10 && ns === 0 && ew === 0
}
//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
//which is the number of times you must multiply the digits in num until you reach a single digit.
function persistence(num) {
  if (String(num).split("").length === 1) {
    return 0
  }
  let arr = String(num).split("")
  let res = 1;
  for (let i = 0; i < arr.length; i++) {
    res *= parseFloat(arr[i])
  }
  return 1 + persistence(parseFloat(res))
}
//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//What if the string is empty? Then the result should be empty object literal, {}.
function count(string) {
  let obj = {}
  for (let elem of string.split("")){
    obj[elem] = (obj[elem] || 0) + 1
  }
  return obj;
}
