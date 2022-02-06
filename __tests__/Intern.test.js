const Intern = require('../library/Intern');

// Intern 
test('Getting Intern', () => {
    const intern = new Intern('Marcus', 29, 'marcusxhale1@gmail.com', 'UC Berekley');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// Getting school information
test('getting employee school', () => {
    const intern = new Intern('Marcus', 90, 'marcusxhale1@gmail.com', 'UC Berekley');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Get role of Engineer
test('getting role of employee', () => {
    const intern = new Intern('Marcus', 90, 'marcusxhale1@gmail.com.com', 'UC Berekley');

    expect(intern.getRole()).toEqual("Intern");
}); 