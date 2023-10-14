const magicBtn = document.querySelector('.magic-btn');

//console.log(magicBtn);

// const navListEl = document.querySelector('.nav__list');
// const navItemEl = navListEl.querySelector('.nav__item');

// const curentLink = '/about';

// const linkEl = document.querySelector(`.nav__item[href='${curentLink}']`);
// magicBtn.addEventListener('click', () => {
//   navListEl.classList.add('nav__list--curent');

//   linkEl.textContent = linkEl.textContent.toLocaleUpperCase();

//   linkEl.classList.add('nav__item--curent');
// });

//------------task 1-----------

//------------task 1-----------

//------------task 1-----------

// const listEls = document.querySelector('#categories');
// const itemEl = document.querySelectorAll('.item');
// console.log('Number of categories:', listEls.children.length);

// itemEl.forEach(el => {
//   console.log('Category:', el.firstElementChild.textContent);
//   console.log('Elements:', el.lastElementChild.children.length);
// });

//----------------------

//----------------------
const categoryListEl = document.querySelector('#category');
// console.log(`We have : ${categoryListEl.children.length} category`);

// const itemListEl = categoryListEl.querySelectorAll('.item');
// //console.log(itemListEl);

// itemListEl.forEach(el => {
//   console.log('Category :', el.firstElementChild.textContent);

//   console.log('sub-category : ', el.lastElementChild.children.length);
// });
// magicBtn.addEventListener('click', () => {
//   const titleEl = document.createElement('h1');
//   const linkEl = document.createElement('a');
//   const imgTitle = document.createElement('img');
//   imgTitle.src = '/img/team-1-min.jpg';
//   imgTitle.width = 300;
//   imgTitle.alt = 'men on the foto';

//   linkEl.classList.add('link');
//   linkEl.textContent = 'my Link';
//   linkEl.href = 'https://www.google.com';

//   titleEl.classList.add('title');
//   titleEl.textContent = 'It`s my title';
//   categoryListEl.prepend(titleEl);
//   categoryListEl.append(linkEl);
//   categoryListEl.prepend(imgTitle);
//   console.log(titleEl);
//   console.log(imgTitle);
// });

// magicBtn.addEventListener('click', () => {
//   for (const color of colors) {
//     const butEl = document.createElement('button');
//     butEl.type = 'button';
//     butEl.textContent = color.label;
//     butEl.style.backgroundColor = color.hex;

//     butArr.push(butEl);
//   }
//   bodyEl.append(...butArr);
// });

// const butElement = colors.map(({ hex, label }) => {
//   const butEl = document.createElement('button');
//   butEl.type = 'button';
//   butEl.textContent = label;
//   butEl.style.backgroundColor = hex;

//   return butEl;
// });
// console.log(butElement);
// bodyEl.append(...butElement);

//https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// const img2 =
//   'https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
// const img3 =
//   'https://images.pexels.com/photos/2928158/pexels-photo-2928158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

//const heroEl = document.querySelector('.hero');
//const heroTitleEl = document.querySelector('.hero__title');
//const heroImgEl = document.querySelector('.hero_img');

// const actions = document.querySelectorAll('.js-actions button');
// console.log(actions);

// console.log(actions[0].dataset.actions);
// console.log(actions[1].dataset.actions);
// console.log(actions[2].dataset.actions);

//const categoryEl = document.querySelector('#categories');
//console.log(categoryEl);

//const itemsEl = document.querySelectorAll('.item');
//console.log(itemsEl);

// itemsEl.forEach(el => {
//   // const gt = el.lastElementChild.children;
//   // console.log(gt);
// });

const imageEL =
  'https://images.pexels.com/photos/2928158/pexels-photo-2928158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

// const img = document.createElement('img');
// img.src = imgEl;
// img.alt = 'my cat';
// //img.width = 320;
// document.body.prepend(img);
// console.log(img.width);

// const listEl = document.createElement('ul');

// const listItem = document.createElement('li');

// const titleEl = document.createElement('h1');
// listEl.appendChild(listItem);
// listItem.appendChild(titleEl);

// document.body.append(listEl);

// const addEl = function (name) {
//   titleEl.textContent = name;
// };

// addEl('food');
// addEl('animal');

const colorEl = document.querySelector('.js-color-picker');

const colors = [
  { hex: '#f44336', label: 'one' },
  { hex: '#2196f3', label: 'two' },
  { hex: '#4caf50', label: 'three' },
  { hex: '#ffeb3b', label: 'four' },
  { hex: '#f40b3b', label: 'five' },
];

// const element = colors.map(el => {
//   const buttonEl = document.createElement('button');
//   buttonEl.style.backgroundColor = el.hex;
//   buttonEl.textContent = el.label;
//   buttonEl.classList.add('button');

//   return buttonEl;
// });
// colorEl.append(...element);

// const makeColorPickerEl = option => {
//   return option.map(el => {
//     const buttonEl = document.createElement('button');
//     buttonEl.style.backgroundColor = el.hex;
//     buttonEl.textContent = el.label;
//     buttonEl.classList.add('button');

//     return buttonEl;
//   });
// };

// const element = makeColorPickerEl(colors);
// colorEl.append(...element);
const listEl = document.querySelector('.categories');
const itemListElement = [
  {
    title: 'cat1',
    img: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'cat2',
    img: 'https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'cat3',
    img: 'https://images.pexels.com/photos/2928158/pexels-photo-2928158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const makeList = options => {
  return options.map(el => {
    const listItem = document.createElement('li');
    const titleEl = document.createElement('h1');
    const imgEl = document.createElement('img');
    listItem.classList.add('listStyle');
    listItem.append(titleEl, imgEl);

    titleEl.textContent = el.title;
    titleEl.classList.add('titleStyle');
    imgEl.src = el.img;
    imgEl.classList.add('.imgStyle');

    return listItem;
  });
};
const element = makeList(itemListElement);
listEl.append(...element);
