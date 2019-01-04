import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { 
  ModalContent, CloseModal, ModalHeader, ModalFooter, 
  CreateList, FavoriteListName, HouseNameFooter, ReviewsTextFooter,
  FooterImg, HouseLocationFooter, StarsImgFooter, ListHeart } from './Styled_Components/modalStyling.jsx';
import ModalAddList from './ModalAddList.jsx';

class FavoritesModal extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.clickOutside = this.clickOutside.bind(this);
    this.checkIfFavorite = this.checkIfFavorite.bind(this);
    this.addToFavorited = this.addToFavorited.bind(this);
  }
  toggleModal() {
    this.props.toggleModal();
  }

  clickOutside(e) {
    if (e.target.id === 'modal') {
      this.toggleModal();
    }
  }
  checkIfFavorite(list, i) {
    let listName = Object.keys(list)[0];


    if (this.props.state.favoritesList[i][listName] && this.props.state.favoritesList[i][listName].includes(this.props.house.houseName)) {
      return true;
    } else { 
      return false;
    }
  }
  addToFavorited() {
    this.props.addToFavorited();
  }
  render() {
    const Modal = styled.div`
			display: ${this.props.houseState.showModal ? 'block' : 'none'};
			position: fixed;
			z-index: 1;
			left: 0;
			top: 0;
			height: 100%;
			width: 100%;
			overflow: auto;
			background-color: rgba(250, 250, 250, 0.8);
    `;
    return (
      <Modal id="modal" onClick={this.clickOutside}>
        <ModalContent >
          <CloseModal onClick={this.toggleModal}>&#x2715;</CloseModal>
          <div>
            <ModalHeader>Save to list</ModalHeader>
            <div>
              {this.props.houseState.showListForm
                ? <ModalAddList toggleListForm={this.props.toggleListForm} addFavoriteList={this.props.addFavoriteList}/>
                : <CreateList onClick={this.props.toggleListForm}>Create New List</CreateList>
              }
            </div>
            <div>
              {this.props.state.favoritesList.map((list, i) => 
                <FavoriteListName key={i}>
                  {Object.keys(list)[0]}
                  {this.checkIfFavorite(list, i)
                    ? <ListHeart onClick={() => { console.log(this.props.house.reviewCount); } } src="RedListHeart.png"/>
                    : <ListHeart onClick={this.addToFavorited} src="https://s3-us-west-1.amazonaws.com/picturesfec1/ListHeart.png"/>


                  }
                  
                </FavoriteListName>
              )}
            </div>  
          </div>
          <ModalFooter>
            <FooterImg src={this.props.house.houseImgMini}/>
            <HouseNameFooter>{this.props.house.houseName}</HouseNameFooter>
            <HouseLocationFooter>{this.props.house.houseLocation}</HouseLocationFooter>
            <StarsImgFooter src="https://s3-us-west-1.amazonaws.com/picturesfec1/GreenStars.png"/>
            <ReviewsTextFooter>{this.props.house.reviewCount} reviews</ReviewsTextFooter>
          </ModalFooter>  
        </ModalContent>  
      </Modal>
    );
  }
}

export default FavoritesModal;