import styled, { keyframes } from "styled-components";
import Laptop from "../../svg/components/Laptop";
import { Container } from "../../components/container";
import Screens from "../../svg/components/Screens";
import CeilingLight from "../../svg/components/CeilingLight";
import ButtonLeft from "../../components/buttons";

export const MainDiv = styled.div`
  height: calc(100vh - 130px);
  box-sizing: border-box;
  @media (max-width: 700px) {
    height: 95vh;
  }
`;

export const ContainerStyled = styled(Container)`
  position: relative;
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const ContentWrapper = styled.div`
  width: 500px;
  box-sizing: border-box;
  height: calc(100vh - 130px);
  position: relative;
  padding: 20px;
  z-index: 10;
  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const SVGWrapper = styled.div`
  position: relative;
  height: calc(100vh - 130px);
  box-sizing: border-box;
  width: 100%;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const StyledScreensSVG = styled(Screens)`
  height: 400px;
  position: absolute;
  bottom: 150px;
  right: 0;
  z-index: 0;
  transition: 500ms;
  @media (max-width: 1640px) {
    height: 350px;
  }
  @media (max-width: 1300px) {
    bottom: 25px;
    height: 300px;
  }

  @media (max-width: 620px) {
    display: none;
  }
`;

export const StyledLaptopSVG = styled(Laptop)`
  height: 200px;
  position: absolute;
  bottom: 100px;
  right: 300px;
  z-index: 5;
  transition: 500ms;

  &:hover {
    transform: scale(1.5) !important;
    ~ ${StyledScreensSVG} {
      transform: scale(1.2) !important;
    }
  }

  @media (max-width: 1640px) {
    height: 170px;
  }

  @media (max-width: 1300px) {
    height: 130px;
    bottom: 0px;
  }

  @media (max-width: 620px) {
    display: none;
  }
`;

// Define keyframes for the initial descent
const initialDescent = keyframes`
  from {
    top: -500px;
  }
  to {
    top:  -300px;
  }
`;

export const StyledLightSVG = styled(CeilingLight)`
  width: 700px;
  position: absolute;
  top: -200px; // Starting position
  right: 0px;
  z-index: 3;
  transition: 500ms;

  // Sequence the animations: initial descent followed by continuous up-and-down
  animation: ${initialDescent} 3s ease-out forwards;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1640px) {
    width: 600px;
    top: -300px;
    right: 100px;
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const HeroHeading = styled.h1`
  font-size: 5rem;
  white-space: nowrap;
  font-weight: 900;
  margin-bottom: 1rem;
  @media (max-width: 1000px) {
    font-size: 3rem;
  }
  @media (max-width: 700px) {
    font-size: 2rem;
    white-space: pre-wrap;
  }
`;

export const SubHeading = styled.h2`
  font-size: 2rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.tertiary1};
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const Heading = styled.h3`
  font-size: 2rem;
  margin: 0;
  font-weight: 200;
  margin-bottom: 50px;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
  @media (max-width: 620px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const OfferButton = styled(ButtonLeft)`
  margin-top: 50px;
  width: 50%;
  @media (max-width: 620px) {
    width: 100%;
    margin-top: 10px;
  }
`;