function palindrome(str) {
  const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
  
  return cleanStr === cleanStr.split('').reverse().join('');
}
console.log(palindrome("eye")); 
