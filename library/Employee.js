class Employee{
    constructor(name, id, email) {
        this.name = name;
        this.id = id; 
        this.email = email
    }
    //Getting Name  
    getName() {
        return this.name;
    }

    // Getting ID 
    getID() {
        return this.id
    }
    // Getting Email 
    getEmail() {
        return this.email
    }

    //Getting Role
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;