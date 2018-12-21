const db = require('./index.js');
var faker = require('faker');

const homes = [];

var capitalizeFirstLetter = function(string) {
  var split = string.split(' ').map((item) => {
    return item[0].toUpperCase() + item.substr(1);
  });
  return split.join(' ');
};
for (var i = 1; i < 101; i++) {
  homes.push({
    id: i,
    suggestions: {
      houseImg: `http://lorempixel.com/260/180/city/${i}`,
      houseBeds: `VERIFIED - ${faker.random.number({'min': 1, 'max': 4})} BEDS`,
      houseName: capitalizeFirstLetter(faker.lorem.words()),
      housePrice: `$${faker.commerce.price(75, 1000, 0)} per night`,
      houseStars: faker.random.number({
        'min': 1,
        'max': 5
      }),
      reviewCount: faker.random.number({
        'min': 1,
        'max': 500
      })
    }
  });
}


homes.forEach((home) => {
  db.save(home);
});



