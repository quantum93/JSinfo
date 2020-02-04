'use strict';

const person = {
    firstName : "John",
    lastName : "Doe",
    id : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};

const name = person.fullName();
console.log(person.firstName, person.lastName, person.fullName(), name);