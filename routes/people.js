const express = require('express');
const router = express.Router();

const peopleArray = [
  {
    id: 1,
    name: 'Olle',
    foodType: 'Vegetarian',
  },
  {
    id: 2,
    name: 'Nisse',
    foodType: 'Vegan',
  },
  {
    id: 3,
    name: 'Kenta',
    foodType: 'Köttis',
  },
];

// Get all people
router.get('/', (req, res) => {
  res.json({ success: true, data: peopleArray });
});

// Get one person
router.get('/:id', (req, res) => {
  const person = peopleArray.find((person) => person.id === +req.params.id);

  if (!person) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }
  res.json({ success: true, data: person });
});

// Add new person
router.post('/', (req, res) => {
  const person = {
    id: peopleArray.length + 1,
    name: req.body.name,
    foodType: req.body.foodType,
  };

  peopleArray.push(person);

  res.json({ success: true, data: person });
});

// Remove person
router.delete('/:id', (req, res) => {
  const person = peopleArray.find((person) => person.id === +req.params.id);

  if (!person) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
    }

    const index = peopleArray.indexOf(person);

    peopleArray.splice(index, 1);
    res.json({ success: true, data: {} });
});
module.exports = router;
