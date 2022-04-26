// initialization
// getrole method
// get github method

const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should set the values of name, id and email, when i set them. from employee", () => {
      // Arrange
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      //Act
      let employee = new Employee(name, id, email);
    //   let Intern = new Intern(gitHub);

      //Assert
      expect(employee.name).toEqual(name);
      expect(employee.id).toEqual(id);
      expect(employee.email).toEqual(email);
    //   expect(Intern.gitHub).toEqual(gitHub);
    });
  });

  describe("getRole", () => {
    it("should return Intern when getRole is called ", () => {
      // Arrange
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      let intern = new Intern(name, id, email);

      //Act
      let role = intern.getRole();

      //Assert
      expect(role).toEqual("Intern");
    });
  });

  describe("getSchool", () => {
    it("should get the school name from Intern", () => {
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      let school = "Northwestern"
      let intern = new Intern(name, id, email,school);
      expect(intern.getSchool()).toEqual(school);
    });
  });
});
