// simple calculator used to do basic operators like addition, subtraction, multiplication, division.
// The calculator should be able to evaluate multi operand expressions and should follow the bodmas rule.
//  It should also support decimal numbers.
// Invalid expressions should be handled gracefully.

// *****
// Input
// 2+3+3
// Output
//  8

// Input
// 2+3-3
// Output
//  2

// Input
// 5 / 2 - 3
// Output
//  -0.5
// *****

function calculator(input) {
  if (input === null || typeof input !== 'string')
    return 'Please pass numbers and operands to calculate';

  const splited = input.split(' ');
  let output = 0;
  console.log(splited);
  //   check whether multiplication or division or parenthesis and move their indexes to first
  for (let i = 0; i < splited.length; i++) {
    let holder;

    if ((splited[i] === 'x') | '/') {
      let holder = splited.slice(0, i);
      console.log(holder);

      splited[0] = splited.slice(i - 1, i + 2);
      // splited.splice(1, splited.length - 2)
      console.log(splited);

      //       multiple or division
      splited[0][1] === 'x'
        ? (output += splited[0][0] * splited[0][2])
        : (output += splited[0][0] / splited[0][2]);
      console.log('after first calcuation:', splited);
      //        if(splited[1].includes('x' || '/')) {

      //        }
    }
  }

  // console.log(splited)
  console.log(output);
  //   call appropriate functions to do each calcuations

  //  It should also support decimal numbers.

  //   return string or number value
}

calculator('1 x 3 x 2');
