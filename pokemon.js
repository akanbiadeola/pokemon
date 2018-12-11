//defined this array to store all pokemon push
let POKEMON = [];

//defined class trainer

class Trainer{
  constructor(name) {
    this.name = name;
    this.pokemon = [];

  }

  all() {
    return POKEMON;
  }

  get(name){
   if (name == "ampharos") {
     return getAmpharos();
   } else if (name == "blastoise") {
     return getBlastoise();
   } else if (name == "chinchou") {
         return getChinchou();
       }
     }
}

let musemiu = new Trainer('Musemiu');


//Calls the data and gets the pokemon stats
function getAmpharos() {
    var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
             // document.write(this.responseText);
             //What result you want to acheive
             data = JSON.parse(this.responseText);
              console.log(data);


      let ampharos ={
       name: data.name,
         hp: data.stats[5].base_stat,
         attack: data.stats[4].base_stat,
         ability: data.abilities[0].ability.name,
         id: data.id,



}
musemiu.pokemon.push(ampharos);
POKEMON.push(ampharos);


// this prints the selected stats data
     document.getElementById("hp").innerHTML= "HP: " + ampharos .hp;
     document.getElementById("attack").innerHTML= "ATACK: " + ampharos .attack;
     document.getElementById("ability").innerHTML= "ABILITY: " + ampharos .ability;
     document.getElementById("id").innerHTML= "ID: " + ampharos .id;


}


}

     xhttp.open("GET", "https://fizal.me/pokeapi/api/v2/name/ampharos.json", true);
     xhttp.send();
}





function getBlastoise() {
    var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
             // document.write(this.responseText);
             //What result you want to acheive
             data = JSON.parse(this.responseText);
              console.log(data);


      let blastoise ={
       name: data.name,
         hp: data.stats[5].base_stat,
         attack: data.stats[4].base_stat,
         ability: data.abilities[0].ability.name,
         id: data.id,

}
musemiu.pokemon.push(blastoise);
POKEMON.push(blastoise);
// this prints the selected stats data
     document.getElementById("hp2").innerHTML="HP: " + blastoise.hp;
     document.getElementById("attack2").innerHTML= "ATACK: " + blastoise.attack;
     document.getElementById("ability2").innerHTML= "ABILITY: " +blastoise.ability;
     document.getElementById("id2").innerHTML= "ID: " + blastoise.id;


}

}

     xhttp.open("GET", "https://fizal.me/pokeapi/api/v2/name/blastoise.json", true);
     xhttp.send();
}




function getChinchou() {
    var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
             // document.write(this.responseText);
             //What result you want to acheive
             data = JSON.parse(this.responseText);
              console.log(data);


      let chinchou={
       name: data.name,
         hp: data.stats[5].base_stat,
         attack: data.stats[4].base_stat,
         ability: data.abilities[0].ability.name,
         id: data.id,

}

musemiu.pokemon.push(chinchou);
POKEMON.push(chinchou);

// this prints the selected stats data
     document.getElementById("hp3").innerHTML= "HP: " + chinchou.hp;
     document.getElementById("attack3").innerHTML= "ATACK: " + chinchou.attack;
     document.getElementById("ability3").innerHTML= "ABILITY: " + chinchou.ability;
     document.getElementById("id3").innerHTML= "ID: " + chinchou.id;


}


}

     xhttp.open("GET", "https://fizal.me/pokeapi/api/v2/name/chinchou.json", true);
     xhttp.send();
}

// this set up the input search form with eventlisterner
const input = document.querySelector('input');

input.addEventListener('change', getPokemon);
