// comics logic

export function filterByComics(characters, min, max) {
  const result = characters.filter(character => {
    return character.comics.available >= min && character.comics.available <= max
  }
  );
  return result
}

// fetch with params

export default (name = undefined, min = undefined, max = undefined) => {

  const apiUrl = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=50&apikey=4d46429eee763362f21b987f0e5f594a&hash=b9cc6de99e12cc463c64a0fee68e69bc';


  const fetchUrl = name ? `${apiUrl}&nameStartsWith=${name}` : apiUrl;


  return fetch(fetchUrl)
    .then(response => response.json())
    .then(responseData => responseData.data.results)
    .then(results => {
      if (min !== undefined && max !== undefined) {
        return filterByComics(results, min, max)
      } else {
        return results
      }
    })

    .catch(error => {
      console.log(error);
    });
}