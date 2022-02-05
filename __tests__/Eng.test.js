const Engineer = require('../lib/Engineer');

// Engineer
test('Engineer', () => {
    const engineer = new Engineer('Marcus', 29, 'marcusxhale1@gmail', 'marcusxhale1');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// Getting Engineer github 
test('Engineers Github', () => {
    const engineer = new Engineer('Marcus', 90, 'Marcusxhale1@gmail.com', 'marcusxhale1');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Role of Engineer
test('Role of the engineer', () => {
    const engineer = new Engineer('Marcus', 90, 'Marcusxhale1@gmail.com', 'marcusxhale1');

    expect(engineer.getRole()).toEqual("Engineer");
});