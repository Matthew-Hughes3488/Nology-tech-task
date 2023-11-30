import "./styles/style.scss";
import {pokemonArray} from "./data/pokemon"

const cardContainer = document.querySelector(".card-container");
const filterType = document.querySelector("#filter") as HTMLSelectElement;
const filterInput = document.querySelector(".filter-input") as HTMLInputElement;
if(!cardContainer || !filterInput || !filterType) throw new Error("Query error");

const resetPokemonCards = () =>{
    cardContainer.innerHTML = ""
}

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

const handleFilter = (event: Event) =>{
    const filterBar = event.target as HTMLInputElement
    const filter = filterBar.value;
    
}

filterInput.addEventListener("input", handleFilter)

//pokemonArray.forEach(pokemon =>{
//    addPokemonCard(pokemon);
//})

