const mongoose = require('mongoose');
// mongoose.connect('mongodb://172.17.0.2/airBNB');
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

let favoritesSchema = mongoose.Schema({
  favorites: Object
});

let Home = mongoose.model('suggestions', homeSchema);
let Favorite = mongoose.model('favorites', favoritesSchema);

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

let getFavorites = () => {
  return new Promise((resolve, reject) => {
    resolve(Favorite.find());
  });
};

let createFavoriteList = (name) => {
  let data = {
    favorites: {}
  };
  data.favorites[name] = [];
  let newFavorite = new Favorite(data);
  newFavorite.save((err, res) => {
    if (err) {
      console.log(err);
    }
  });
};

module.exports = {
  findHome,
  saveHome,
  getFavorites,
  createFavoriteList,
};
