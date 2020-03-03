
class Parent{
    constructor(){
        this.surName = "Mohajan"
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.surName;
    }
}

const child1 = new Child("Abhi");
const child2 = new Child("Bristy");
console.log(child1.getFullName());
console.log(child2.getFullName());

