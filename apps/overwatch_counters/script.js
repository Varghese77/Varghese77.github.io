
// Associative array that links a hero to an array of its counters
var countersMap = initializeCounters();

// Returns new Associative Array with hero counter data
function initializeCounters() {
    var countersMap = [];
    
    // Adds counter data
    countersMap["genji"] = new Array("winston", "mei", "zarya");
    countersMap["mccree"] = new Array("widowmaker", "genji", "soldier76");
    countersMap["pharah"] = new Array("mccree", "roadhog", "soldier76");
    countersMap["sombra"] = new Array("phara", "winston", "symmetra");
    countersMap["reaper"] = new Array("junkrat", "mccree", "pharah");
    countersMap["soldier76"] = new Array("mei", "reinhardt", "genji");
    countersMap["tracer"] = new Array("mccree", "mei", "soldier76");
    countersMap["reaper"] = new Array("mccree", "pharah", "junkrat");
    countersMap["bastion"] = new Array("genji", "tracer", "widowmaker");
    countersMap["ana"] = new Array("genji", "reaper", "tracer");
    countersMap["dva"] = new Array("mei", "symmetra", "zenyatta");
    countersMap["hanzo"] = new Array("dva", "tracer", "widowmaker");
    countersMap["junkrat"] = new Array("widowmaker", "mccree", "pharah");
    countersMap["lucio"] = new Array("mei", "mccree", "pharah");
    countersMap["mccree"] = new Array("genji", "widowmaker", "soldier76");
    countersMap["mei"] = new Array("widowmaker", "pharah", "junkrat");
    countersMap["mercy"] = new Array("mccree", "tracer", "widowmaker");
    countersMap["reinhardt"] = new Array("reaper", "winston", "pharah");
    countersMap["roadhog"] = new Array("reaper", "dva", "genji");
    countersMap["symmetra"] = new Array("junkrat", "pharah", "winston");
    countersMap["torbjorn"] = new Array("junkrat", "widowmaker", "pharah");
    countersMap["widowmaker"] = new Array("dva", "genji", "winston");
    countersMap["winston"] = new Array("reaper", "mei", "mccree");
    countersMap["zarya"] = new Array("roadhog", "pharah", "reaper");
    countersMap["zenyatta"] = new Array("hanzo", "tracer", "widowmaker");
    
    return countersMap;
}

function heroClick(clickedId){
	var counters = countersMap[clickedId];
	var heros = document.getElementsByClassName("hero");
	
	for (var i = 0; i < heros.length; i++){
		var heroId = heros[i].id;
		var hero = document.getElementById(heroId);
		
		var isCounterHero = isCounter(heroId, counters);
		if (isCounterHero || clickedId == heroId){
			hero.style.opacity = "1.0";
			hero.style.filter  = 'alpha(opacity=100)' //IE8 fallback;
			hero.style.boxShadow = "3px 5px 20px 3px #000000";
			
			if (isCounterHero) {
				hero.style.border = "5px solid green";
			} else {
				hero.style.border = "5px solid red";
			}
		} else {
			hero.style.opacity = "0.25";
			hero.style.filter  = 'alpha(opacity=25)' //IE8 fallback;
			hero.style.boxShadow = "none";
			hero.style.border = "none";
		}
	}
}

function isCounter(heroName, heroCounters){
	for (var k = 0; k < heroCounters.length; k++){
		if (heroCounters[k] == heroName){
			return true;
		}
	}
	return false;
}
