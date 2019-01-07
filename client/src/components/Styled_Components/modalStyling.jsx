import styled, { css, keyframes } from 'styled-components';

export const Modal = styled.div`
  display: ${props => props.houseState.showModal ? 'block' : 'none'};
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  cursor: default;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(250, 250, 250, 0.8);
`;

export const ModalContent = styled.div`
  background-color: rgb(255,255,255);
  position: relative;
  margin: 50px auto;
  height: 610px;
  width: 565px;
  font-family: Arial, sans-serif;
  overflow: auto;
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);
`;

export const CloseModal = styled.span`
  display: inline-block;
  margin: 22px;
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
  margin-bottom: 25px;
  margin-left: 25px;
  letter-spacing: 0.0.5px;
`;

export const CreateList = styled.div`
  color: rgb(178, 32, 80);
  font-size: 16px;
  width: 125px;
  margin-left: 25px;
  margin-top: 40px;
  margin-bottom: 25px;
  font-weight: bold;
  cursor: pointer;
  &:hover{
  	text-decoration: underline;
  }
`;

export const AddList = styled.div`
  font-size: 16px;
  margin-left: 25px;
  margin-top: 40px;
`;

export const ListNameInput = styled.input`
  height: 38px;
  width: 90%;
  font-size: 16px;
  margin-left: 20px;
  margin-top: 20px;
  padding-left: 10px;
  border: 1px solid rgb(178, 32, 80);
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

export const CancelButton = styled.button`
  border: 2px solid rgb(178, 32, 80);
  color: rgb(178, 32, 80);
  border-radius: 5px;
  height: 50px;
  width: 100px;
  font-size: 16px;
  font-weight: bold;
  margin-left: 325px;
  cursor: pointer;
`;

export const CreateButton = styled.button`
  background-color: rgb(178, 32, 80);
  color: white;
  border-radius: 5px;
  height: 50px;
  width: 100px;
  font-size: 16px;
  font-weight: bold;
  margin: 15px 10px;
  cursor: pointer;
`;

export const FavoriteListName = styled.div`
  width: 500px;
  cursor: pointer;
  margin-left: 25px;
  padding: 25px 0px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.60);
  border-top: 1px solid lightgrey;
`;

export const ModalFooter = styled.div`
  box-shadow: 0px -4px 10px rgba(50, 50, 50, 0.3);
  position: absolute;
  bottom: 0;
  height: 130px;
  width: 565px;
  background-color: rgb(255,255,255);
`;

export const FooterImg = styled.img`
  margin-left: 30px;
  margin-top: 28px;
  float: left;
`;

export const HouseNameFooter = styled.div`
  font-weight: bold;
  font-size: 16px;
  position: relative;
  margin-top: 28px;
  left: 15px;
  color: rgba(0, 0, 0, 0.6)
`;

export const HouseLocationFooter = styled.div`
  font-size: 15px;
  position: relative;
  left: 15px;
  margin: 8px 0px;
  color: rgba(0, 0, 0, 0.5)
`;

export const StarsImgFooter = styled.img`
  position: relative;
  display: inline-block;
  float: left;
  left: 12px;
`;

export const ReviewsTextFooter = styled.div`
  font-size: 13px;
  display: inline-block;
  float: left;
  position: relative;
  font-weight: bold;
  left: 12px;
  margin-top: 4px;
`;

export const ListHeart = styled.img`
  float: right;
  clear: right;
  margin-top: -4px;
`;
