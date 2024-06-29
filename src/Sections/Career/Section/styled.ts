import styled from "styled-components";

export const UpperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const BottomInnerDiv = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const TechWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 150px;
  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 50px;
    margin-right: 0;
  }
`;

export const TechPill = styled.div`
  padding: 5px 15px;
  background: ${({ theme }) => theme.colors.secondary1};
  color: ${({ theme }) => theme.colors.primary1};
  margin-right: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 0.8rem;
  border-radius: 5px;
`;

export const DateHeading = styled.h3`
  margin: 0;
`;

export const CompanyHeading = styled.h1`
  margin: 0;
`;

export const PositionHeading = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.tertiary2};
`;

export const ToggleButton = styled.button`
  background: ${({ theme }) => theme.colors.tertiary2};
  color: ${({ theme }) => theme.colors.secondary1};
  border: none;
  padding: 10px;
  aspect-ratio: 1/1;
  height: 70px;
  width: 70px;
  font-size: 2rem;
  opacity: 0.7;
  border-radius: 50%;
  transition: 300ms;
  cursor: pointer;
`;

export const CompanyLink = styled.a`
  white-space: nowrap;
  background: ${({ theme }) => theme.colors.secondary1};
  color: ${({ theme }) => theme.colors.primary1};
  padding: 10px 50px;
  margin-top: 50px;
  display: block;
  width: fit-content;
  border-radius: 10px;
  transition: 300ms;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const MainWrapper = styled.div`
  padding: 100px 0;
  overflow: hidden;
  border-bottom: 10px solid ${({ theme }) => theme.colors.secondary1};
  cursor: pointer;
  &:hover {
    ${ToggleButton} {
      opacity: 1;
    }
  }
`;
