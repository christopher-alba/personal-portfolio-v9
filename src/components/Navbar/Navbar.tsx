import { FC, useContext } from "react";
import { DefaultTheme, ThemeContext } from "styled-components";
import themes from "../../themes/schema.json";
import { InnerDiv, NavbarDivMain, ThemeButton } from "./styled";
import { Container } from "../container";

const Navbar: FC<{ setTheme: (defaultTheme: DefaultTheme) => void }> = ({
  setTheme,
}) => {
  const theme = useContext(ThemeContext);
  const toggleTheme = () => {
    if (theme?.name === "light") {
      localStorage.setItem("theme", JSON.stringify(themes.dark));
      setTheme(themes.dark);
    } else {
      localStorage.setItem("theme", JSON.stringify(themes.light));
      setTheme(themes.light);
    }
  };
  return (
    <NavbarDivMain>
      <Container>
        <InnerDiv>
          <ThemeButton onClick={toggleTheme}>Theme switch</ThemeButton>
        </InnerDiv>
      </Container>
    </NavbarDivMain>
  );
};

export default Navbar;
