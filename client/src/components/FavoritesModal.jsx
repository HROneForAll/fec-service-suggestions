import React from 'react';
import ModalAddList from './ModalAddList.jsx';
import styled, { css } from 'styled-components';
import { 
  Modal, ModalContent, CloseModal, ModalHeader, CreateList, 
  FavoriteListName, ListHeart, ModalFooter, HouseNameFooter, 
  FooterImg, HouseLocationFooter, StarsImgFooter, ReviewsTextFooter } from './Styled_Components/modalStyling.jsx';

class FavoritesModal extends React.Component {
  constructor(props) {
    super(props);
    this.clickOutside = this.clickOutside.bind(this);
    this.checkIfFavorite = this.checkIfFavorite.bind(this);
    this.addHomeToList = this.addHomeToList.bind(this);
    this.removeHomeFromList = this.removeHomeFromList.bind(this);
  }

  clickOutside(e) {
    if (e.target.id === 'modal') {
      this.props.toggleModal();
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
  addHomeToList(e) {
    this.props.addToFavorited(e.target.id, e.target.getAttribute('name'));
  }

  removeHomeFromList(e) {
    this.props.removeFromFavorited(e.target.id, e.target.getAttribute('name'));
  }

  render() {
    return (
      <Modal id="modal" houseState={this.props.houseState} onClick={this.clickOutside}>
        <ModalContent >
          <CloseModal onClick={this.props.toggleModal}>&#x2715;</CloseModal>
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
                <div key={i}>
                  {this.checkIfFavorite(list, i)
                    ? <FavoriteListName id={Object.keys(list)[0]} name={this.props.house.houseName} onClick={this.removeHomeFromList}>
                      {Object.keys(list)[0]}<ListHeart id={Object.keys(list)[0]} name={this.props.house.houseName} onClick={this.removeHomeFromList} src="https://s3-us-west-1.amazonaws.com/picturesfec1/RedListHeart.png"/>
                    </FavoriteListName>
                    : <FavoriteListName id={Object.keys(list)[0]} name={this.props.house.houseName} onClick={this.addHomeToList}>
                      {Object.keys(list)[0]}<ListHeart id={Object.keys(list)[0]} name={this.props.house.houseName} onClick={this.addHomeToList} src="https://s3-us-west-1.amazonaws.com/picturesfec1/ListHeart.png"/>
                    </FavoriteListName>
                  }  
                </div>
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