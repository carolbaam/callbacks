//EJERCICIO DE MANU

/*
1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:*/


function miForEach(arreglo, callback){
    
   callback(arreglo);
}

miForEach([1, 2, 3], function (arreglo) {

  for (var i = 0; i < arreglo.length; i++) {

    console.log(arreglo[i]);
  }

})

//refactorizando
function miForEach(arreglo, callback){
  for (var i = 0; i < arreglo.length; i++) {
    
        callback(arreglo[i]);
      }
}

miForEach([1,2,3],showNumbers)

function showNumbers(n){
  console.log(n)
}


/*
2 ) Crea tu propia función map que funcione igual a Array.map. Algo asi:*/


function miMap(arreglo, callback){
     console.log(callback(arreglo));
  }

 
  miMap([1, 2, 3, 4, 5], function (arreglo) {
    var newArr = [];
    for (var i = 0; i < arreglo.length; i++) {
      newArr.push(arreglo[i] + 2);

    }
    return newArr;
  })

  //refactorizando
  var newMappedArray=[];
  function miMap(arreglo, callback){
    for (var i = 0; i < arreglo.length; i++) {
        callback(arreglo[i]);
        
    }
 }


 miMap([1, 2, 3, 4, 5], sumPlusTow);


 function sumPlusTow(n){
    var newNumber=n+2;
   newMappedArray.push(newNumber);
   console.log(newMappedArray);
   return newMappedArray
   
   
 }
 






 /* 3 ) Crea tu propia función filter que funcione igual a Array.filter. Algo asi:*/
  /*
 function miFilter(arreglo, filter) {

   console.log(filter(arreglo));
 }

 var filter = function (arreglo) {
   var even = [];
   for (var i = 0; i < arreglo.length; i++) {
     if (arreglo[i] % 2 !== 0) {
       even.push(arreglo[i]);
     }
   }
   return even;
 };

 miFilter([1, 2, 3, 4, 5, 6, 7, 8], filter);
*/
 //refactorización
 var even = [];
 function miFilter(arreglo, callback) {
  for (var i = 0; i < arreglo.length; i++) {
       callback(arreglo[i])
  }
 }
  
   miFilter([1, 2, 3, 4, 5, 6, 7, 8], filter);
   
  function filter(n)  {
    if ( n % 2 !== 0) {
      even.push(n);
      
    }
    console.log(even)
    return even

    }
     
 
  
  



/*  4 ) Crea tu propia función reduce que funcione igual a Array.reduce. Algo asi:*/
function miReduce(arreglo, reduce) {
 console.log(reduce(arreglo));

}

var reduce = function (arreglo) {
 var newArr = []
 var sum = 0;
 for (var i = 0; i < arreglo.length; i++) {
   sum = sum + arreglo[i];
 }
 newArr.push(sum);
 return newArr;
}

miReduce([1, 2, 3], reduce);


/*Bonus:
1 ) Crea tu propia función sort que funcione igual a Array.sort. Algo asi:*/
function miSort(arreglo, callback){
   console.log(callback(arreglo));
 }

 miSort([1,2,3],function(arreglo){
   for(var i=0; i<arreglo.length; i++){
     
   }
 })

