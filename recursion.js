/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;

  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, max = 0) {
  if (i === words.length) return max;
  words[i].length > max ? (max = words[i].length) : max;
  return longest(words, i + 1, max);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  if (i === str.length) return "";

  return i % 2 === 0 ? str[i] + everyOther(str, i + 1) : everyOther(str, i + 1);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  const left = i;
  const right = str.length - 1 - i;
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;
  return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1;
  if (arr[i] !== val) return findIndex(arr, val, i + 1);
  return i;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0) {
  if (i === str.length) return "";

  return str[str.length - i - 1] + revString(str, i + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, i = 0) {
  // had to check solution. I was originally trying to use recursion to
  // manage the looping rather than letting the for loop do it
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") result.push(obj[key]);
    if (typeof obj[key] === "object") result.push(...gatherStrings(obj[key]));
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  let middle = Math.floor((left + right) / 2);
  if (left === right && arr[middle] !== val) return -1;
  if (arr[middle] < val) {
    return binarySearch(arr, val, (left = middle + 1), right);
  } else if (arr[middle] > val) {
    return binarySearch(arr, val, left, (right = middle - 1));
  } else return middle;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
