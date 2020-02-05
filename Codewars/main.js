// Task 1
//https://www.codewars.com/kata/reviews/565349bca24428f2870000a9/groups/570cd93e20c69f25b0001b82
function findOutlier(integers){
  var odd = [];
  var even = [];
  for (var i = 0; i < integers.length; i++) {
   if (integers[i] % 2 === 0 ) {
     odd.push(integers[i]);} 
   else {
     even.push(integers[i]);}
  }
  if (odd.length === 1){
    return odd[0] } 
  else {
    return even[0];
  }
};
findOutlier([0, 1, 2]);

//Task2
//https://www.codewars.com/kata/reviews/55908ab5932c2fc59f000070/groups/5e148e4e5d0639000111d2fd
function XO(str){
  newStr = str.toLowerCase();
  var x = 0;
  var o = 0;
  for (var i = 0; i < newStr.length; i++){
    if(newStr[i] === 'x'){
      x++;
    } else if(newStr[i] === 'o'){
      o++;
    } 
  }
  return x === o;
}

// Task 3
//https://www.codewars.com/kata/reviews/57cec2caf0fe9cd5df000072/groups/5e149ebd5d0639000111d98a
function findShort(str) {
var arr = str.split(' '); //from str to arr with no spaces
var arr1 =  arr.map(item => item.length);
var sortedArr = arr1.sort((a, b) => a - b);
return sortedArr[0];
}
findShort("Monero BTC ProofOfStake Dogecoin MadeSafeCoin MadeSafeCoin ProofOfWork Classic Steem ProofOfStake BTC ProofOfStake")

//Task 4 
function getCount(str) {
var stringsearch = /[aiueo]/g;
var k = str.match(stringsearch);
if (k == null)
return 0;
var l = k.length
return l;
}

// Task 5
//https://www.codewars.com/kata/reviews/5411f7ec17dc0b7b7e000231/groups/582ce05421b8b3ca1a0002d1
function filter_list(l) {
var filtered = [];
for (i = 0; i < l.length; i++) {
if (Number.isInteger(l[i])){
filtered.push(l[i]);}}
return filtered}

// Task 6
//https://www.codewars.com/kata/reviews/54cd002407ba21e38f00000f/groups/5e14e519aa78ba0001f2065a
function isIsogram(str){
return new Set(str.toUpperCase()).size == str.length;
}

//  Task 6 V.2
function isIsogram(str){
if (typeof str === undefined)
return true;
var newStr = str.toLowerCase()
var counter = {}
for (var i = 0; i < newStr.length; i++) {
  var letter = newStr.charAt(i)
  if(counter[letter]) {
  counter[letter] += 1;
  } else {
  counter[letter] = 1
  }
  if(counter[letter] > 1) {
  return false}}
return true
}

// Task 7
//https://www.codewars.com/kata/reviews/5390bac547d09b7da40006fd/groups/5e1599c0aa78ba0001934474
String.prototype.toJadenCase = function (str) {
var secStr = this.charAt(0).toUpperCase();
  return this
      .replace(this.charAt(0),secStr)
      .replace(/\s(.)/g, function(a) { 
          return a.toUpperCase(); 
      });
};
