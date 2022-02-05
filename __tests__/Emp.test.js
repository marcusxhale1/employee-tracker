const Employee = require("../library/Employee");

// Object created
test('Employee', () => {
    const employee = new Employee('Marcus', 29, 'marcusxhale1@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    });

// Creating employee name

test('Getting employee name', () => {
    const employee = new Employee('Marcus', 29, 'marcusxhale1@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Getting ID

test('Creates ID', () => {
    const employee = new Employee('Marcus', 29, 'marcusxhale1@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// Getting Email 
test('Gettign email', () => {
    const employee = new Employee('Marcus', 29, 'marcusxhale1@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Test role of the employee 
test('checking role of the employee', () => {
    const employee = new Employee('Marcus', 29, 'marcusxhale1@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 
