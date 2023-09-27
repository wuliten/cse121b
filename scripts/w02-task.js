/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Bryan Borst';
let currentYear = '2023';
const profilePicture = 'images/bryan.png';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.src = profilePicture;
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */




let favFoods = ["Pizza","Burgers", "Baked Potatos"];
foodElement.innerHTML = favFoods
let newFood = "Steak";
favFoods.push(newFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.splice(0,1);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;

