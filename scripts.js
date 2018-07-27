var animal = {}; 
 
animal.username = 'Rast'; 
animal['tagline'] = 'Come on tiger'; 
 
var noises = []; 
animal['noises'] = noises 
 
console.log(animal);

var counter = 0; 
 
for(var key in animal) { 
    counter++; 
    if (key == 'username') { 
        console.log('Hi my name is ' + animal[key]); 
    } else if (key == 'tagline') { 
        console.log('I like to say ' + animal[key]); 
    } 
     
}

var noiseArray = ['cocorico'];

noiseArray.unshift('latido');
noiseArray.push('miaou');
noiseArray[3] = 'mugido';

animal.noises = noiseArray;

var animals = [];

animals[0] = animal;

var quackers = { 
    username: 'DaffyDuck',
     tagline: 'Yippeee!',
      noises: [
            'quack',
            'honk',
            'sneeze',
            'growl'
        ] 
    };

var felino = { 
    username: 'Onça Pintada',
        tagline: 'Aqui tem coragem',
        noises: [
            'rawwwr',
            'MEAOW',
        ] 
    };

var cerradeiro = { 
    username: 'Mico',
        tagline: 'Sou bonito',
        noises: [
            'Mu mu aaaa',
            'Uh Uh Uh Uh',
        ] 
    };
    
animals.push(quackers);
console.log(animals);
animals.push(felino);
animals.push(cerradeiro);

console.log(animals);
