
const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should set the values of name, id and email, when i set them.", () => {
      // Arrange
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      //Act
      let employee = new Employee(name, id, email);

      //Assert
      expect(employee.name).toEqual(name);
      expect(employee.id).toEqual(id);
      expect(employee.email).toEqual(email);
    });
  });

  describe("getName", () => {
    it("should get the name from Employee", () => {
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      let employee = new Employee(name, id, email);
      expect(employee.getName()).toEqual(name);
    });
  });

  describe("getId", () => {
    it("should get the id from Employee", () => {
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      let employee = new Employee(name, id, email);
      expect(employee.getId()).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should get the email from Employee", () => {
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      let employee = new Employee(name, id, email);
      expect(employee.getEmail()).toEqual(email);
    });
  });
  
  describe("getRole", () => {
    it("should return Employee when getRole is called ", () => {
      // Arrange
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      let employee = new Employee(name, id, email);

      //Act
      let role = employee.getRole();

      //Assert
      expect(role).toEqual("Employee");
    });
  });
});
