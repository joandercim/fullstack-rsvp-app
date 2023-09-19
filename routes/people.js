const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

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
router.get('/', async (req, res) => {
  try {
    const people = await Person.find();
    res.json({ success: true, data: people });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

// Get one person
router.get('/:id', async (req, res) => {
   try {
     const person = await Person.findById(req.params.id);
     res.json({ success: true, data: person });
   } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, error: 'Something went wrong' });
   }
});

// Add new person
router.post('/', async (req, res) => {
  const person = new Person({
    name: req.body.name,
    foodType: req.body.foodType
  });

  try {
    const savedPerson = await person.save();
    res.json({ success: true, data: savedPerson });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

// Remove person
router.delete('/:id', async (req, res) => {
  try {
    await Person.findByIdAndDelete(req.params.id);
    res.json({ success: true, data: {} });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }    
});
module.exports = router;
