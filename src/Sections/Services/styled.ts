import styled from "styled-components";
import Divider from "../../svg/base/divider1.svg?react";
import people from "../../svg/base/people.svg?react";
import person from "../../svg/base/person.svg?react";
import { ButtonLeft, ButtonRight } from "../../components/buttons";

export const DividerSVG = styled(Divider)`
  width: 100%;
  height: fit-content;
  color: ${({ theme }) => theme.colors.tertiary1Hover};
  position: absolute;
  top: 0;
  z-index: -1;
  @media (max-width: 1200px) {
    width: 200%;
  }

  @media (max-width: 992px) {
    width: 250%;
  }

  @media (max-width: 768px) {
    width: 300%;
  }

  @media (max-width: 576px) {
    width: 350%;
  }

  @media (max-width: 400px) {
    width: 600%;
  }
`;

export const MainDiv = styled.div`
  position: relative;
  padding-top: 100px;
  overflow-x: hidden;
  padding-bottom: 200px;
`;

export const Header = styled.h1`
  font-size: 4rem;
  margin-bottom: 0;
  font-style: italic;
  @media (max-width: 1000px) {
    font-size: 3rem;
  }
  @media (max-width: 620px) {
    font-size: 2rem;
  }
`;
export const SubHeader = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary1};
  font-style: italic;
  margin-top: 0;
  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
  @media (max-width: 620px) {
    font-size: 1rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  align-items: flex-end;
`;

export const ParagraphWrapper = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`;

export const PeopleSVG = styled(people)`
  width: 70%;
  height: fit-content;
  &:hover {
    transform: scale(1.1);
  }
  transition: 500ms;
`;

export const PersonSVG = styled(person)`
  width: 70%;
  height: fit-content;
  &:hover {
    transform: scale(1.1);
  }
  transition: 500ms;
`;

export const Circle = styled.div`
  background: ${({ theme }) => theme.colors.primary1};
  height: 50px;
  width: 50px;
  border-radius: 100%;
  margin-right: 20px;
  transition: transform 500ms;
  &:hover {
    transform: scale(1.2); /* Scale up the circle on hover */
  }
  @media (max-width: 1000px) {
    margin-right: 10px;
    transform: scale(0.7);
  }
  @media (max-width: 620px) {
    margin-right: 0px;
    transform: scale(0.5);
  }
`;

export const CircleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled.h1`
  font-style: italic;
`;

export const StyledButtonLeft = styled(ButtonLeft)`
  width: 50%;
  margin-top:50px;
`;
export const StyledButtonRight = styled(ButtonRight)`
  width: 50%;
  margin-top:50px;
`;
