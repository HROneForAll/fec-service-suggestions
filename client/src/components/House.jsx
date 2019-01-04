import React from 'react';
import FavoritesModal from './FavoritesModal.jsx';
import { 
  HouseInfo, VerifiedText, PlusText,
  BedText, HouseName, HousePrice, 
  NumberOfReviews, ImgContainer, HeartPicture 
} from './Styled_Components/styling.jsx';

class House extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showListForm: false,
      isFavorited: {}
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleListForm = this.toggleListForm.bind(this);
    this.addToFavorited = this.addToFavorited.bind(this);
  }
  toggleModal () {
    this.setState({showModal: !this.state.showModal});
    if (this.state.showListForm === true) {
      this.setState({showListForm: !this.state.showListForm});
    }
  }
  toggleListForm() {
    this.setState({showListForm: !this.state.showListForm});
  }
  addToFavorited () {
    // let FavoritesList = this.state.isFavorited;

    // FavoritesList[key] = listName;
    // console.log(FavoritesList)

    console.log('workingOnThis');
  }
  render() {
    return (
      <HouseInfo >
        <ImgContainer>
          <HeartPicture><img onClick={this.toggleModal} src='https://s3-us-west-1.amazonaws.com/picturesfec1/Heart.png'/></HeartPicture>
          <img id='roomPic' src={this.props.house.houseImg}/>
        </ImgContainer>
        <FavoritesModal
          state={this.props.state}
          houseState={this.state}
          house={this.props.house}
          toggleModal={this.toggleModal}
          toggleListForm={this.toggleListForm}
          toggleCreateList={this.props.toggleCreateList}
          addFavoriteList={this.props.addFavoriteList}
          favoriteHome={this.props.favoriteHome}
          addToFavorited={this.addToFavorited}
        >
        </FavoritesModal>
        <VerifiedText>
          <PlusText>PLUS</PlusText>
          <BedText>{this.props.house.houseBeds}</BedText>
        </VerifiedText>
        <HouseName>{this.props.house.houseName}</HouseName>
        <HousePrice>{this.props.house.housePrice}</HousePrice>
        <NumberOfReviews>
          <img src="https://s3-us-west-1.amazonaws.com/picturesfec1/stars.png"/> {this.props.house.reviewCount}
        </NumberOfReviews>
      </HouseInfo>
    );
  }
}

export default House;

