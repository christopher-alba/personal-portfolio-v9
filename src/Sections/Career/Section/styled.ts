import styled from "styled-components";

export const UpperWrapper = styled.div`
  display: flex;
`;

export const BottomWrapper = styled.div`
  display: flex;
`;

export const BottomInnerDiv = styled.div`
  width: 50%;
`;

export const TechWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 50px;
`;

export const TechPill = styled.div`
  padding: 5px 15px;
  background: ${({ theme }) => theme.colors.secondary1};
  color: ${({ theme }) => theme.colors.primary1};
  margin-right: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 0.8rem;
`;
