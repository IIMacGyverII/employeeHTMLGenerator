// initialization
// getrole method
// get github method

const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should set the values of name, id and email, when i set them. from employee", () => {
      // Arrange
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      //Act
      let employee = new Employee(name, id, email);
      //   let Manager = new Manager(gitHub);

      //Assert
      expect(employee.name).toEqual(name);
      expect(employee.id).toEqual(id);
      expect(employee.email).toEqual(email);
      //   expect(Manager.gitHub).toEqual(gitHub);
    });
  });

  describe("getRole", () => {
    it("should return Manager when getRole is called ", () => {
      // Arrange
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      let manager = new Manager(name, id, email);

      //Act
      let role = manager.getRole();

      //Assert
      expect(role).toEqual("Manager");
    });
  });

  describe("OfficeNumber", () => {
    it("should get the OfficeNumber from Manager", () => {
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      let officeNumber = "1";
      let manager = new Manager(name, id, email, officeNumber);
      expect(manager.getOfficeNumber()).toEqual(officeNumber);
    });
  });
});
