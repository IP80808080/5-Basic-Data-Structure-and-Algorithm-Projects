function convertToRoman(num) {
  const romanNumeric = [
    { value: 1000, numeric: 'M' },
    { value: 900, numeric: 'CM' },
    { value: 500, numeric: 'D' },
    { value: 400, numeric: 'CD' },
    { value: 100, numeric: 'C' },
    { value: 90, numeric: 'XC' },
    { value: 50, numeric: 'L' },
    { value: 40, numeric: 'XL' },
    { value: 10, numeric: 'X' },
    { value: 9, numeric: 'IX' },
    { value: 5, numeric: 'V' },
    { value: 4, numeric: 'IV' },
    { value: 1, numeric: 'I' }
  ];

  let result = '';

  for (const numeric of romanNumeric) {
    while (num >= numeric.value) {
      result += numeric.numeric;
      num -= numeric.value;
    }
  }

  return result;
}

console.log(convertToRoman(36)); 
