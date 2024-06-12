import "./App.css";
import Laptop from "./svg/components/Laptop";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "./index.css";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import themes from "./themes/schema.json";
import { GlobalStyles } from "./themes/globalStyles";

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(
    localStorage.getItem("theme")?.length ?? -1 > 0
      ? JSON.parse(localStorage.getItem("theme") as string)
      : themes.light
  );

  const updateTheme = (themeName: string) => {
    if (themeName === "light") {
      localStorage.setItem("theme", JSON.stringify(themes.light));
      setTheme(themes.light);
    } else {
      localStorage.setItem("theme", JSON.stringify(themes.dark));
      setTheme(themes.dark);
    }
  };

  useEffect(() => {
    const localTheme: DefaultTheme | null = JSON.parse(
      localStorage.getItem("theme") ?? "{}"
    ) as DefaultTheme | null;

    if (localTheme?.name) {
      if (localTheme.name === "light") {
        if (JSON.stringify(themes.light) !== JSON.stringify(localTheme)) {
          updateTheme("light");
        }
      } else if (localTheme.name === "dark") {
        if (JSON.stringify(themes.dark) !== JSON.stringify(localTheme)) {
          updateTheme("dark");
        }
      }
    } else {
      localStorage.setItem("theme", JSON.stringify(themes.light));
      setTheme(themes.light);
    }
  }, []);

  useGSAP(() => {
    gsap
      .timeline()
      .from(["#laptopBase"], {
        scaleY: 0,
        transformOrigin: "bottom",
      })
      .from(["#laptopScreenBase", "#laptopScreenMain", ".laptopKey"], {
        scaleY: 0,
        transformOrigin: "bottom",
      })
      .from("#laptopPowerLight", {
        opacity: 0,
      })
      .to("#laptopScreenMain", {
        fill: theme.colors.tertiary1Hover,
      })
      .from("#laptopText", {
        scaleX: 0,
        transformOrigin: "left",
        stagger: {
          each: 0.1,
          from: "start",
        },
      })
      .from("#laptopBrowser", {
        scaleY: 0,
        transformOrigin: "bottom",
      })
      .from(
        [
          "#laptopBrowserHeader",
          "#laptopBrowserHeaderTextInput",
          "#laptopBrowserHeaderButton",
        ],
        {
          scaleY: 0,
          transformOrigin: "bottom",
          stagger: {
            each: 0.1,
            from: "start",
          },
        }
      )
      .from("#laptopBrowserContent", {
        scaleX: 0,
        transformOrigin: "left",
        stagger: 0.2,
      });
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Laptop
          laptopColor={theme.colors.secondary1}
          laptopScreenColor={theme.colors.secondary1}
          laptopKeysColor={theme.colors.primary1}
          laptopBrowserColor1={theme.colors.primary1}
          laptopTextColor1={theme.colors.tertiary1}
          laptopTextColor2={theme.colors.primary1}
          laptopTextColor3={theme.colors.primary2}
          laptopBrowserColor2={theme.colors.primary2}
          laptopBrowserImageColor={theme.colors.tertiary1}
          laptopPowerLightColor={theme.colors.tertiary1}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
