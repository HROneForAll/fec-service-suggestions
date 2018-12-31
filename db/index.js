const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airBNB');

let homeSchema = mongoose.Schema({
  id: {
    type: Number,
    min: 1,
    max: 100,
    unique: true
  },
  suggestions: Object
});

let Home = mongoose.model('suggestions', homeSchema);

let saveHome = (obj) => {
  let newHome = new Home(obj);
  newHome.save((err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
};


let findHome = (homeID) => {
  return new Promise((resolve, reject) => {
    resolve(Home.find({id: homeID}));
  });
};

module.exports = {
  findHome,
  saveHome
};
