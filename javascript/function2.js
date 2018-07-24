function myFn(fn) {
    document.write("pratika");
    // var result = fn()
    document.write(fn());



};

var myOtherFn = function() {
   return 'hello world';

};

myFn(myOtherFn);   // logs 'hello world'
// myFn();