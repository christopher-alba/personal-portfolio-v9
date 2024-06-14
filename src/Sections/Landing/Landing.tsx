import { useGSAP } from "@gsap/react";
import { FC, useContext } from "react";
import { ThemeContext } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";
import gsap from "gsap";
import {
  ContainerStyled,
  ContentWrapper,
  Heading,
  HeroHeading,
  MainDiv,
  NameSVG,
  OfferButton,
  StyledLaptopSVG,
  StyledLightSVG,
  StyledScreensSVG,
  SubHeading,
  SVGWrapper,
} from "./styled";

const Landing: FC = () => {
  const theme = useContext(ThemeContext) as DefaultTheme;
  useGSAP(() => {
    gsap
      .timeline()
      .from(
        [
          "#standUpper",
          "#standMiddle",
          "#standBottom",
          "#standRight",
          "#standLeft",
          "#standHole",
          "#standKnob"
        ],
        {
          scale: 0,
          transformOrigin: "center",
        }
      )
      .from(["#firstMonitor", "#secondMonitor"], {
        scale: 0,
        transformOrigin: "center",
      })
      .from(["#firstMonitorPowerLight", "#secondMonitorPowerLight"], {
        opacity: 0,
      })
      .to(["#firstMonitor", "#secondMonitor"], {
        fill: theme.colors.tertiary1Hover,
      })
      .from(
        [
          "#firstMonitorText",
          "#secondMonitorText",
          "#secondMonitorPicture",
          "#secondMonitorSection",
        ],
        {
          scaleX: 0,
          transformOrigin: "left",
          stagger: {
            amount: 0.2,
            from: "random",
          },
        }
      );
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

    gsap
      .timeline()
      .from(".sub-hero", {
        opacity: 0,
        duration: 1,
        stagger: 0.5,
      })
      .from(".content", {
        opacity: 0,
      });
  });
  return (
    <MainDiv>
      <ContainerStyled>
        <ContentWrapper>
          <NameSVG className="hero" />
          <SubHeading className="sub-hero">Software Engineer</SubHeading>
          <Heading className="sub-hero">@ Turners Automotive Group</Heading>
          <p className="content">
            I thrive on collaboration and teamwork, having gained valuable
            industry experience in both small and large software teams. In
            addition, my ability to quickly pick up new technologies and diving
            deep into investigations sets me apart.
          </p>
          <p className="content">
            I’m passionate about frontend development, user experience-driven
            design, and creating seamless interfaces. However, I’m equally
            comfortable working on the server side of applications — I embrace
            full stack roles. As long as the work is challenging and offers
            opportunities for growth, count me in!
          </p>
          <OfferButton className="content">What can I offer?</OfferButton>
        </ContentWrapper>
        <SVGWrapper>
          <StyledLightSVG
            lightColor={
              theme.name === "dark" ? theme.colors.tertiary2 : "lightgray"
            }
            stringColor={theme.colors.secondary1}
          />
          <StyledLaptopSVG
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
          <StyledScreensSVG
            firstMonitorColor={theme.colors.secondary1}
            firstMonitorPowerLightColor={theme.colors.tertiary1}
            firstMonitorScreenColor={theme.colors.secondary1}
            firstMonitorTextColor1={theme.colors.tertiary1}
            firstMonitorTextColor2={theme.colors.secondary1}
            secondMonitorColor={theme.colors.secondary1}
            secondMonitorPowerLightColor={theme.colors.tertiary1}
            secondMonitorImageColor1={theme.colors.tertiary1}
            secondMonitorImageColor2={theme.colors.tertiary2}
            secondMonitorScreenColor={theme.colors.secondary1}
            secondMonitorTextColor={theme.colors.secondary1}
            standBottomColor={theme.colors.secondary1}
            standMiddleColor={theme.colors.secondary1}
            standUpperColor={theme.colors.secondary1}
            standLeftColor={theme.colors.secondary2}
            standRightColor={theme.colors.secondary3}
            standHolesColor1={theme.colors.primary1}
            standHolesColor2={theme.colors.tertiary1}
            standKnobColor={theme.colors.secondary3}
          />
        </SVGWrapper>
      </ContainerStyled>
    </MainDiv>
  );
};

export default Landing;
