const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUser) {
        super(name, id, email);
        this.githubUser = githubUser;
    }

    getGithub() {
        return this.githubUser;
    };

     // overridden the class
    getRole() {
        return 'Engineer';
    };

}

module.exports = Engineer;