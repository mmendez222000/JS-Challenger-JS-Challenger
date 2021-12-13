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

function valor(digits){
  if(!digits) return[];
  let resultadoAnterior = keyboard[digits[0]]; 
  
  for(let i = 1; i < digits.length; i++){
      const digit = digits[i];
      let letters = keyboard[digit];
      const tempArray = [];
      
      resultadoAnterior = resultadoAnterior.forEach(i1 => {
          letters.forEach(i2 =>{
              tempArray.push(`${i1}${i2}`);
          })
      });
  
      resultadoAnterior = tempArray;
  }
  document.write(resultadoAnterior);
}

let ingresarNumero = [2,3,4];

valor(ingresarNumero);

/*let V_arregloEntrada = [2,4];

function mostrarLetras(arregloEntrada){
    
    
    let tablero = [
        ['T','C','A','D','R','A','C','T'],
        ['P','P','P','P','P','P','P','P'],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        ['p','p','p','p','p','p','p','p'],
        ['t','c','a','d','r','a','c','t'] ]
      
      console.log(tablero.join('\n') + '\n\n')

      tablero[1][2] = tablero[3][4]
      //tablero[1][2] = ' '
      console.log(tablero.join('\n'))
        
      
    let teclado = [['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']];
    let resultado = [];
    
    console.log(teclado.join('\n') + '\n\n');

    teclado[1][2] = teclado[2][2];
    console.log(teclado.join('\n'))
   
}

mostrarLetras(V_arregloEntrada);
*/