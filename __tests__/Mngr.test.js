const Manager = require('../lib/Manager');


test('Getting Manager', () => {
    const manager = new Manager('Marcus', 29, 'marcusxhale1@gmail.com', 4);
    
    expect(manager.phoneNumber).toEqual(expect.any(Number));
});

// Getting role
test('Getting role of Manager', () => {
    const manager = new Manager('Marcus', 29, 'marcusxhale1@gmail.com.com');

    expect(manager.getRole()).toEqual("Manager");
}); 