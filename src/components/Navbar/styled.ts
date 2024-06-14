import styled from "styled-components";

export const NavbarDivMain = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  margin-top: 50px;
  height: 30px;
  box-sizing: border-box;
  z-index: 1000;
  @media (max-width: 700px) {
    margin-top: 0;
  }
`;

export const InnerDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const ThemeButton = styled.button`
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.secondary1};
  color: ${({ theme }) => theme.colors.primary1};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  z-index: 1000;
  position: relative;
  @media (max-width: 700px) {
    padding: 10px 40px;
  }
`;
