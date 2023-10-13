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
const bodyEl = document.querySelector('body');
const butArr = [];
const colors = [
  { hex: '#f44336', label: 'one' },
  { hex: '#2196f3', label: 'two' },
  { hex: '#4caf50', label: 'three' },
  { hex: '#ffeb3b', label: 'four' },
];
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

const butElement = colors.map(({ hex, label }) => {
  const butEl = document.createElement('button');
  butEl.type = 'button';
  butEl.textContent = label;
  butEl.style.backgroundColor = hex;

  return butEl;
});
console.log(butElement);
bodyEl.append(...butElement);

console.log('hello');
