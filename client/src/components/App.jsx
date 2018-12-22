import React from 'react';
import axios from 'axios';
import HousesList from './HousesList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [{id: 100,
        suggestions:
          [{ suggestionId: 1,
            houseImg: 'http://lorempixel.com/240/160/city/100',
            houseBeds: 'VERIFIED - 2 BEDS',
            houseName: 'Corrupti Facere Facere',
            housePrice: '$257 per night',
            houseStars: 2,
            reviewCount: 257 
          }]
      }],
      moreRevealed: false
    };
    this.toggleMoreHomes = this.toggleMoreHomes.bind(this);
  }
  
  componentDidMount() {
    this.getHomes(); 
  }
  getHomes() {
    axios.get('/suggestions')
      .then((data) => {
        this.setState({houses: data.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }
  toggleMoreHomes() {
    this.setState({moreRevealed: !this.state.moreRevealed});
  }
  render() {
    return (
      <div>
        <h1>Other highly rated homes</h1>
        <HousesList toggle={this.toggleMoreHomes} state={this.state}/>
      </div>
    );
  }
}

export default App;