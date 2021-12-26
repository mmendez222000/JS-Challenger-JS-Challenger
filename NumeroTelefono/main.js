function valor(digits){

  let keyboard = {
    '1': [],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };
  
  if(!digits) return [];
  let resultadoAnterior = keyboard[digits[0]];
  for(let i = 1; i < digits.length; i++){
    let letter = keyboard[digits[i]];
    let tempArray = [];

    resultadoAnterior.forEach(i1 => {
      letter.forEach(i2 => {
        tempArray.push(`${i1}${i2}`);  
      });  
    });
    
    resultadoAnterior = tempArray;
  }
  document.write(resultadoAnterior);
}

let Numero = [2,3,4];

valor(Numero);
