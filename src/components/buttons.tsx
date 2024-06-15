import { FC, ReactNode } from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  clip-path: polygon(0 0, 50% 0, 100% 100%, 0% 100%);
  position: absolute;
  left: 0;
  top: 0;
  width: 70%;
  height: 100%;
  background: ${({ theme }) => theme.colors.tertiary1Hover};
  z-index: -1;
  transition: 500ms;
`;

const BackdropInverted = styled.div`
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%);
  position: absolute;
  right: 0;
  top: 0;
  width: 70%;
  height: 100%;
  background: ${({ theme }) => theme.colors.tertiary2Hover};
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
  background: ${({ theme }) => theme.colors.tertiary1};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.secondary1};
  font-size: 1rem;
  cursor: pointer;
  text-transform: none;
  font-weight: 700;
  transition: 500ms;
  &:hover {
    ~ ${Backdrop} {
      width: 100%;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
  }
`;

const ButtonInverted = styled.button`
  width: 100%;
  margin: 10px;
  height: 50px;
  background: ${({ theme }) => theme.colors.tertiary2};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.secondary1};
  font-size: 1rem;
  cursor: pointer;
  text-transform: none;
  font-weight: 700;
  transition: 500ms;
  &:hover {
    ~ ${BackdropInverted} {
      width: 100%;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
  }
`;

export const ButtonLeft: FC<{ children: ReactNode; className?: string }> = ({
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

export const ButtonRight: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <Wrapper className={className}>
      <ButtonInverted>{children}</ButtonInverted>
      <BackdropInverted />
    </Wrapper>
  );
};
