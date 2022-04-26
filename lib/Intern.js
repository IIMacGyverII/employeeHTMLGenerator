const Employee = require("./Employee")

class Intern extends Employee{

    constructor(name, id, email, school){

        super(name, id, email)
        this.school = school;

    }
    getSchool()
    {
      return this.school;
    }
   
    getRole(){
        return 'Intern'
       }



}

// let Intern = new Intern("sam", 1, "sam@sam.com", "waldo-22")

module.exports = Intern;