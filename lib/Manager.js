const Employee = require("./Employee")

class Manager extends Employee{

    constructor(name, id, email, officeNumber){

        super(name, id, email)
        this.officeNumber = officeNumber;

    }
    getOfficeNumber()
    {
      return this.officeNumber;
    }
   
    getRole(){
        return 'Manager'
       }



}

// let Manager = new Manager("sam", 1, "sam@sam.com", "waldo-22")

module.exports = Manager;