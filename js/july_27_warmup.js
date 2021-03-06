'use strict';

// Write a function, getSimpleUser, that takes in a user object and returns a simplified user object.
//
//     Assume the following shape of the user object for the function input:
//     {
//         firstName: '...',
//         lastName: '...',
//         email: '...',
//         username: '...',
//         password: '...'
//     }
//
// The shape of the output should be the following:
// {
//     firstName: '...',
//         lastName: '...',
// }
//
// Regardless of the case of the first name and last name input, the output should be in all lower case.
var fred = {
    firstName: 'Fred',
    lastName: 'Smith',
    email: 'fred@email.com',
    username: 'fred123',
    password: 'pass123'
}
//
getSimpleUser(fred); // {firstName: 'fred', lastName: 'smith'}

function getSimpleUser(inputObject){
    let simpleObject ={
        firstName: inputObject.firstName.toLowerCase(),
        lastName: inputObject.lastName.toLowerCase()
    };
    return simpleObject;
}