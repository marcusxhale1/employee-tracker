const Manager = require('../lib/Manager');

// Manager as whole
test('Manager', () => {
    const manager = new Manager('Marcus', 29, 'marcusxhale1@gmail.com', 4);
    
    expect(manager.phoneNumber).toEqual(expect.any(Number));
});

// Getting role
test('Getting role of employee', () => {
    const manager = new Manager('Marcus', 29, 'marcusxhale1@gmail.com.com');

    expect(manager.getRole()).toEqual("Manager");
}); 