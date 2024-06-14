import { FC, ReactNode } from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  clip-path: polygon(0 0, 46% 0, 100% 100%, 0% 100%);
  position: absolute;
  left: 0;
  top: 0;
  width: 70%;
  height: 100%;
  background: ${({ theme }) => theme.colors.tertiary1Hover};
  z-index: -1;
  transition: 500ms;
`;

const Wrapper = styled.div`
  position: relative;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
`;

const Button = styled.button`
  width: 100%;
  margin: 10px;
  height: 50px;
  background: ${({theme}) => theme.colors.tertiary1};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  text-transform: none;
  font-weight: 700;
  transition: 500ms;
  &:hover {
    background:${({theme}) => theme.colors.tertiary1};
    ~ ${Backdrop} {
      width: 100%;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
  }
`;

const ButtonLeft: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <Wrapper className={className}>
      <Button>{children}</Button>
      <Backdrop />
    </Wrapper>
  );
};

export default ButtonLeft;
