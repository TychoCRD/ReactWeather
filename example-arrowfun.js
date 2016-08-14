var names = ['Horatio', 'Tsui', 'Bob'];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name)=>{
//   console.log('arrowfunc',name);
// });
//
// // arrow func content is return value
// var returnMe = (name) => name + '!';
// console.log(returnMe(Bob));



// var person = {
//   name: 'Bob',
//   greet: function(){
//     names.forEach(function(name){
//       console.log(this.name + ' says hey to ' + name);
//     });
//   },
//   arrowGreet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hey to ' + name);
//     });
//   }
// }
// // This doesn't work because "this" scope is incorrect... or "updates the this keyword"
// person.greet();
//
// // This works because arrow functions don't update "this"
// person.arrowGreet();

// Challenge Area

var addStatement = (a, b)=>{
  return a+b;
};
var addExpression = (a, b) => a + b;

console.log('addS', addStatement(2, 3));
console.log('addE', addExpression(1, 6));
