const faker = require('faker');
const fs = require('fs');
const FILES_TO_GENERATE = 2;

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


  //rowsWritten is being overridden. Should be consecutive
  let rowsWritten = 0;
  let maxNumberOfRows = 5;

  //Keep track of rows to write and total max number of rows
  //csv generation
  const writeToFile = (rowsWritten, stream) => {

    let canContinueStream = stream.write(generateCsvRow());

    if (rowsWritten === maxNumberOfRows) { return; }
    if (canContinueStream) {

      console.log('Rows written: ', rowsWritten);
      writeToFile(rowsWritten + 1, stream)
    } else {
      stream.on('drain', () => {
        writeToFile(rowsWritten + 1, stream)
      });
    }
  }

  //Generates a file
  for (let i = 0; i < numberOfFiles; i++) {
    const writeStream = fs.createWriteStream(`seedFile${i}.csv`);
    writeStream.write(headers.join() + '\n');

    writeToFile(0, writeStream);
  }
}

generateReviewsCsv(FILES_TO_GENERATE);


//2 files to generate
//Makes the headers, keeps track of rowsWritten, and the max number of rows
  //Inner function takes in a number of rows 
