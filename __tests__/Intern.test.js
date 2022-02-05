const Intern = require('../lib/Intern');

// Intern as whole
test('Intern', () => {
    const intern = new Intern('Marcus', 29, 'marcusxhale1@gmail.com', 'UC Berekley');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// Getting school information
test('gets employee school', () => {
    const intern = new Intern('Marcus', 90, 'marcusxhale1@gmail.com', 'UC Berekley');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Get role of Engineer
test('gets role of employee', () => {
    const intern = new Intern('Marcus', 90, 'marcusxhale1@gmail.com.com', 'UC Berekley');

    expect(intern.getRole()).toEqual("Intern");
}); 