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
      showCreateList: false,
      favoritesList: []
    };
    this.toggleMoreHomes = this.toggleMoreHomes.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleCreateList = this.toggleCreateList.bind(this);
    this.addFavoriteList = this.addFavoriteList.bind(this);
    this.getFavoritesList = this.getFavoritesList.bind(this);
  }
  
  componentDidMount() {
    this.getHomes(1); 
    this.getFavoritesList();
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
  getFavoritesList() {
    axios.get('/favorites')
      .then((data) => {
        let ListNames = [];
        data.data.forEach((list) => {
          ListNames.push(Object.keys(list.favorites));
        });
        this.setState({favoritesList: ListNames});
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
    if (this.state.showCreateList === true) {
      this.toggleCreateList();
    }
  }
  toggleCreateList () {
    this.setState({showCreateList: !this.state.showCreateList});
  }

  addFavoriteList (name) {
    axios.post('/favorites', {
      listName: name
    })
      .then(function(response) {
      })
      .catch(function(error) {
        console.log(error);
      });
    this.getFavoritesList();
  }

  render() {
    return (
      <Container>
        <FavoritesModal 
          state={this.state} 
          toggleModal={this.toggleModal} 
          toggleCreateList={this.toggleCreateList}
          addFavoriteList={this.addFavoriteList} 
        />
        <Header>Other highly rated homes</Header>
        <HousesList toggleHomes={this.toggleMoreHomes} toggleModal={this.toggleModal} state={this.state}/>
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;