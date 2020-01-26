export default () => {

  const fetchUrl = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=4d46429eee763362f21b987f0e5f594a&hash=b9cc6de99e12cc463c64a0fee68e69bc';

  return fetch(fetchUrl)
    .then(response => response.json())
    .then(responseData => responseData.data.results)
    .catch(error => {
      console.log(error);
    });
}