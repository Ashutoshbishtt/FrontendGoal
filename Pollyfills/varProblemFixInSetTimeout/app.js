// function runIt() {
//     for (var i = 0; i < 4; i++) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//   }

//   runIt();

function runIt() {
  for (var i = 0; i < 4; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

runIt();

//or we can use the let variable, because it is block scope,
//above problem arises because of the var , because it was function scope!
