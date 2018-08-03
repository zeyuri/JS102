var DotaTeamMaker = function(heroName) {
  return {
    speak: function() {
      console.log("my name is ", heroName)
    },
    name: heroName
  };
};

var heroNames = ["Zeus", "Magina", "Lycan", "Witch Doctor", "Enigma"];

var team = [];

for(var i = 0; i < heroNames.length; i++) {
  team.push(DotaTeamMaker(heroNames[i]));
};

for(var i = 0; i < team.length; i++) {
  team[i].speak();
}777