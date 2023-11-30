import "./styles/style.scss";
import { pokemonArray } from "./data/pokemon";

let numberOfCardsDisplayed: number = 0;
let maxNumberOfCards: number = 151;

const cardContainer = document.querySelector(".card-container");
const filterType = document.querySelector("#filter") as HTMLSelectElement;
const filterInput = document.querySelector(".filter-input") as HTMLInputElement;
const numberOfResultsInput = document.querySelector("#number-of-results") as HTMLInputElement;
if (!cardContainer || !filterInput || !filterType || !numberOfResultsInput)
  throw new Error("Query error");

const removePokemonCards = () => {
  numberOfCardsDisplayed = 0;
  cardContainer.innerHTML = "";
};
const resetPokemonCards = () => {
  pokemonArray.forEach((pokemon) => {
    addPokemonCard(pokemon);
  });
};

const addPokemonCard = (pokemon: Pokemon) => {
  if (numberOfCardsDisplayed < maxNumberOfCards) {
    numberOfCardsDisplayed++;
    cardContainer.innerHTML += `
    <div class="card">
    <img src="${pokemon.sprite}"/>
        <div class="card__content">
            <h1 class="card__heading">${pokemon.name}</h1>
            <p class="card__text">${pokemon.name} (#${pokemon.id}) is a ${pokemon.types.join(" & ")} type pokemon.</p>
        </div>
    </div>`;
  }
};

const filterByName = (value: string) => {
  pokemonArray.forEach((pokemon) => {
    if (pokemon.name.includes(value)) addPokemonCard(pokemon);
  });
};

const filterByType = (value: string) => {
  pokemonArray.forEach((pokemon) => {
    if (pokemon.types.includes(value)) addPokemonCard(pokemon);
  });
};

const handleFilter = () => {
  const filterValue = filterInput.value;
  const filterAtrribute = filterType.value;

  removePokemonCards();

  if (filterAtrribute === "name") {
    filterByName(filterValue);
  } else if (filterAtrribute === "type") {
    filterByType(filterValue);
  } else resetPokemonCards();
};

const handleNumberFilter = () => {
  maxNumberOfCards = parseInt(numberOfResultsInput.value, 10);
  if(!maxNumberOfCards) maxNumberOfCards = 151;
  
  handleFilter();
};

filterInput.addEventListener("input", handleFilter);
numberOfResultsInput.addEventListener("input", handleNumberFilter);

resetPokemonCards();
