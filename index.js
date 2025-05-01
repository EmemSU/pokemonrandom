//FETCH, using Pokemon API

function randomizer(){
    let randme = Math.floor(Math.random()*1119) + 1;
    return randme;
}


const fetchRand = document.getElementById("fetchRand");

fetchRand.addEventListener("submit", (event)=>{
    //random number generated
    event.preventDefault();
    const id = randomizer();

    console.log(id);

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) //get data
        .then(response => response.json())
        .then(data =>{
            const pokemonSprite = data.sprites.front_default;
            const pokeNamer = data.name;
            console.log(data);
            console.log(pokeNamer);
            invoker(pokemonSprite, pokeNamer); //passs to invoker
        });
});


function invoker(pokemonSprite, pokeNamer){
    //get and parse elements
    const imgElement = document.getElementById("pokemonPic");
    const nameElement = document.getElementById("pokeAPIname");
    const message = document.getElementById("message");
    imgElement.src = pokemonSprite;
    nameElement.innerText = pokeNamer;
    imgElement.style.display = "block";
    nameElement.style.display = "block";
    message.style.display = "none";
}
