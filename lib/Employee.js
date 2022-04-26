class Employee{

    constructor(name, id, email)
    {
        this.name = name;
         this.id = id;
         this.email = email;
    }

 getName()
 {
    return this.name;
 }

 getId()
 {
   return this.id;
 }

 getEmail()
 {
   return this.email;
 }

 getRole(){
  return 'Employee'
 }

}
// let Bob = new Employee("bob", 1, "bob@bob.com")
// Bob.getName()
// console.log(Bob.getName())

module.exports = Employee;