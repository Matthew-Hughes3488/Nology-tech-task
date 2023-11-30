import "./styles/style.scss";
import { pokemonArray } from "./data/pokemon";

const cardContainer = document.querySelector(".card-container");
const filterType = document.querySelector("#filter") as HTMLSelectElement;
const filterInput = document.querySelector(".filter-input") as HTMLInputElement;
if (!cardContainer || !filterInput || !filterType)
  throw new Error("Query error");

const removePokemonCards = () => {
  cardContainer.innerHTML = "";
};
const resetPokemonCards = () => {
  pokemonArray.forEach((pokemon) => {
    addPokemonCard(pokemon);
  });
};

const addPokemonCard = (pokemon: Pokemon) => {
  cardContainer.innerHTML += `
    <div class="card">
    <img src="${pokemon.sprite}"/>
        <div class="card__content">
            <h1 class="card__heading">${pokemon.name}</h1>
            <p class="card__text">
            ${pokemon.name} (#${pokemon.id}) is a ${pokemon.types.join(" & ")} type pokemon.
            </p>
        </div>
    </div>`;
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

filterInput.addEventListener("input", handleFilter);

resetPokemonCards();