import users from './user.js';

const magicBtn = document.querySelector('.magic-btn');
const itemList = document.querySelector('.categories');
const catalog = document.querySelector('.js-color-picker');
// ----------make user---------
// const makeUser = options => {
//   return options.map(({ name, email, gender, age }) => {
//     const listItemEl = document.createElement('li');
//     listItemEl.classList.add('listStyle');
//     listItemEl.style.backgroundColor = 'red';
//     const userName = document.createElement('h1');
//     const userEmail = document.createElement('a');
//     const userGender = document.createElement('p');
//     const userAge = document.createElement('p');
//     const btn = document.createElement('button');
//     listItemEl.append(userName, userEmail, userGender, userAge, btn);
//     //user name
//     userName.textContent = name.toUpperCase();

//     // user email
//     userEmail.textContent = email;
//     userEmail.href = email;

//     //user gender
//     userGender.textContent = `Gender: ${gender}`;

//     //user age
//     userAge.textContent = `Age: ${age}`;
//     // user btn
//     btn.textContent = 'delete';
//     btn.addEventListener('click', () => {
//       listItemEl.remove();
//       console.log(listItemEl.firstElementChild.textContent);
//     });

//     return listItemEl;
//   });
// };

// const user = makeUser(users);
// magicBtn.addEventListener('click', () => {
//   itemList.classList.add('js-cat');
//   itemList.append(...user);
//});
// ----------make user---------

//--------make user frieds-----------

// users.map(user => {
//   const titleNameEl = document.createElement('h1');

//   const itemListEl = document.createElement('ul');

//   titleNameEl.textContent = user.name;

//   user.friends.map(friend => {
//     const listEl = document.createElement('li');
//     listEl.textContent = friend;
//     itemListEl.append(listEl);
//   });

//   return catalog.append(titleNameEl, itemListEl);
// });

//------ first do it for one elemen-----
//------ first do it for one elemen-----
//------ first do it for one elemen-----
// const user = {
//   name: 'Ross Vazquez',
//   email: 'rossvazquez@xinware.com',
//   eyeColor: 'green',
//   friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//   isActive: false,
//   balance: 3793,
//   skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//   gender: 'male',
//   age: 24,
// };

// const makeColorBtnEl = ({ name, eyeColor }) => {
//   const btnD = document.createElement('button');
//   const itemListEl = document.createElement('ul');
//   const listEl = document.createElement('li');
//   btnD.textContent = name;
//   btnD.style.backgroundColor = eyeColor;
//   listEl.append(btnD);
//   itemListEl.append(listEl);
//   catalog.append(itemListEl);
//   return catalog;
// };
// //makeColorBtnEl(user);

// const makeUserColorBtn = users.map(makeColorBtnEl);

//----------color picker btn----------
//----------color picker btn----------
//----------color picker btn----------
// const colorArray = [
//   '#FF6633',
//   '#FFB399',
//   '#FF33FF',
//   '#FFFF99',
//   '#00B3E6',
//   '#E6B333',
//   '#3366E6',
//   '#999966',
//   '#99FF99',
//   '#B34D4D',
//   '#80B300',
//   '#809900',
//   '#E6B3B3',
//   '#6680B3',
//   '#66991A',
//   '#FF99E6',
//   '#CCFF1A',
//   '#FF1A66',
//   '#E6331A',
//   '#33FFCC',
//   '#66994D',
//   '#B366CC',
//   '#4D8000',
//   '#B33300',
//   '#CC80CC',
//   '#66664D',
//   '#991AFF',
//   '#E666FF',
//   '#4DB3FF',
//   '#1AB399',
//   '#E666B3',
//   '#33991A',
//   '#CC9999',
//   '#B3B31A',
//   '#00E680',
//   '#4D8066',
//   '#809980',
//   '#E6FF80',
//   '#1AFF33',
//   '#999933',
//   '#FF3380',
//   '#CCCC00',
//   '#66E64D',
//   '#4D80CC',
//   '#9900B3',
//   '#E64D66',
//   '#4DB380',
//   '#FF4D4D',
//   '#99E6E6',
//   '#6666FF',
// ];
// const col = 'red';
// const makeColorBtn = option => {
//   const btnEl = document.createElement('button');
//   const body = document.querySelector('body');
//   body.append(btnEl);
//   btnEl.textContent = option;
//   btnEl.style.backgroundColor = option;
//   btnEl.classList.add('button');
//   return body;
// };
// const colorsPicker = colorArray.map(makeColorBtn);
//----------color picker btn----------
//----------color picker btn----------

//---------------------------------------
//---------------------------------------
//---------------------------------------
//---------------------------------------

//------------------user card---------------
//------------------user card---------------
//------------------user card---------------
//------------------user card---------------
// const user = {
//   name: 'Ross Vazquez',
//   email: 'rossvazquez@xinware.com',
//   eyeColor: 'green',
//   friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//   isActive: false,
//   balance: 3793,
//   skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//   gender: 'male',
//   age: 24,
// };

// const makeUserCard = ({ name, email, balance, gender }) => {
//   const listEl = document.createElement('ul');
//   const listItemEl = document.createElement('li');
//   const listItemTitleEl = document.createElement('h1');
//   const listItemEmailEl = document.createElement('a');
//   const listItemBalanceEl = document.createElement('p');
//   const listItemGenderEl = document.createElement('p');

//   listItemEl.append(
//     listItemTitleEl,
//     listItemEmailEl,
//     listItemBalanceEl,
//     listItemGenderEl,
//   );

//   listEl.append(listItemEl);

//   //-----title
//   listItemTitleEl.textContent = name;

//   //----email
//   listItemEmailEl.textContent = email;
//   listItemEmailEl.href = `mailto:${email}`;

//   //--------balance
//   listItemBalanceEl.textContent = `${name} have on the balance: ${balance}`;

//   //-----gender

//   listItemGenderEl.textContent = `${name} is a ${gender}`;
//   catalog.append(listEl);
//   return catalog;
// };
// const makeCards = users.map(makeUserCard);
//------------------user card---------------

//----------------
//-------------------
//----------------

//--------------img card
//--------------img card
//--------------img card
const imgArr = [
  {
    img: 'https://i.pinimg.com/564x/42/81/b5/4281b51bc8651d2c83de92141616ec2b.jpg',
  },
  {
    img: 'https://i.pinimg.com/236x/f7/70/22/f7702293625f7788f0c01f2db9950005.jpg',
  },
  {
    img: 'https://i.pinimg.com/236x/41/c2/1a/41c21ab46c960d2d1eb221e27176b1c0.jpg',
  },
  {
    img: 'https://i.pinimg.com/236x/2f/d0/1a/2fd01aad4a1198c408a631c0810c43ff.jpg',
  },
  {
    img: 'https://i.pinimg.com/236x/20/d1/c7/20d1c72e60a6686fd306976d33172ddf.jpg',
  },
  {
    img: 'https://i.pinimg.com/236x/0d/3b/b1/0d3bb17beae65ba0cfd77007a3f24307.jpg',
  },
  {
    img: 'https://i.pinimg.com/236x/cc/a8/f0/cca8f0e6abb39ef68735b0215a27a612.jpg',
  },
  {
    img: 'https://i.pinimg.com/236x/b5/e0/ef/b5e0effe9ddf087cd1f3c1660bb8f309.jpg',
  },
];
const imgElement = {
  img: 'https://i.pinimg.com/236x/b5/e0/ef/b5e0effe9ddf087cd1f3c1660bb8f309.jpg',
};

const makeGalery = ({ img }) => {
  const imgEl = document.createElement('img');
  imgEl.classList.add('imgStyle');
  imgEl.src = img;

  return imgEl;
};
// catalog.append(makeGalery(imgElement));
catalog.classList.add('js-computer');

const galerryEl = imgArr.map(makeGalery);
catalog.append(...galerryEl);

//--------------img card
//--------------img card
//--------------img card
