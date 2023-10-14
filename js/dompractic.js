import users from './user.js';
const magicBtn = document.querySelector('.magic-btn');
const itemList = document.querySelector('.categories');

const makeUser = options => {
  return options.map(({ name, email, gender, age }) => {
    const listItemEl = document.createElement('li');
    listItemEl.classList.add('listStyle');
    listItemEl.style.backgroundColor = 'red';
    const userName = document.createElement('h1');
    const userEmail = document.createElement('a');
    const userGender = document.createElement('p');
    const userAge = document.createElement('p');
    listItemEl.append(userName, userEmail, userGender, userAge);
    //user name
    userName.textContent = name.toUpperCase();

    // user email
    userEmail.textContent = email;
    userEmail.href = email;

    //user gender
    userGender.textContent = `Gender: ${gender}`;

    //user age
    userAge.textContent = `Age: ${age}`;

    return listItemEl;
  });
};

const user = makeUser(users);
magicBtn.addEventListener('click', () => {
  itemList.classList.add('js-cat');
  itemList.append(...user);
});
