import React from 'react';
import FavoritesModal from './FavoritesModal.jsx';
import { 
  HouseInfo, ImgContainer, PlusText,
  BedText, VerifiedText, HouseName, HousePrice, 
  ReviewStars, NumberOfReviews, HeartPicture } from './Styled_Components/styling.jsx';

class House extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showListForm: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleListForm = this.toggleListForm.bind(this);
    this.checkFavorite = this.checkFavorite.bind(this);
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

  checkFavorite () {
    let isFavorite = false;
    let favList = this.props.state.favoritesList;
    for (var i = 0; i < favList.length; i++) {
      let favKey = Object.keys(favList[i])[0];
      if (favList[i][favKey] && favList[i][favKey].includes(this.props.house.houseName)) {
        isFavorite = true;
      }
    }
    return isFavorite;
  }

  render() {
    return (
      <HouseInfo >
        <ImgContainer>
          <HeartPicture>
            <img onClick={this.toggleModal} src={this.checkFavorite() 
              ? 'https://s3-us-west-1.amazonaws.com/picturesfec1/MainRedHeart.png' 
              : 'https://s3-us-west-1.amazonaws.com/picturesfec1/Heart.png'}/>
          </HeartPicture>
          <img src={this.props.house.houseImg}/>
        </ImgContainer>
        <FavoritesModal
          state={this.props.state}
          houseState={this.state}
          house={this.props.house}
          toggleModal={this.toggleModal}
          toggleListForm={this.toggleListForm}
          addFavoriteList={this.props.addFavoriteList}
          addToFavorited={this.props.addToFavorited}
          removeFromFavorited={this.props.removeFromFavorited}
        >
        </FavoritesModal>
        <VerifiedText>
          <PlusText>PLUS</PlusText>
          <BedText>{this.props.house.houseBeds}</BedText>
        </VerifiedText>
        <HouseName>{this.props.house.houseName}</HouseName>
        <HousePrice>{this.props.house.housePrice}</HousePrice>
        <NumberOfReviews>
          <ReviewStars src="https://s3-us-west-1.amazonaws.com/picturesfec1/stars.png"/>
          {this.props.house.reviewCount}
        </NumberOfReviews>
      </HouseInfo>
    );
  }
}

export default House;

