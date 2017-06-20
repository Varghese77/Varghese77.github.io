var hero_data;

function loadJSON(addr) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', addr, true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            hero_data = JSON.parse(xobj.responseText);
          }
    };
    xobj.send(null);  
}

loadJSON("https://varghese77.github.io/apps/overwatch_counters/hero_data.json");

// Array of hero icon buttons in the HTML document
var heros = document.getElementsByClassName('hero');

var heroDescriptionParagraph = document.getElementsByClassName('hero_descr_text');

function heroClick(clickedId){
	var counters = hero_data[clickedId].counters;
	
	for (var i = 0; i < heros.length; i++){
		var heroId = heros[i].id;
		var hero = heros[i];
		
		var isCounterHero = isCounter(heroId, counters);
		if (isCounterHero || clickedId == heroId){
			hero.style.opacity = '1.0';
			hero.style.filter  = 'alpha(opacity=100)' //IE8 fallback;
			hero.style.boxShadow = '3px 5px 20px 3px #000000';
			
			if (isCounterHero) {
				hero.style.border = '5px solid green';
			} else {
				hero.style.border = '5px solid red';
			}
		} else {
			hero.style.opacity = '0.50';
			hero.style.filter  = 'alpha(opacity=50)' //IE8 fallback;
			hero.style.boxShadow = 'none';
			hero.style.border = 'none';
		}
	}
    heroDescriptionParagraph[0].innerText = hero_data[clickedId].description;
}

function isCounter(heroName, heroCounters){
	for (var k = 0; k < heroCounters.length; k++){
		if (heroCounters[k] == heroName){
			return true;
		}
	}
	return false;
}
