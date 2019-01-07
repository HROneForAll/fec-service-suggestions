import styled, { css, keyframes, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: white;
  }
`;

export const Container = styled.div`
  height: 90vh;
  width: 1000px;
  display: block;
  margin: 0 auto;
`;

export const Header = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  color: rgba(0, 0, 0, 0.75);
  font-size: 36px;
  letter-spacing: 0.5px;
  margin-bottom: 40px;
`;

export const HousesListCss = styled.div`
  width: 1020px;
`;

export const HousingList = styled.div`
  display: flex;
  margin-top: 1px;
`;

export const ImgContainer = styled.div`
  z-index: 0;
`;

export const HeartPicture = styled.div`
  position: relative;
  left: 190px;
	top: 50px;  
  z-index: 1;
`;

export const HouseInfo = styled.div`
  color: black;
  margin-right: 20px;
  width: 240px;
  text-decoration: none;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
`;

export const VerifiedText = styled.div`
  color: rgb(178, 32, 80);
  font-weight: bold;
  font-size: 11px;
  display: flex;
  margin: 5px 0px;
`;

export const PlusText = styled.div`
  border-radius: 3px
  background-color: rgb(178, 32, 80);
  color: white;
  padding: 1.5px 2px;
`;

export const BedText = styled.div`
  padding: 2.5px;
`;

export const HouseName = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.75);
  margin: 4px 0px;
  letter-spacing: 0.15px;
`;

export const HousePrice = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  margin: 4px 0px;
  letter-spacing: 0.15px;
`;

export const ReviewStars = styled.img`
  margin-right: 2px;
`;

export const NumberOfReviews = styled.div`
  font-size: 12px;
`;

export const ShowMoreHomes = styled.div`
  color: rgb(178, 32, 80);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  margin-top: 25px;
  cursor: pointer;
`;

export const BottomPadding = styled.div`
  height: 200px;
  width:auto;
`;