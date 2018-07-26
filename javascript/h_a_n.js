//higher order fn
let a=()=>{

 return "hello";

}

let b=(f)=>{

 console.log(34);

 return f();


}

console.log( b(a) );

//anonymous fn

//let b=(f)=>{
//
//
// return f();
//
//
//}
//
//console.log( b( ()=>{
//
// return "hello";
//
//}) );
//
//
//
////nested fn
//let c=67;
//
//let a=(ab)=>{
//
// let d=44;
//
// let b=()=>{
//
//   console.log(d);
//   return ab;
//
// }
//
// return b();
//
//}
//
//console.log(a(45));
""