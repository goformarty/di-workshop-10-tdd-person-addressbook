class Person {
    constructor(firstName, surname, dob) {
        this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        this.surname = surname;
        this.dob = dob;
        this.emails = [];
    }
    fullname() {
        return this.firstName + ' ' + this.surname;
    }
    addEmail(emailAddress) {
        return this.emails.push(emailAddress);
    }
}

module.exports = Person