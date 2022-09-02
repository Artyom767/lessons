// const map =function(val,func){
// const newArr = [];
// for(let i=0; i<val.length; i++){ 
  
//     newArr[i]=func(val[i]);
    
// };
// return newArr;
// };

// const res = map([1,2,3,4,5,6,7],function(val){return val*2;});
// console.log(res)

/*const filter = function(val){
    let j=0;
    const newArr = [];
    for(let i=0; i < val.length; i++) { 
       if(val[i] % 2 === 0) {
         newArr[j] = val[i];
         j++;
       };
    };
    return newArr;
};

 let a = filter([1,2,3,4,5]);
 console.log(a);*/

let arr = [1,2,3,4];

let fun = function (arr, func, arj) { 
    arr.forEach(function(val, i){
      arj = val;
     arj = func(arj,val,i)
       
       
    })
     return arj;
};


let values = fun(arr,function(arj,val){return Math.max(arj,val)})
console.log(values)

