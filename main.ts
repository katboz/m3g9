type Info = {
  count: number,
  next: string | null,
  pages: number,
  prev: string | null,
}
type Character = {
  created: string,
  episode: string[],
  gender: string,
  id: number,
  image: string,
  location: {
    name: string,
    url: string,
  },
  name: string,
  origin: {
    name: string,
    url: string,
  },
  species: string,
  status: string,
  type: string,
  url: string,
}
fetch('https://rickandmortyapi.com/api/character').then((r) => r.json()).then((json:{info:Info, results:Character[] }) => {
// fetching Rick and Morty character data, I am taking name, species, gender, image and episode. The line bellow loops through every character in the json.results array.
 json.results.forEach((character: Character) => {
      console.log(`Name: ${character.name}`);
      console.log(`Species: ${character.species}`);
      console.log(`Gender: ${character.gender}`);
      console.log(`Image: ${character.image}`);
      console.log(`Episodes: ${character.episode.length}`);
    });
  });

  // for each loap I am fetching the character's characteristics.