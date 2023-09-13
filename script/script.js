const inputName = document.getElementById('name');
const submitBtn = document.getElementById('submit-btn');
const vegeRadio = document.getElementById('vegetarisk');
const veganRadio = document.getElementById('vegan');
const form = document.getElementById('form');

const guests = [];

function submit(e) {
  let foodType;
  e.preventDefault();
  const radios = document.querySelectorAll('input[type="radio"]');

  for (const radio of radios) {
    if (radio.checked) {
      foodType = radio.id;
      radio.checked = false;
    }
  }

  const person = {
    name: inputName.value,
    foodType: foodType,
  };
  guests.push(person);
    inputName.value = '';
}

// inputName.addEventListener('keyup', getName);
form.addEventListener('submit', submit);
