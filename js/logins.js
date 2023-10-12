const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

////-----------------------------------------------
// const getAllSkils = users => {
//   return [...users]
//     .flatMap(item => item.skills)
//     .filter((e, i, a) => a.indexOf(e) === i)
//     .sort((a, b) => a.localeCompare(b));
// };

//console.log('getAllSkils:', getAllSkils(users));
// //----------------------------------
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter(item => item.gender === gender)
//     .reduce((acc, item) => {
//       return acc + item.balance;
//     }, 0);
// };
// console.table(
//   'gender balance total:',
//   getTotalBalanceByGender(users, 'female'),
// );

// //---------------------------------
// const getSortedFriends = users => {
//   return [...users]
//     .flatMap(a => a.friends)
//     .filter((e, i, a) => a.indexOf(e) === i)
//     .sort((a, b) => a.localeCompare(b));
// };

// console.log('getSortedFriends:', getSortedFriends(users));
// //----------------------------------------
// const getNamesSortedByFriendCount = users => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(item => item.name);
// };

// console.log('getNamesSortedByFriendCount:', getNamesSortedByFriendCount(users));
// //-------------------------
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };
// console.log('sortByDescendingFriendCount:', sortByDescendingFriendCount(users));
// //-----------------------------
// const getTotalFriendCount = users => {
//   return users.reduce((acc, item) => {
//     return acc + item.friends.length;
//   }, 0);
// };
// console.log('getTotalFriendCount:', getTotalFriendCount(users));

// //-----------------------------------------
// const calculateTotalBalance = users => {
//   return users.reduce((acc, item) => {
//     return acc + item.balance;
//   }, 0);
// };
// console.log('calculateTotalBalance:', calculateTotalBalance(users));
// //---------------------------
// const userName = users.map(ele => ele.name);
// const userEmail = users.map(ele => ele.email);
// console.log('userName:', userName, 'userEmail:', userEmail);
// //-------------------------
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(({ eyeColor }) => eyeColor === color);
// };

// console.log('getUsersWithEyeColor:', getUsersWithEyeColor(users, 'brown'));
// //----------------------------------------
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(({ age }) => age >= minAge && age <= maxAge);
// };
// console.log('getUsersWithAge:', getUsersWithAge(users, 30, 40));
// //------------------------------
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(({ friends }) => friends.includes(friendName));
// };
// console.log('getUsersWithFriend:', getUsersWithFriend(users, 'Briana Decker'));
// //-----------------------
// const getFriends = users => {
//   return users
//     .flatMap(el => el.friends)
//     .filter((e, i, a) => a.indexOf(e) === i);
// };

// console.log('getFriends:', getFriends(users));
// //-----------
// const getActiveUsers = users => {
//   return users.filter(e => e.isActive);
// };
// console.log('getActiveUsers:', getActiveUsers(users));
