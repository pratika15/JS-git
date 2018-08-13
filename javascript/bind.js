var person={
    firstName:"abhinav ",

    lastName:"sharma ",

    fullName:function(){
        console.log(this.firstName+this.lastName);
    }
}

var person1={
    firstName:"pratika ",
    lastName:"bhanu "
}

var person2={
    firstName:"navneet ",
    lastName:"kumar "
}

var pe1=person.fullName.bind(person1);
var pe2=person.fullName.bind(person2);

pe1();
pe2();

// var name="rose";

// function flower(){
//     console.log(this.name);
// }

// flower1={
//     name:"lily "
// }

// flower2={
//     name:"lotus "
// }

// var fl1=flower.bind(flower1);    // bind always return a new function

// fl1();
// fl1();
// fl1();
// fl1();
// fl1();
