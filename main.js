// 8 kyu & 7 kyu
//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  return num > 0 ? num * (-1) : num * 1
}
//Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
//If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
function removeSmallest(numbers) {
  let smallestNum = Math.min(...numbers)
  let index = numbers.indexOf(smallestNum);
  let newNumbers = numbers.slice(0, index).concat(numbers.slice(index+1))
  return newNumbers;
}
//Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
  return str.toUpperCase()
}
//You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd. Note: only positive integers will be tested.
function otherAngle(a, b) {
  return 180 - (a + b);
}
//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). 
//The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let res = Math.abs(dadYearsOld - sonYearsOld * 2)
  return res
}
//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, 
//rounded down to the integer (= floored).
function cockroachSpeed(s) {
  let res = s * 100000 / 3600
  return Math.floor(res)
}
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Return your answer as a number.
function sumMix(x){
  let sum = 0
  for (let i = 0; i < x.length; i++) {
      sum += Number(x[i])
  }
  return sum
}
//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
//Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
//For example, when the input is green, output should be yellow.
function updateLight(current) {
  if (current == "green") {
    return "yellow"
  } else if (current == "yellow") {
    return "red"
  } else {
    return "green"
  }
}