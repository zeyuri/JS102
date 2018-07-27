//Use this file to implement Part One of your project
var animal = {};

animal.username = 'Rast';
animal['tagline'] = 'Come on tiger';

var noises = [];

animal['noises'] = noises

var counter = 0;

for(var key in animal) {
    counter++;
    if (key == 'username') {
        console.log('Hi my name is ' + animal[key]);
    }
    if (key == 'tagline') {
        console.log('I like to say ' + animal[key]);
    }
    
}