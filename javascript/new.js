let cal=()=>{
 var age,daysInAYear,days;

 age=prompt("enter your age");
 daysInAYear = 365;
 days= age*daysInAYear;
 return days;

 }

 let b=(f)=>{

//  console.log(34);

  return f();


 }
  console.log(b(cal));



