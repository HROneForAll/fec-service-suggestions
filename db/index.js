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

let save = (obj) => {
  let newHome = new Home(obj);
  newHome.save((err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
};


let find = () => {
  return new Promise((resolve, reject) => {
    resolve(Home.find().sort({id: 1}));
  });
};

module.exports = {
  find,
  save
};
