const faker = require('faker');
const fs = require('fs');
const FILES_TO_GENERATE = 3;


/*          -------------------- HELPERS --------------------          */

// Helper functions are a way to help decrease faker requests for faster write speed //

const randomArrayElement = (arr) => {
  let randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}

const generateNumberBetweenRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const bedNumberGenerator = () => {
  let beds = [1, 2, 3, 4];
  return randomArrayElement(beds);
};

const stateAbbreviationGenerator = () => {
  let stateList = new Array("AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL",
    "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",
    "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MS", "MT", "NC",
    "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR",
    "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX", "UT", "VA",
    "VI", "VT", "WA", "WI", "WV", "WY");

  return randomArrayElement(stateList);
};

const generateRandomPrice = () => {
  return `${generateNumberBetweenRange(1, 2000)}.${generateNumberBetweenRange(1, 99)}`;
}

const generateLoremWords = () => {
  let wordBank = ["Lorem", "ipsum", "dolor", "sit", "amet,",
    "consectetur", "adipiscing", "elit,", "sed",
    "do", "eiusmod", "tempor", "incididunt", "ut",
    "labore", "et", "dolore", "magna", "aliqua"];

  return `${randomArrayElement(wordBank)} ${randomArrayElement(wordBank)} ${randomArrayElement(wordBank)} ${randomArrayElement(wordBank)} ${randomArrayElement(wordBank)}`
}

const generateCsvRow = () => {
  return [
    generateNumberBetweenRange(0, 50),
    faker.image.imageUrl(),
    faker.image.imageUrl(),
    bedNumberGenerator(),
    faker.address.city(),
    stateAbbreviationGenerator(),
    faker.address.country(),
    generateLoremWords(),
    generateRandomPrice(),
    generateNumberBetweenRange(1, 100),
  ].join() + '\n';
}

// -------------------- BEGIN SEED SCRIPT -------------------- //

const generateReviewsCsv = (numberOfFiles) => {
  const headers = ['id', 'home_image', 'home_thumbnail_img', 'home_beds', 'city',
    'state', 'country', 'house_name', 'house_price', 'reviews'];

  let i = 0;
  let maxNumberOfRows = 50;
  var writeStream = fs.createWriteStream(`seedFile${i}.csv`);

  const writeToFile = (stream, rowsWritten) => {

    const writeRow = () => {
      let canContinueStream = true;

      stream.write(headers.join() + '\n');
    }



    for (let j = 0; j < numberOfFiles; j++) {
      let canContinueStream = true;

      stream.write(headers.join() + '\n');
      if (rowsWritten >= maxNumberOfRows) {
        return;
      }
      //Never getting reset - always showing false
      //.write method returns true/false
      canContinueStream = stream.write(generateCsvRow());

      if (canContinueStream) {
        // console.log('Rows written: ', rowsWritten);
        writeToFile(stream, rowsWritten + 1);
      }
      i++;
    }
    if (maxNumberOfRows > 0) {
      stream.once('drain', () => {
        writeToFile(stream, rowsWritten + 1);
      })
    }
  }
  writeToFile(writeStream, 0)
}

generateReviewsCsv(FILES_TO_GENERATE);
