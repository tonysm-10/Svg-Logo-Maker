const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');
const { SVG } = require('./lib/svg');

const width = 300; // Set width here
const height = 200; // Set height here

inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Please enter up to three characters?',
    validate: function(value) {
      if (value.length > 3) {
        return 'Please enter only up to three characters!';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Please enter text color?',
    default: 'black',
    validate: function() {
      return true;
    }
  },
  {
    type: 'list',
    name: 'shape',
    message: 'What type of shape would you like?',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter shape color?',
    validate: function() {
      return true;
    }
  }
]).then(function(answers) {
  console.log(answers);

  // create a new shape object based on the user's choice of shape
  let shape;
  if (answers.shape === 'circle') {
    shape = new Circle(answers.shapeColor);
  } else if (answers.shape === 'square') {
    shape = new Square(answers.shapeColor);
  } else if (answers.shape === 'triangle') {
    shape = new Triangle(answers.shapeColor);
  }

  // create a new SVG object with the specified width and height
  const svg = new SVG({width, height});

  // add the shape to the SVG object and set its text and color
  svg.addShape(shape, width / 2, height / 2);
  svg.setText(answers.text, answers.textColor || 'black', '2em');


  // generate the SVG code and write it to a file (e.g. output.svg)
  fs.writeFile('output.svg', svg.toSVG(), (err) => {
    if (err) throw err;
    console.log('SVG file saved as output.svg!');
  });
});
