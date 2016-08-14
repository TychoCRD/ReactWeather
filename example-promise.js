// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp){
//   if(err){
//     console.log('error', err);
//   } else {
//     console.log('succes', temp);
//   }
// });
//
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// });


function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
    resolve(a+b);
  } else {
    reject('Arguments are not numbers');
  }
  });
};

addPromise(2, 4).then(function(answer){
  console.log('promise success', answer);
}, function(err){
  console.log('promise error', err);
});

addPromise('hi', 3).then(function(answer){
  console.log('promise success', answer);
}, function(err){
  console.log('promise error', err);
});
