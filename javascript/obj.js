var obj={

 name:"pratika",

 age:"21",

 place:"delhi",

 diong:function()
  {
      return "hello";
  }


}


var arr=Object.keys(obj);

//console.log(arr);

var result = arr.map(function(key,index){

if(typeof obj[key]=="function")

 return key+":"+obj[key]();

 else
 return key+":"+obj[key];

})

console.log(result);