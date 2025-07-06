"use strict";
fetch('https://rickandmortyapi.com/api/character').then((r) => r.json()).then((json) => {
    // fetching Rick and Morty character data, I am taking name, species, gender, image and episode. The line bellow loops through every character in the json.results array.
    json.results.forEach((character) => {
        console.log(`Name: ${character.name}`);
        console.log(`Species: ${character.species}`);
        console.log(`Gender: ${character.gender}`);
        console.log(`Image: ${character.image}`);
        console.log(`Episodes: ${character.episode.length}`);
    });
});
// for each loap I am fetching the character's characteristics.
