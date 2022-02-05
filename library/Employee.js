class Employee{
    constructor(name, id, email) {
        this.name = name;
        this.id = id; 
        this.email = email
    }
    //Posting Name  
    getName() {
        return this.name;
    }

    // Posting ID 
    getID() {
        return this.id
    }
    // Posting Email 
    getEmail() {
        return this.email
    }

    //Putting it all together
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;