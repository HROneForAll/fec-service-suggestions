import React from 'react';
import axios from 'axios';
import HousesList from './HousesList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
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