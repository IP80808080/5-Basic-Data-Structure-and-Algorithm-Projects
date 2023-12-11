function rot13(str) {
  return str.split('').map(char => {
      if (/[A-Z]/.test(char)) {
        const decodedCharCode = (char.charCodeAt(0) - 65 + 13) % 26 + 65;
        return String.fromCharCode(decodedCharCode);
      } else {
        return char;
      }
    }).join('');
}
console.log(rot13("SERR PBQR PNZC")); 
