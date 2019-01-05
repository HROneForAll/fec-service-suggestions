import React from 'react';
import axios from 'axios';
import HousesList from './HousesList.jsx';
import { Container, Header, GlobalStyle } from './Styled_Components/styling.jsx';

class Suggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [{
        id: 0,
        suggestions:[]
      }],
      moreRevealed: false,
      favoritesList: []
    };
    this.toggleMoreHomes = this.toggleMoreHomes.bind(this);
    this.addFavoriteList = this.addFavoriteList.bind(this);
    this.getFavoritesList = this.getFavoritesList.bind(this);
    this.favoriteHome = this.favoriteHome.bind(this);
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
    axios.get('/user/favorites')
      .then((data) => {
        let ListNames = [];
        data.data.forEach((list) => {
          ListNames.push(list.favorites);
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

  addFavoriteList (name) {
    axios.post('/user/favorites', {
      listName: name
    })
      .then((response) => {
        this.getFavoritesList();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  favoriteHome(text) {
    console.log('stillTesting');
  }


  render() {
    return (
      <Container>
        <Header>Other highly rated homes</Header>
        <HousesList 
          state={this.state}
          toggleHomes={this.toggleMoreHomes} 
          toggleCreateList={this.toggleCreateList}
          addFavoriteList={this.addFavoriteList}
          favoriteHome={this.favoriteHome}
        /> 
        <GlobalStyle />
      </Container>
    );
  }
}

export default Suggestions;