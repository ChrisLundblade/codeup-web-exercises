'use strict';

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
//     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let threePlusLanguages = users.filter(user => user.languages.length > 2);
console.log(threePlusLanguages);

//     Use .map to create an array of strings where each element is a user's email address

let emails = users.map(user => user.email);
console.log(emails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let totalYearsExperience = users.reduce((accumulator, currentUser) => (accumulator + currentUser.yearsOfExperience), 0);
console.log(totalYearsExperience);
console.log(totalYearsExperience/users.length);

//     Use .reduce to get the longest email from the list of users.

let longestEmail = users.reduce((accumulator, currentUser, index, array) => {
   if(accumulator.email.length > currentUser.email.length){
       return accumulator;
   } else {
       return currentUser;
   }
}).email;
// let longestEmail = users.reduce((accumulator, currentUser,index, array) => {
//
// }, []);
console.log(longestEmail);

//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// var allInstructorNames = users.reduce((accumulator, currentUser, index, array) => (`${accumulator}, ${currentUser.name}`), 'Your instructors are: ');
let allInstructorNames = users.reduce((accumulator, currentUser, index, array) => {
    if(index === array.length-1){
        accumulator.push(currentUser.name);
        return "Your instructors are: " + accumulator.reduce((accumulator2, currentName, index, array) => {
            if(index ===array.length-1){
                return `${accumulator2}, and ${currentName}`;
            } else {
                return `${accumulator2}, ${currentName}`;
            }
        }) + '.';
    }
    accumulator.push(currentUser.name);
    return accumulator;
}, []);
console.log(allInstructorNames);


// Use .reduce to get the unique list of languages from the list of users.

// let languages = users.reduce((accumulator, currentUser, index, array) => {
//     if (index === 0) {
//         currentUser.languages.forEach(language => {
//             accumulator += `${language} `;
//         });
//         console.log(accumulator);
//         return accumulator;
//     } else {
//     currentUser.languages.forEach(language => {
//         if (!accumulator.includes(language)) {
//             accumulator += `${language} `;
//         }
//     });
//         return accumulator;
//     }
// }, '');
let languages = users.reduce((accumulator, currentUser, index, array) => {

        currentUser.languages.forEach(language => {
            if (!accumulator.includes(language)) {
                accumulator += `${language} `;
            }
        });
        return accumulator;

}, '');
console.log(languages);