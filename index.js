const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else if (desc === undefined) {
    console.log('not a valid breed');
  } else {
    console.log(desc);
  }
});