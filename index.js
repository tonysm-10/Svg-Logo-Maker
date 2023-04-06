const inquirer = require('inquirer')
const fs = require('fs')


inquirer
.prompt([
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
        validate: function(){
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
        validate: function(){
            return true;
        }
    }
]).then(function(answers) {
    console.log(answers)
})
