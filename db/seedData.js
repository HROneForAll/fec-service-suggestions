const db = require('./index.js');
var faker = require('faker');

const homes = [];

var capitalizeFirstLetter = function(string) {
  var split = string.split(' ').map((item) => {
    return item[0].toUpperCase() + item.substr(1);
  });
  return split.join(' ');
};
var numberOfBeds = function(number) {
  resultStr = 'VERIFIED • ' + number;
  number === 1 ? resultStr += ' BED' : resultStr += ' BEDS';
  return resultStr;
};
for (var i = 1; i < 101; i++) {
  homes.push({
    id: i,
    suggestions: []
  });
  for (var j = 0; j < Math.floor(Math.random() * 100) + 12; j++) {
    homes[i - 1].suggestions.push({
      suggestionId: j + 1,
      houseImg: `http://lorempixel.com/240/160/city/${j}`,
      houseBeds: numberOfBeds(faker.random.number({
        'min': 1, 
        'max': 4
      })),
      houseName: capitalizeFirstLetter(faker.lorem.words(3)),
      housePrice: `$${faker.commerce.price(75, 1000, 0)} per night`,
      houseStars: faker.random.number({
        'min': 1,
        'max': 5
      }),
      reviewCount: faker.random.number({
        'min': 1,
        'max': 500
      })
    });
  }
}


homes.forEach((home) => {
  db.saveHome(home);
});