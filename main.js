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
   { 
     if(val[i] % 2 === 0) {
       newArr[j] = val[i];
       j++;
     };
  };
  return newArr;
};

let a = filter([1,2,3,4,5]);
console.log(a);*/


// const arr = [1,2,3,4,5,6,7,8,9];
// let newArr = function (arr) {
//  let arjeq = 0;
//   for (let i = 0; i<arr.length;i++) {
//     arjeq += arr[i];
     
//    }
//   return arjeq;
// };
// alert(newArr(arr))


/*let obj = [{
  anun: "Joe",
  azganun: "Jojoyan",
  age: 3,
   meqena: "jopel"},
{

}
]


let stringify = function (obj) {
let result = "";
Object.keys(obj).forEach(function (keys) {
let value = obj[keys];
result += keys +" "+" "+ ":  "+value+"\n";
})
return result;
}
alert (stringify(obj))*/


/*let arr = [1,2,3,4];

let fun = function (arr, func, arj) { 
    arr.forEach(function(val, i){
      arj = val;
      arj = func(arj, val, i)  
    })
 return arj;
};


let value = fun(arr,function(arj,val) {return Math.max (arj, val)})

console.log(value)*/



/*let arr = [2,3,4,5];
let newArr = [1,7,8,9];
let j = newArr.length;
for (let i = 0; i < arr.length; i++) {
newArr[j] = newArr[j] + arr[i];
j++;
  }
  alert(newArr)
  alert (j)*/


let arr = [2,3,4,5];
let newArr = [1,7,8,9];
let j = newArr.length;
  arr.forEach(function(val,i) {
  newArr[j] = val, j++;});
 console.log (newArr)