import styled, { css, keyframes } from 'styled-components';

export const ModalContent = styled.div`
  background-color: rgb(250,250,250);
  margin: 50px auto;

  height: 585px;
  width: 525px;
  font-family: Arial, sans-serif;
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);
`;

export const CloseModal = styled.span`
  color: black;
  font-size: 24px;
  padding: 3px 7px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 3px rgba(0,0,0,0.4);
    border-radius: 25px;
  }
`;

export const ModalHeader = styled.header`
  color: rgba(0,0,0,0.65);
  font-size: 24px;
  font-weight: bold;
  margin: 25px 20px;
  letter-spacing: 0.2px;
`;

export const CreateList = styled.div`
  color: rgb(178, 32, 80);
  font-size: 16px;
  margin-left: 20px;
  margin-top: 40px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover{
  	text-decoration: underline;
  }
`;

export const AddList = styled.div`
  font-size: 16px;
  margin-left: 20px;
  margin-top: 40px;
`;

export const ListNameInput = styled.input`
  height: 38px;
  width: 90%;
  font-size: 16px;
  margin-left: 20px;
  margin-top: 20px;
  padding-left: 5px;
  &:hover {
    border: 1px solid rgb(178, 32, 80);
  }
`;

export const CancelButton = styled.button`
  border: 2px solid rgb(178, 32, 80);
  color: rgb(178, 32, 80);
  border-radius: 5px;
  float: right;
  height: 50px;
  width: 90px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
`;

export const CreateButton = styled.button`
  background-color: rgb(178, 32, 80);
  color: white;
  border-radius: 5px;
  float: right;
  height: 50px;
  width: 90px;
  font-size: 16px;
  font-weight: bold;
  margin: 20px 10px;
`;

export const FavoriteListName = styled.div`
  width: 440px;
  padding: 25px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.65);
  border-top: 1px solid lightgrey;
`;

export const ModalFooter = styled.div`
  box-shadow: 0px -4px 10px rgba(50, 50, 50, 0.3);
  position: fixed;
  width: 525px;
  top: 535px
`