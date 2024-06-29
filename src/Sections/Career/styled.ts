import styled, { css } from "styled-components";
import Divider from "../../svg/base/divider2.svg?react";

export const DividerSVG = styled(Divider)`
  width: 100%;
  height: fit-content;
  color: ${({ theme }) => theme.colors.tertiary2};
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
  overflow: hidden;
  padding-bottom: 200px;
`;

export const CompaniesWrapper = styled.div`
  margin-top: 20%;
`;

const visibilityCss = css`
  padding: 10px 40px;
  border: none;
  margin-right: 10px;
  border-radius:5px;
  cursor: pointer;
`;
export const ViewAllButton = styled.button`
  ${visibilityCss}
  background: ${({theme}) => theme.colors.tertiary2};
  color: ${({theme}) => theme.colors.secondary1};  
`;
export const HideAllButton = styled.button`
  ${visibilityCss}
  background: ${({theme}) => theme.colors.secondary1};
  color: ${({theme}) => theme.colors.primary1}; 
`;
