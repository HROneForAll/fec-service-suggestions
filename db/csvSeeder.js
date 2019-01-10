const faker = require('faker');
const fs = require('fs');

const headers = ['id', 'home_image', 'home_thumbnail_img', 'home_beds', 'city',
  'state', 'country', 'house_name', 'house_price', 'reviews'];

for (let i = 0; i < 2; i++) {
  //Using var to bypass block-level scoping let provides
  var writeStream = fs.createWriteStream(`seedFile${i}.csv`);
  writeStream.write(headers.join(',') + '\n');

  for (var j = 1; j < 500000; j++) {
    let row = [];
    row.push(
      faker.random.number({ 'min': 0, 'max': 50 }),
      faker.image.imageUrl(),
      faker.image.cats(),
      faker.random.number({ 'min': 0, 'max': 4 }),
      faker.address.city(),
      faker.address.stateAbbr(),
      faker.address.country(),
      faker.lorem.words((5)),
      faker.commerce.price(),
      faker.random.number({ 'min': 1, 'max': 500 })
    )
    writeStream.write(row.join(',') + '\n');
  }
}
writeStream.on('error', (err) => {
  throw new (err);
})



