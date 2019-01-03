import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { ModalContent, CloseModal, ModalHeader, ModalFooter, CreateList, FavoriteListName } from './Styled_Components/modalStyling.jsx';
import ModalAddList from './ModalAddList.jsx';

class FavoritesModal extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.clickOutside = this.clickOutside.bind(this);
  }
  toggleModal() {
    this.props.toggleModal();
  }
  clickOutside(e) {
    if (e.target.id === 'modal') {
      this.props.toggleModal();
    }
  }
  render() {
    const Modal = styled.div`
			display: ${this.props.state.showModal ? 'block' : 'none'};
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
            {this.props.state.showCreateList
              ? <ModalAddList toggleCreateList={this.props.toggleCreateList} addFavoriteList={this.props.addFavoriteList}/>
              : <CreateList onClick={this.props.toggleCreateList}>Create New List</CreateList>
            }
            {this.props.state.favoritesList.map((list, i) => 
              <FavoriteListName key={i}>{list}</FavoriteListName>
            )}
              
          </div>
        </ModalContent>  
      </Modal>
    );
  }
}

export default FavoritesModal;