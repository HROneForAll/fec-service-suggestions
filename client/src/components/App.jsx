import React from 'react';
import axios from 'axios';
import HousesList from './HousesList.jsx';
import FavoritesModal from './FavoritesModal.jsx';
import { Container, Header, GlobalStyle } from './Styled_Components/styling.jsx';

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
      moreRevealed: false,
      showModal: false,
      showCreateList: false
    };
    this.toggleMoreHomes = this.toggleMoreHomes.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }
  
  componentDidMount() {
    this.getHomes(1); 
  }
  getHomes(num) {
    axios.get(`/homes/${num}/suggestions`)
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
  toggleModal () {
    this.setState({showModal: !this.state.showModal});
  }
  toggleList () {
    this.setState({showCreateList: !this.state.showCreateList});
  }

  render() {
    return (
      <Container>
        <FavoritesModal toggleModal={this.toggleModal} showModal={this.state.showModal} toggleList={this.toggleList} showCreateList={this.state.showCreateList}/>
        <Header>Other highly rated homes</Header>
        <HousesList toggleHomes={this.toggleMoreHomes} toggleModal={this.toggleModal} state={this.state}/>
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;