function result (num){
if(num%2==0) return num+ "even";
else return num+"odd";
}
function checkodd (num,final){
for (var i=1; i<=num;i++)
    console.log(final(i));
    return "loop over"

}

function coding(num,func,final){
     return func(num,final);
     }

 console.log(coding(10,checkodd,result));