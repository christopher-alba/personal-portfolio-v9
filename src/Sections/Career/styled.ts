import styled from "styled-components";
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
  overflow-x: hidden;
  padding-bottom: 200px;
  min-height: 100vh;
`;

