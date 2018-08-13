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

person.fullName.call(person1);
person.fullName.call(person2);

// var name="rose";

// function flower(para){
//     console.log(this.name+this.place);
// }

// flower1={
//     name:"lily "
// }

// flower2={
//     name:"lotus ",
//     place:"water"
// }

// var fl2=flower.call(flower2);
// fl2();