// initialization
// getrole method
// get github method

const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should set the values of name, id and email, when i set them. from employee", () => {
      // Arrange
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      //Act
      let employee = new Employee(name, id, email);
    //   let engineer = new Engineer(gitHub);

      //Assert
      expect(employee.name).toEqual(name);
      expect(employee.id).toEqual(id);
      expect(employee.email).toEqual(email);
    //   expect(engineer.gitHub).toEqual(gitHub);
    });
  });

  describe("getRole", () => {
    it("should return Engineer when getRole is called ", () => {
      // Arrange
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      let engineer = new Engineer(name, id, email);

      //Act
      let role = engineer.getRole();

      //Assert
      expect(role).toEqual("Engineer");
    });
  });

  describe("getGithub", () => {
    it("should get the GitHub name from Engineer", () => {
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      let gitHub = "waldo-22"
      let engineer = new Engineer(name, id, email,gitHub);
      expect(engineer.getGithub()).toEqual(gitHub);
    });
  });
});
