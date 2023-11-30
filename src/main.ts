import "./styles/style.scss";
import {pokemonArray} from "./data/pokemon"

const cardContainer = document.querySelector(".card-container");
if(!cardContainer) throw new Error("Query error");

const addPokemonCard = (pokemon : Pokemon) => {
    cardContainer.innerHTML += `
    <div class="card">
    <img src="${pokemon.sprite}"/>
        <div class="card__content">
            <h1 class="card__heading">${pokemon.name}</h1>
            <p class="card__text">
            ${pokemon.name} (${pokemon.id}) is a ${pokemon.types} type pokemon.
            </p>
        </div>
    </div>`
}

//pokemonArray.forEach(pokemon =>{
//    addPokemonCard(pokemon);
//})

