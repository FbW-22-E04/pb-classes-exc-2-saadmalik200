class Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxId = taxId;
    this.salary = salary;
  }

  generatePaySlip() {
    console.log(`Employee ID: ${this.id}`);
    console.log(`Name: ${this.firstName} ${this.lastName}`);
    console.log(`Tax ID: ${this.taxId}`);
    console.log(`Pay: ${this.salary / 12}`);
  }
}

const emp1 = new Employee(1, "Saad", "Malik", 123456, 45000);
const emp2 = new Employee(2, "Harshita", "Joshi", 65645, 55000);
const emp3 = new Employee(3, "Alina", "Cuznetov", 789451, 65000);
// console.log(emp1);
emp1.generatePaySlip();

// ////////////////////////////////////
console.log(`-------------------------------`);

class Manager extends Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    super(id, firstName, lastName, taxId, salary);

    this.managedEmployees = [];
  }

  addManagedEmployee(name) {
    this.managedEmployees.push(name);
    return this.managedEmployees;
  }
  removeManagedEmployee(emp1) {
    const idx = this.managedEmployees.findIndex((item) => emp1.id === item.id);

    this.managedEmployees.splice(idx, 1);
    console.log(this.managedEmployees);
  }
}
const manager1 = new Manager(1, "Ali", "Smith", 1234567, 45000);

manager1.generatePaySlip();
console.log(manager1.addManagedEmployee(emp1));
console.log(manager1.addManagedEmployee(emp2));
console.log(manager1.addManagedEmployee(emp3));

console.log(`-----------------------------------------`);

manager1.removeManagedEmployee(emp2);

console.log(manager1);
