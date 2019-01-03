import React from 'react';
import { AddList, ListNameInput, CancelButton, CreateButton } from './Styled_Components/modalStyling.jsx';

class ModalAddList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({[e.target.id]: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addFavoriteList(this.state.listName);
  }

  render() {
    return (
      <div>
        <AddList>Name</AddList>
        <ListNameInput type="text" id="listName" placeholder="Name your list" onChange={this.handleChange}/>
        <CreateButton onClick={this.handleSubmit}>Create</CreateButton>
        <CancelButton onClick={this.props.toggleCreateList}>Cancel</CancelButton>
      </div>
    );
  }
}

export default ModalAddList;