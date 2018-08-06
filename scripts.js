var animal = {}; 
 
animal.username = 'Rast'; 
animal['tagline'] = 'Come on tiger'; 
 
var noises = []; 
animal['noises'] = noises; 
 
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
    
animals[animals.length] = quackers;

animals.push(felino, cerradeiro);

var AnimalTestUser = function(username) {
    var args = arguments.length;
    var otherArgs = [];
    if (args > 1) {
        for (var i=1; i<args; i++) {
            otherArgs.push(arguments[i]);
        }
    }
    return { 
        username: username,
        otherArgs: otherArgs
    };
};

var AnimalCreator = function(username, species, tagline, noises) {
    return {
        username: username,
        species: species,
        tagline: tagline,
        noises: noises,
        friends: []
    }
}

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
var cow = AnimalCreator('miranha', 'cow', 'sou o miranha', ['mooo', 'ish ish', 'broooo']);
var llama = AnimalCreator('Zeny', 'llama', 'im so cute', ['mhua', 'uhhhhu', 'ohnn ohnnn']);

var addFriend = function(animal, friend){
    animal.friends.push(friend.username);
};
addFriend(sheep, cow);
addFriend(sheep, llama);

var myFarm = [];
addFriend(cow, sheep);
addFriend(cow, llama);

addFriend(llama, sheep);
addFriend(llama, cow);

myFarm.push(sheep, cow, llama);

var addMatchesArray = function(farm) {
    var animals = farm.length;    
    for (var i=0; i<animals; i++) {
        farm[i].matches = []; 
    }
}

addMatchesArray(myFarm); 

var giveMatches = function(farm){
    var animals = farm.length;    
    for (var i=0; i<animals; i++) {
        match = farm[i].friends[Math.floor(Math.random() * farm[i].friends.length)];
        farm[i].matches.push(match); 
    }
}
giveMatches(myFarm); 


var friends = [];

friends.push(myFarm[0].username, myFarm[1].username);

console.log(friends);

var relationships = {};

relationships.friends = friends;

console.log(relationships);

var matches = [];

relationships.matches = matches;

relationships.matches.push(relationships.friends[0]);

console.log(relationships);

for(var i = 0; i < myFarm.length; i++) {
    myFarm[i].relationships = relationships;
};