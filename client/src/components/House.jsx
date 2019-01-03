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
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal () {
    this.props.toggleModal();
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
          toggleModal={this.props.toggleModal}
          toggleCreateList={this.props.toggleCreateList}
          addFavoriteList={this.props.addFavoriteList}
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

