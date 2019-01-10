const faker = require('faker');
const stringify = require('csv-stringify');
const fs = require('fs');


//Use fs.appendFileSync to iterate and append to csv everytime

const columns = {
  id: 'id',
  home_image: 'home_image',
  home_thumbnail_img: 'home_thumbnail_img',
  home_beds: 'home_beds',
  location: 'location',
  house_name: 'house_name',
  house_price: 'house_price',
  reviews: 'reviews',
}
const data = [];

for (let i = 0; i < 100; i++) {
  data.push([
    faker.random.number({
      'min': 0,
      'max': 50,
    }),
    faker.image.imageUrl(),
    faker.image.cats(),
    faker.random.number({ 'min': 0, 'max': 4 }),
    faker.address.city() + ', ' + faker.address.stateAbbr() + ', ' + faker.address.country(),
    faker.lorem.words((5)),
    faker.commerce.price(),
    faker.random.number({
      'min': 1,
      'max': 500
    })
  ]);
}

stringify(data, { header: true, columns: columns }, (err, results) => {
  if (err) {
    throw err;
  } else {
    fs.writeFile('sample.csv', results, 'utf8', (err) => {
      if (err) {
        throw err;
      } else {
        console.log('csv file saved');
      }
    });
  }
})


