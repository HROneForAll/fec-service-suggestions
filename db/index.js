const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airBNB');

let homeSchema = mongoose.Schema({
  id: Number,
  houseImg: String,
  houseBeds: String,
  houseName: String,
  housePrice: String,
  houseStars: Number,
  reviewCount: Number,
});

let Home = mongoose.model('suggestions', homeSchema);

let save = (obj) => {
  let newHome = new Home({
    id: obj.id,
    houseImg: obj.house_img,
    houseBeds: obj.house_beds,
    houseName: obj.house_name,
    housePrice: obj.house_price,
    houseStars: obj.house_stars,
    reviewCount: obj.review_count,
  });
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

module.exports.find = find;
module.exports.save = save;