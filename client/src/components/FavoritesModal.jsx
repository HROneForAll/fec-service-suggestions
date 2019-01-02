import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { ModalContent, CloseModal, ModalHeader, ModalFooter, CreateList } from './Styled_Components/modalStyling.jsx';
import ModalAddList from './ModalAddList.jsx';

class FavoritesModal extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.props.toggleModal();
  }
  render() {
    const Modal = styled.div`
			display: ${this.props.showModal ? 'block' : 'none'};
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
      <Modal>
        <ModalContent >
          <CloseModal onClick={this.toggleModal}>&#x2715;</CloseModal>
          <div>
            <ModalHeader>Save to list</ModalHeader>
            {this.props.showCreateList
              ? <ModalAddList />
              : <CreateList onClick={this.props.toggleList}>Create New List</CreateList>
            }
          </div>
        </ModalContent>  
      </Modal>
    );
  }
}

export default FavoritesModal;