import React from 'react';
import { AddList, ListNameInput, CancelButton, CreateButton } from './Styled_Components/modalStyling.jsx';

class ModalAddList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <AddList>Name</AddList>
        <ListNameInput type="text" placeholder="Name your list"/>
        <CreateButton>Create</CreateButton>
        <CancelButton>Cancel</CancelButton>
      </div>
    );
  }
}

export default ModalAddList;