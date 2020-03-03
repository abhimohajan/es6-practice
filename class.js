class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "shakpura model high school";
    }

}

const student1 = new student(01, "karim");
const student2 = new student(02, "rahim");
const student3 = new student(05, "ratul");
console.log(student1.id, student2.name);