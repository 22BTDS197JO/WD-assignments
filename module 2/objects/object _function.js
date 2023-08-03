const student= {
    fname:"Sanjay",
    laname:"Dutta",
    age:19,
    fullname: function()
    {
        console.log("Student full name is:", this.fname+""+this.laname);
        console.log(`Student first name is ${this.fname} last name is ${this.laname} and he is ${this.age} years old`);
    }
 };
 student.fullname()