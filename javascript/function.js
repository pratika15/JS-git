//  sayHello=(name, age)=>
// {
//     document.write (name + " is " + age + " years old.");
// }

a=()=>{
  console.log("inside a")
}

b=()=>{
    console.log("inside b")
  a();
  console.log("after call back")
}

c=()=>{
    console.log("inside c")
  b();
  console.log("after callback")
}

c();