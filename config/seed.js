const {Flavours, Users} = require('../models');



Flavours.bulkCreate([
        {flavour: 'Vanilla', description: 'This is the best icecream ever made!', vote: 15},
        {flavour: 'Strawberry', description: 'This is the best icecream ever made!', vote: 15},
        {flavour: 'Chocholoco', description: 'This is the best icecream ever made!', vote: 15},
        {flavour: 'Coockie', description: 'This is the best icecream ever made!', vote: 15},
        {flavour: 'Mint', description: 'This is the best icecream ever made!', vote: 15},
        {flavour: 'Fudge Brownie', description: 'This is the best icecream ever made!', vote: 15},
        {flavour: 'Christmassy', description: 'This is the best icecream ever made!'},
        {flavour: 'Cold Turkey', description: 'This is the best icecream ever made!'},
        {flavour: 'White Chocolate', description: 'This is the best icecream ever made!'},
        {flavour: 'Chocolate', description: 'This is the best icecream ever made!'},
        {flavour: 'Mango', description: 'This is the best icecream ever made!'},
        {flavour: 'Banana', description: 'This is the best icecream ever made!'},
        {flavour: 'Oreo', description: 'This is the best icecream ever made!'},
        {flavour: 'Salted Caramel', description: 'This is the best icecream ever made!'},
        {flavour: 'Peanut Butter', description: 'This is the best icecream ever made!'},
        {flavour: 'Blueberry', description: 'This is the best icecream ever made!'}, 
      ],
      { validate: true },
      {ignoreDuplicates: true})
      .then(() => 
      console.log("Flavour data have been saved"));
 
Users.create(
        {username: 'abtin', password: '1234', vote: 100, flavourId: 1},
      { validate: true })
      .then(() => 
      console.log("Neo is online"))

    