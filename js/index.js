// const rentDay = 7;
// const costOneDayRent = 40;
// const discount = 50;
// const cashBack = 20;
// let totalAmount = rentDay * costOneDayRent;

// if (rentDay >= 3 && rentDay < 7) {
//     totalAmount -= cashBack;
// } else if (rentDay >= 7) {
//     totalAmount -= (cashBack + discount);
// }

//  console.log(totalAmount);

// const x1 = 10;
// const x2 = 30;
// const number = 50;

// const result = number < x1 && number > x2;
// const result1 = number < x1 || number > x2;

// console.log('result :',result)
// console.log('result1 :', result1);

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline  && isFriend  && !isDnd ;

// console.log("Can open chat :", canOpenChat);

// const subscription = 'vip';

// const canAccessContent = subscription === 'pro' || subscription ===  'vip';

// console.log("you have access :", canAccessContent)

// Витвления

// const balance = -1000;
// let message= balance>0?`you have balance ${balance}`: 'negotive balance';

// if (balance > 0) {
//     message=`you have balance ${balance}`
// } else {
//     message = 'negotive balance'
// };

// console.log(message)

//-------------------------------------

// let balance = 10000;
// const payment = 2000;
// let message;

// console.log(`Общая стоимость заказов ${payment} кредитов.
//  Проверяем количество доступных средств на счету`);

// if (balance > payment) {

//     balance -= payment;

//    console.log(`На счету осталось ${balance} кредитов`);
// }
// else {
//    console.log( `Недостаточно средсв`);
// }

// console.log('operation finish');

//----------------------------------------

// const totalSpend = 499;
// let payment = 500;
// let discount = 0;
// let totalPayment = totalSpend + payment;

// if (totalSpend >= 100 && totalSpend < 1000) {

//     discount = 0.02;

//     console.log(`заказ на сумму ${payment} со скидкой ${discount *100}%`);

// } else if (totalSpend => 1000 && totalSpend <= 5000) {

//     discount = 0.05;

//     console.log(`заказ на сумму ${payment} со скидкой ${discount *100}%`);

// } else if (totalSpend > 5000) {

//     discount = 0.1;

//    console.log(`заказ на сумму ${payment} со скидкой ${discount *100}%`);
// } else {

//     discount = 0;

//     console.log(`Вы не наш пратнер, скидка ${discount}%`);
// };

// ---------------------Витвления-------------------------

// 1-20, 2-30, 3-50, 4-70, 5-120.
// const stars = 5;
// let price;

// if (stars === 1) {

//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// }else if (stars === 3) {
//     price = 50;
// }else if (stars === 4) {
//     price = 70;
// }else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('not have price');
// }

// switch (stars) {
//     case 1:
//         price = 20;
//         break;

//     case 2:
//         price = 30;
//         break;

//     case 3:
//         price = 50;
//         break;

//     case 4:
//         price = 70;
//         break;

//     case 5:
//         price = 120;
//         break;

//     default:
//         console.log('not have price');
// }

// console.log(price);

// 11-12, 12-32, 13-43, 14-54.

// const stars = 15;
// let quantitySteps;

// switch (stars) {

//     case 11:
//         quantitySteps = 12;
//         break;

//     case 12:
//     quantitySteps = 32;
//         break;

//     case 13:
//     quantitySteps = 43;
//         break;

//     case 14:
//     quantitySteps = 54;
//         break;

//     default:
//         console.log("not have steps");

// }

// console.log(quantitySteps);

// const option = 4;
// let messagge ='';
// switch (option) {

//     case 1:
//         messagge = 'вы можете забрать товар завтра';
//         break;
//     case 2:
//         messagge = 'курьер доставит';
//         break;

//     case 3:
//         messagge = 'отправим сегодня';
//         break;

//     default:
//         messagge ='мы свяжемся';

// }
// console.log(messagge.toLocaleUpperCase());

// ----------------------cycle-------------

// for (let i = 0; i <= 5; i += 1 ) {

//     console.log(i);

// };
// const employers = 3;
// const minSalary = 500;
// const maxSalary = 5000;

// let totalSalary = 0 ;

// for (i = 0; i < employers; i += 1){

//    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`Зп работника ${i}: ${salary}`);
//     totalSalary += salary;

// };

// console.log(`totalSalary: ${totalSalary}`)

// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1){

//     if (i % 2 !== 0) {
//         console.log('ne chentoe :', i);
//         continue;

//     }
//     console.log(`четное :`, i);
//     total += i;

// }
// console.log(`total :`,total);

// --------------button-----------

// const btnAdd = document.querySelector('button[data-add]');
// const valueInput = document.querySelector('input[data-value]')
// const btnMin =document.querySelector('button[data-minus]')
// let total = 0;

// btnAdd.addEventListener('click', function () {

//     let value = Number(valueInput.value);

//     // console.log(value);

//     total += value;

//     console.log(total);

//     valueInput.value= ''
// })

// btnMin.addEventListener('click',  () =>  {

//     let value = Number(valueInput.value);

//     // console.log(value);

//     total -= value;

//     console.log(total);

//     valueInput.value= ''
// })

// --------------arrays--------

//const arrs = ['mango', 'kiwi', 'ajax', 'simba', 'sun'];

// console.log(arrs[0]);
// console.log(arrs[1]);
// console.log(arrs[arrs.length - 1]);
// console.log(arrs);

// for (let i = 0; i < arrs.length ; i += 1){

//     console.log(arrs[i]);

//     message += `${arrs[i]}`;
// };
// console.log(message);

// for (const arr of arrs) {

//     console.log(arr);

// }

// const string = 'javascript';

// for (const char of string) {
//     console.log(char);
// };

// const arrFind = 'simba';
// let message;

// for (const arr of arrs) {

//     if (arr !== arrFind) {
//         console.log(arr);
//         message =`have name: ${arr}`
//         break;
//     }
//     message ='not have name';
// };
// console.log(message);

// const numbers = [1, 32, 6, 18, 93, 12, 4,5,7,11];
// const threshold = 32;

// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] > threshold) {
//        continue;
//     };
//     console.log(numbers[i]);
// };

// const names = 'javascript is interesting';
// console.log(names.split(''));

// const arrs = ['mango', 'kiwi', 'ajax', 'simba', 'sun'];
// const names = ['javascript', 'is', 'interesting'];
// console.log(arrs.join(''));
// console.log(arrs.join(' '));
// console.log(arrs.join('-'));
// console.log(arrs.indexOf('simba'));
// console.log(arrs.includes('smba'));

// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

//  const arrs = ['mango', 'kiwi', 'ajax', 'simba', 'sun'];
// arrs.push('hello');
// arrs.unshift('hello');

//console.log(arrs);
//const clients = ["Mango", "Ajax", "Poly", "Kiwi",'Gustav','Ted'];
//console.log(clients.slice(2));
//console.log(clients.slice(-3)); // ["Poly", "Kiwi"]

// console.log(clients.splice(0, 3));
// console.log(clients);

//clients.splice(2, 0, 'red', 'white');

//for (const client of clients) {
//console.log(client);
//}

//console.log(clients);

// const list = ['mango', 'kiwi',];
// const listAdd = ['ajax', 'simba', 'sun'];
// const upgList = list.concat(listAdd);

// console.log(upgList);

// const matrix = [[1, 2, 3], [4, 5, 6], [22, 33, 44],];
// for (const mat of matrix) {
//         //console.log(mat);
//         for (const ma of mat) {
//                 console.log(ma);

//             }

//         };
//console.log(matrix);

// const clients = ["Mango", "Ajax", "Poly", "Kiwi", 'Gustav', 'Ted'];

// for (const client of clients) {

// };

// for (let i = 0; i <= ; i += 1){

// };

// console.log(clients);

// const carts = [54, 65, 32, 105, 84, 71, 120];
// let total = 0;

// for (let i = 0; i < carts.length; i+=1){

//     total += carts[i];
//     };

// for (const variable of carts) {
//     total += variable;
// }

// console.log(`total:`,total);

// const numbers = [1, 2, 5, 7, 4, 9, 23, 14, 31,24,];
// let total =0;

// for (const number of numbers) {
//     if (number % 2 !== 0) {

//         continue;
//     };

//     total += number;
// };

//console.log('total:', total);

// const logins = ["Mango", "Ajax", "Poly", "Kiwi", 'Gustav', 'Ted'];
// const loginToFind = 'Poly';
//let message = 'Login not find';

// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `login find : ${loginToFind}`;
//         break;
//     };
// };

// console.log(message);

// let message = logins.includes(loginToFind)
//     ? 'login find'
//     : 'Login not find';

// console.log(message );

//const numbers = [33, 5, 6, 78, 8, 12, 43, 12, 5, 9,11];
// let smallNumber = numbers[0];

// for (let i = 0; i < numbers.length; i += 1){

//     if (numbers[i] < smallNumber  ) {
//         smallNumber = numbers[i];
//     }
// }
//         console.log(smallNumber);

// for (const number of numbers) {
//      //console.log(number);

//     if ( number < smallNumber ) {
//         smallNumber = number;
//     }
// };
// console.log(smallNumber);

// const logins = ["Mango", "Ajax", "Poly", "Kiwi", 'Gustav', 'Ted'];
// let string = '';

// for (const login of logins) {
//     string+=login+', '
// }
// string = string.slice(0, string.length - 1);
// // let string = logins.join(',');

// console.log(string);

// const strings = "JavaScript";
// const letters = strings.split('');
// let invertString =''

// console.log(letters);

// for (const string of strings) {
//     console.log(string);

//     // if (string === string.toLocaleLowerCase()) {
//     //     invertString += string.toLocaleUpperCase()
//     //     continue;
//     // }
//     // invertString += string.toLocaleLowerCase()

//    invertString += string === string.toLocaleLowerCase()
//         ? string.toLocaleUpperCase()
//         : string.toLocaleLowerCase()

// };
// console.log(invertString);

// const title = "Top 10 benefits of react framework";

// const titleArr = title.toLocaleLowerCase().split(' ').join('-');

// console.log(titleArr);

// const arr1 = [5, 10, 15, 25];
// const arr2 = [12, 4, 6, 66];
// let total = 0;
// const arrTotal = arr1.concat(arr2);

// for (const arr of arrTotal) {
//     total += arr;
// }
// console.log(arrTotal);
// console.log(total);

// const cards = [
//     'card-1',
//     'card-2',
//     'card-3',
//     'card-4',
//     'card-5',
// ];

// const cardToRemove = 'card-3';

// const index = cards.indexOf(cardToRemove);
// console.log(index);

// const newCard = cards.splice(index, 1);

// console.log(cards);

// const cardAdd = 'card-6';
// const addNewCard = cards.push(cardAdd);
// console.log(cards);

// const cardAdd = 'card-6';
//  cards.splice(1,0,cardAdd,'23');
//  console.log(cards);

//--------------------------------------------

// const numbers = [33, 5, 6, 78, 8, 12, 43, 12, 5, 9, 11,2];

// const smallNum = function (params) {

//     let smallNumber = numbers[0];

//     for (let i = 0; i < numbers.length; i += 1){

//        if (numbers[i] < smallNumber  ) {
//             smallNumber = numbers[i];
//         }
//     }
//     return smallNumber;
// }
//     console.log(smallNum(numbers));

//---------------------------------------------

// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);
//     }
// };

// logItems(['mango', 'ted', 'fred', 'lokki', 'faust']);
// logItems([1, 2, 4, 6, 7, 8]);
// logItems(['keyboard','mouse','touchpad'])

//------------------------------------------
// const allLogins = ["Mango", "Ajax", "Poly", "Kiwi", 'Gustav', 'Ted'];

// const logins = function (logins, loginToFind) {

//    return logins.includes(loginToFind)
//         ?  `we find login ${loginToFind}`
//         : `login not find ${loginToFind}`;

// if (logins.includes(loginToFind)) {

//     return loginToFind;
// }
//return `login not find ${loginToFind}`;
// }

// console.log(logins(allLogins, 'Poly'));
// console.log(logins(allLogins, 'Kiwi'));
// console.log(logins(allLogins,'RgcjG'));

//-------------------------------

// const numbers = function (items) {
//     let smallNumber = items[0];

//     for (const item of items) {

//         if (item < smallNumber) {
//             smallNumber = item
//         }
//     }
//     return smallNumber;

// };

// console.log(numbers([2,5,-1,-5,65,12,5,1]));

//----------------------------------------------------

// const title = "Top 10 benefits of react framework";

// const titleArr = title.toLocaleLowerCase().split(' ').join('-');

// console.log(titleArr);

// const slugUrl = function (string) {

//     return  string.toLocaleLowerCase().split(' ').join('-');

// };

// console.log(slugUrl("Top 10 benefits of react framework"));
// console.log(slugUrl("we are the champion"));

// const getSumNumbers = function (...args) {
//    console.log(args);
//    //--------------old school-------
//     //const args = Array.from(arguments);
//     //--------------old school-------
//     let total = 0;

//     for (const arg of args) {
//         total += arg;
//     }
//     return total
// }

// console.log(getSumNumbers(1, 2, 3, 4, 5));
// console.log(getSumNumbers(1, 2, 5));

//-----------------rest----------------
// const filterNumber = function (array, ...args) {
//     console.log(array);
//     console.log(args);
//     const newArr =[]

//     for (const arg of args) {

//         if (array.includes(arg)) {
//             newArr.push(arg)
//         }

//     }
//     return newArr
// }

// console.log(filterNumber([1,2,3,4],3,5,2,6));

//--------------train------------------------
// document.querySelector('.out').addEventListener('mousemove',longWidth)
// document.querySelector('.out').addEventListener('click',reversWidth)
// let w = 100;
// let h =100
// function longWidth() {
//     w += 1;

//     document.querySelector('.out').style.width = w + 'px';

// }

// function reversWidth() {
//     w -= 20;

//     document.querySelector('.out').style.width = w + 'px';

// }
// train.onclick = function() {
//       let start = Date.now();

//       let timer = setInterval(function() {
//         let timePassed = Date.now() - start;

//         train.style.left = timePassed / 5 + 'px';
//           train.style.top = timePassed / 12 + 'px';
//         if (timePassed > 5000) clearInterval(timer);

//       }, 20);
//     }

//-----------------------------------
//----------------------------------
//--------------------------------object--------------

// let user = {
//     name: 'kot',
//     age: 20,
//     'like javascript': true,
//     address: {
//         city: 'monako',
//         street:'Hero'
//     }
// }

// console.log(user);
// console.log(user['like javascript']);
// console.log(user['name']);
// console.log(user.address.city);
//-----------------------------------------
// function makeUserInfo(name, age,address) {
//     return {
//         name,
//         age,
//         address,
//     }
// }
// let user = makeUserInfo('kot', 25,'city');
// console.log(user);
//---------------------------------
// const userInfo = {
//     name:'vasya',
// }
// console.log(userInfo);

// userInfo.age = 30;

// console.log(userInfo);

// userInfo.adrress = {city:'Odessa',street:'Hero str'};

// console.log(userInfo);

// delete userInfo.age;

// console.log(userInfo);

// const user = Object.assign({}, userInfo);

// console.log(user);

//-----------------------------------
// const user = {
//     name: 'kot',
//     age: 20,
//     'like javascript': true,
//     address: {
//         city: 'monako',
//         street: 'Hero'
//     }
// };

// if (user.age) {
//     console.log(user.age);
// }
// if (user.address.street) {
//     console.log(user.address.street);
// }
// console.log(user?.address?.street);

// const user = {
//     name: 'kot',
//     age: 20,
//     'like javascript': true,
//     address: {
//         city: 'monako',
//         street: 'Hero'
//     },
//     showInfo: function () {
//         console.log(`${this.name}, ${this.address}`);
//     },

//     showInfo () {
//         console.log(`${this.name}, ${this.address}`);
//     },
// };
// for (const key in user) {
//     console.log(key);

//     console.log(user[key]);

// }

// user.showInfo()

// let userInfo = {
//     name: 'kot',
//     age:30,
// }
// for (const key in userInfo) {
//     const value = userInfo[key]
//     console.log(value);
// }

// const playlist = {
//     name: ' My super playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
//     trackCount:3,
// }

// console.log(playlist);

// // console.log(playlist.name);
// // console.log(playlist['name']);

// playlist.adrress = {street:'hero'};

// console.log(playlist);

// const userCard = {};

// const addCard = function (name, age, adrress) {
//     userCard.name = name;
//     userCard.age = age;
//     userCard.adrress = adrress;

//     return userCard
// }

// console.log(addCard('kot', 25, 'hero str'));

//----------------------------------------------------
// const playlist = {
//     name: ' My super playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
//     trackCount:3,
// }

// console.log(playlist);

// const propertyName = 'tracks';

// console.log(playlist.tracks);
// console.log(playlist[propertyName]);

//---------------------------------------
// const username = 'mango';
// const email = "mango@mail.com";

// const signupData = {
//     username,
//     email,
// }

// console.log(signupData);

//-------------------------------------
// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//     [inputName]: inputValue,
// };

// console.log(colorPickerData);

//----------------------------------

// const playlist = {
//     name: ' My super playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
//     //trackCount: 4,
//     changeName(newName) {
//         this.name = newName;

//     },
//     addTrack(newTrack) {
//         this.tracks.push(newTrack);

//     },
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
//     getTrackCount() {
//         return this.tracks.length
//     }

// }
// console.log(playlist);

// playlist.changeName('Mega play list')
// console.log(playlist);

// playlist.addTrack('it is a new Track');
// console.log(playlist);

// playlist.updateRating(6);
// console.log(playlist);

//------------------------------------------------------
// const feedback = {
//     good: 5,
//     varygood: 10,
//     bad:3,
// }

// let totalFeedback = 0;

// const keys = Object.keys(feedback)

// console.log(keys);

// for (const key of keys) {
//     console.log(key);
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }
// console.log(totalFeedback);

// const values = Object.values(feedback);

// console.log(values);

// for (const value of values) {
//     totalFeedback+=value
// }
// console.log(totalFeedback);

//------------------------
// const friends = [
//     { name: 'mango', online: false },
//     { name: 'kiwi', online: false },
//     { name: 'poly', online: true },
//     { name: 'henry', online: true },
//     { name: 'garry', online: true },
//     { name: 'tery', online: false },
// ];

// console.table(friends);

// for (const friend of friends) {
//     console.log(friend);

//     // friend.newProp = 555;
// }
// console.table(friends);
//-------------------------------------------------------

// const findFriendByName = function (allFriends, name) {
//     for (const friend of allFriends) {

//         if (friend.name === name) {
//            return `we find friend:${name}`;
//         }
//     }
// return `not find friend ${name}`
// };

// console.log(findFriendByName(friends, 'poly'));
// console.log(findFriendByName(friends, 'kiwi'));
// console.log(findFriendByName(friends,'top'));
///----------------------------------------------------
// const allNameFriends = function (allFriends) {
//     const allName = [];
//     for (const friend of allFriends) {
//         allName.push(friend.name)

//     }
// return allName
// }
// console.log(allNameFriends(friends));

// const getOnlineFriends = function (allFriends) {
//     const onlineFriend = [];

//     for (const friend of allFriends) {

//         if (friend.online) {
//             onlineFriend.push(friend)
//         }
//     }
//     return onlineFriend
// };
// //-----------------------------------------------
// const getOfflineFriends = function (allFriends) {

//     const offlineFriends = []

//     for (const friend of allFriends) {

//         if (!friend.online) {
//             offlineFriends.push(friend)
//         }
//     }
//     return offlineFriends
// };

// console.log(getOnlineFriends(friends));
// console.log(getOfflineFriends(friends))
//---------------------------------------------
// const getFriendStatus = function (allFriend) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };
//   const { online, offline } = friendsByStatus;

//   for (const friend of allFriend) {

//     if (friend.online) {
//       online.push(friend);
//       continue;
//     }

//       offline.push(friend);
//     }

//     return friendsByStatus;
//   }

// console.log(getFriendStatus(friends));
//--------------------------------------------------------------
// const friends = [
//     { name: 'mango', online: false },
//     { name: 'kiwi', online: false },
//     { name: 'poly', online: true },
//     { name: 'henry', online: true },
//     { name: 'garry', online: true },
//     { name: 'tery', online: false },
// ];

//---------------------------------------------------
// function countProps(object) {
//     let propCount = 0;
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;

//         }
//     }

//   return propCount;
// }

// console.log(countProps({}))
// console.log(countProps({ name: "Mango", age: 2 }))
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//-----------------------------------------------

// const playlist = {
//     name: ' My super playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3', 'track-4'],

//     getName() {
//         console.log('name:', this.name);
//     },
//     getRating() {
//       console.log('rating:', this.rating);
//     },

//     getTracks() {

//         console.log('myall tracks:',this.tracks);
//     },

//     getTracksCount() {

//         console.log('count tracks:', this.tracks.length);
//     },
//     addTrack(track) {
//         this.tracks.push(track)
//     },

// };

// playlist.getName()
// playlist.getRating()
// playlist.getTracks()
// playlist.getTracksCount()

// playlist.addTrack('my new track')
// playlist.getTracks()
// playlist.getTracksCount()

//----------------------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
// ];
// for (const book of books) {
//     console.log(book);
// }

//-------------------------------

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//     const { hex, rgb } = color;
//     hexColors.push(hex);
//     rgbColors.push(rgb)
// }

// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb)

// }

// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     let totalPrice = 0;
//     for (const product of products) {
//         console.log(product);
//         if (product.name === productName) {
//             totalPrice = product.price * product.quantity;
//         }

// }
//     return totalPrice;

// }
// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice("Radar"));

// function getAllPropValues(propName) {
//     const propValue = [];

//     for (const product of products) {
//         //console.log(product);
//         if (product.hasOwnProperty(propName)) {
//             console.log(product[propName]);
//             propValue.push(product[propName]);
//             console.log(propValue);
//         }

//     }

// }
// console.log(getAllPropValues("category"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));

// function getProductPrice(productName) {

//     for (const product of products) {
//         if (product.name===productName) {
//             return product.price;
//         }
//     }
//     return null;

// }
///--------------------------
// function getProductPrice(productName) {
//   for (const product of products) {
//     const { name, price, quantity } = product;

//     if (name === productName) {
//       return price;
//     }
// }
// return null
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Engine"));
// console.log(getProductPrice("Droid"));

// const friends = [
//     { name: 'mango', online: false },
//     { name: 'kiwi', online: false },
//     { name: 'poly', online: true },
//     { name: 'henry', online: true },
//     { name: 'garry', online: true },
//     { name: 'tery', online: false },
// ];

//--------------------------------------------------

// ----------------spread-- rest----------------

// const temps = [3, 8, 2, 5, 12, 43, 25];

// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

// const a = { x: 1, y: 2 };

// const b = { x: 0, z: 3 };
// const f = { d: 3, y: 4, v: 0 };

// const c = { ...a, ...f, ...b };
// console.log(c);

//--------destructuring----------------

// const profile = {
//   name: 'John',
//   age: 24,
//   location: 'Monkibu',
//   stats: {
//     folowers: 46,
//     viev: 34,
//     likes: 14,
//   },
//   trackCount: 10,
// };

//const userProfileInfo = function ({ name, age, location, stats, trackCount }) {
//const { name, age, location, stats: { folowers, viev, likes }, trackCount } = userProfile;
//console.log(userProfile);

//console.log(name,age,stats, trackCount);
//}

//userProfileInfo(profile)

// const { name, age, ...restProps } = profile;
// console.log(name,age);
// console.log(restProps);

// const { name,
//   age,
//   location,
//   stats: { folowers, viev, likes },
//   trackCount: num, // lokal change
// } = profile;

//console.log(folowers, likes, age, location, name,);
//console.log(num);

//--------------------------

// const friends = [
//   { name: 'mango', online: false, budget: 1000 },
//   { name: 'kiwi', online: false, budget: 1300 },
//   { name: 'poly', online: true, budget: 3500 },
//   { name: 'henry', online: true, budget: 2500 },
//   { name: 'garry', online: true, budget: 4000 },
//   { name: 'tery', online: false, budget: 7000 },
// ];

// const cart = {
//   items: [],

//   getItems() {
//     return this.items;
//   },

//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;

//         return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },

//   remove(productName) {
//     const { items } = this;
//     for (const item of items) {
//       if (item.name === productName) {
//         items.splice(items.indexOf(item), 1);
//       }
//     }
//   },

//   clear() {
//     this.items = [];
//   },

//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;
//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }
//     return total;
//   },

//   increaseQuatity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//         return;
//       }
//     }
//   },

//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity -= 1;
//         return;
//       }
//     }
//   },
// };

// console.log(cart.getItems());

// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'tomato', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'pomelo', price: 90 });
// cart.add({ name: 'marshmelou', price: 150 });
// cart.add({ name: 'tomato', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'tomato', price: 50 });

// console.log(cart.getItems());

// // cart.remove('lemon');
// // cart.remove('marshmelou');

// //cart.clear();
// cart.increaseQuatity('pomelo');
// cart.decreaseQuantity('pomelo');

// console.table(cart.getItems());

// //console.log(cart.countTotalPrice());

// ----------------call back---------------

// const butSum = document.querySelector('.js-sum');
// const but = document.querySelector('.js-but');
// // const clickBut = function () {
// //   console.log('buton click' + Date.call());

// // };

// const clickBut = function () {
//   console.log('buton click' + Date.call());
// };

// but.addEventListener('click', clickBut);

// const callback = function () {
//   console.log('after all');
// };
// console.log('first');
// setTimeout(callback, 2000);
// console.log('second');

// const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const getNum = function (array, callback) {
//   const newArr = [];
//   for (const arr of array) {
//     //console.log(arr);
//     const passed = callback(arr);
//     if (passed) {
//       newArr.push(arr);
//     }
//   }
//   return newArr;
// };
// const callback1 = function (value) {
//   return value >= 5;
// };
// const callback2 = function (value) {
//   return value <= 5;
// };
// const getFuits = function (fruit) {
//   return fruit.budget <= 3000;
// };

// console.log(getNum(x, callback1));
// console.log(getNum(x, callback2));
// console.log(getNum(friends, getFuits));

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} cook ${dish}`);
//   };
//   return makeDish;
// };

// const kot = makeSheff('kot');
// kot('potato');

// const friends = [
//   { name: 'mango', online: false, budget: 1000 },
//   { name: 'kiwi', online: false, budget: 1300 },
//   { name: 'poly', online: true, budget: 3500 },
//   { name: 'henry', online: true, budget: 2500 },
//   { name: 'garry', online: true, budget: 4000 },
//   { name: 'tery', online: false, budget: 7000 },
// ];

// const sortBudget = friends.sort((a, b) => (a.budget < b.budget ? 1 : -1));
// console.log(sortBudget);

// const totalBudget = friends.reduce((total, friend) => {
//   return (total += friend.budget);
// }, 0);
// console.log(totalBudget);

//---------------------------
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, item) => {
//   return acc + item.playtime / item.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);
//-----------------
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = [...books]
//   .filter(item => item.rating > MIN_BOOK_RATING)
//   .map(items => items.author)
//   .sort((a, b) => a.localeCompare(b));

// console.table(names);

//---------------this--------------
// const x = {
//   name: 'mango',
//   get() {
//     console.log(this);
//     //console.log(this.name);
//   },
// };

// const hat = {
//   color: 'black',
// };

// x.get.call(hat);

// y(x.get);
//----------------

// const showThis = function () {
//   console.log('showThis -> this', this);
// };

// const changeColors = function (color) {
//   console.log('changeColor -> this', this);
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// const sweater = {
//   color: 'green',
// };

// changeColors.call(hat, 'teal');
// console.log(hat);
//---------------------------------------------------

//-------------counter----------------------------
// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('object', this);
//     this.value += 10;
//   },

//   decrement() {
//     console.log('object', this);
//     this.value -= 10;
//   },
// };

// const updateValue = function (value, operation) {
//   operation(value);
// };

// const incremBut = document.querySelector('.js-but');
// const decremBut = document.querySelector('.js-sum');
// const elValue = document.querySelector('.js-value');

// incremBut.addEventListener('click', function () {
//   counter.increment();
//   elValue.textContent = counter.value;
// });
// decremBut.addEventListener('click', function () {
//   counter.decrement();
//   elValue.textContent = counter.value;
// });
//-------------------------------------
//
//
//--------------------
// const showTag = function () {
//   console.log('this is =>', this);
//   console.log('thise name is =>', this.name);
// };

// const x = {
//   name: 'mango',
//   get() {
//     console.log('this is =>', this);
//     console.log('thise name is =>', this.name);
//   },
// };
// //x.get();
// const y = {
//   name: 'kuku',
// };

// const fnA = function (action) {
//   console.log(action);

//   action();
// };
// fnA(x.get);

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('this =>', this);
//     this.color = color;
//   };
//   return changeColor;
// };

// const updateColor = makeChangeColor();

// const hat = {
//   color: 'blue',
//   updateColor,
// };

// hat.updateColor('red');
// console.log(hat);

//
//
//
//-----------------prototype-----------------

// const objC = {
//   z: 5,
// };
// console.log('objC', objC);
// const objB = Object.create(objC);
// objB.y = 2;
// console.log('objB', objB);
// // console.log(objB.y);
// // console.log(objB.z);

// const objA = Object.create(objB);
// objA.x = 1;
// console.log('objA', objA);

// console.log(objA.z);

///------------------

///--------------------

//--------------------

//---------------

//---------------

// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// const myCar = new Car({
//   brand: 'audi',
//   model: 'q3',
//   price: 2000,
// });
// console.log(myCar);
// myCar.changePrice(6000);
// console.log(myCar);
// const myCar1 = new Car({
//   brand: 'bmw',
//   model: 'm3',
//   price: 1500,
// });
// console.log(myCar1);
// myCar1.changePrice(5000);
// console.log(myCar1);

// const myCar2 = new Car({
//   brand: 'porsh',
//   model: 'carrera',
//   price: 2500,
// });
// console.log(myCar2);
//--------------

//------------------

// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//   //console.log(this);
// };
// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
//   console.log(this);
// };
// Car.prototype.changeModel = function (newModel) {
//   this.model = newModel;
//   console.log(this);
// };

// const myCar1 = new Car({
//   brand: 'Bmw',
//   model: 'M3',
//   price: 2000,
// });

// //console.log(myCar1);
// const myCar2 = new Car();
// //console.log(myCar2);

// myCar1.changePrice(1500);
// myCar1.changePrice(2500);
// myCar1.changeModel('x7');

// const myCar3 = new Car({
//   brand: 'zaz',
//   model: 'slavuta',
//   price: 1_000_000,
// });

// console.log(myCar3);

//--------class--------------
//------------------------------
//-----------------------------
//-------------------------------

// class Car {
//   constructor({ brand, model, price } = {}) {
//     this.model = model;
//     this._price = price;
//     this.#brand = brand;
//     //console.log(this);
//   }

//   #brand;
//   get price() {
//     return this._price;
//   }

//   set price(newPrice) {
//     this._price = newPrice;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     return (this.#brand = newBrand);
//   }
// }

// const myCar1 = new Car({
//   brand: 'Bmw',
//   model: 'M3',
//   price: 2000,
// });
// console.log(myCar1.getBrand());
// console.log(myCar1.price);
// myCar1.price = 5000;
// console.log(myCar1);

//----------------------

//-------------------------

//-------------------

//--------------------

// class User {
//   static Status = {
//     low: 'users',
//     medium: 'normal',
//     high: 'hero',
//   };

//   constructor({ name, age, email } = {}) {
//     this.name = name;
//     this._age = age;
//     this.email = email;
//   }

//   get age() {
//     return this._age;
//   }

//   set age(newAge) {
//     this._age = newAge;
//   }
// }

// class Manager extends User {
//   constructor({ status, ...props }) {
//     super(props);

//     this.status = status;
//   }
// }

// const poly = new Manager({
//   name: 'Poly',
//   age: 25,
//   email: 'kot@mail.com',
//   status: User.Status.low,
// });

// console.log(poly);
// console.log(poly.age);
// poly.age = 35;
// console.log(poly);
// console.log(poly.age);

// class SuperManager extends Manager {
//   constructor({ grade, ...props }) {
//     super(props);
//     this._grade = grade;
//   }
//   get grade() {
//     return this._grade;
//   }
//   set grade(newGrade) {
//     this._grade = newGrade;
//   }
// }

// const alen = new SuperManager({
//   name: 'Alen',
//   age: 45,
//   email: 'alen@mail.com',
//   status: User.Status.medium,
//   grade: 10,
// });
// console.log(alen);

// const henry = new SuperManager({
//   name: 'Henry',
//   age: 55,
//   email: 'henry@mail.com',
//   status: User.Status.high,
//   grade: 3,
// });

// console.log(henry.__proto__ === SuperManager.prototype);
// console.log(SuperManager.prototype.__proto__ === Manager.prototype);
// console.log(Manager.prototype.__proto__ === User.prototype);
// console.log(User.prototype.__proto__ === Object.prototype);
