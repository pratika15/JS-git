
var firstName="pratika ";
var lastName="bhanu ";

// function fullName(){
//     console.log(firstName+lastName);
// }

// fullName();

var person={
    firstName:"abhinav ",

    lastName:"sharma ",

    fullName:function(){
        firstName="Nayan";
        lastName="Singh";
        console.log (firstName + lastName);
        console.log(this.firstName + this.lastName);
        // console.log(window.firstName);
        // console.log(firstName+lastName);
        console.log(window.firstName+window.lastName);
        // console.log(this.firstName+this.lastName);
        // console.log(person.firstName+person.lastName);
    }
}

// person.fullName();



