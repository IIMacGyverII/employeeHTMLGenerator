const Employee = require("./Employee")

class Engineer extends Employee{

    constructor(name, id, email, github){

        super(name, id, email)
        this.github = github;

    }
    getGithub()
    {
      return this.github;
    }
   
    getRole(){
        return 'Engineer'
       }



}

// let Engineer = new Engineer("sam", 1, "sam@sam.com", "waldo-22")

module.exports = Engineer;