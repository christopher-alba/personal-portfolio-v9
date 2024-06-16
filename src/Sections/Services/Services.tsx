import { FC, useContext } from "react";
import {
  Circle,
  CircleWrapper,
  ContentWrapper,
  DividerSVG,
  Header,
  MainDiv,
  ParagraphWrapper,
  PeopleSVG,
  PersonSVG,
  StyledButtonLeft,
  StyledButtonRight,
  SubHeader,
  Title,
} from "./styled";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Container } from "../../components/container";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { ThemeContext } from "styled-components";
const Services: FC = () => {
  const theme = useContext(ThemeContext);

  useGSAP(() => {
    gsap.timeline().fromTo(
      "#divider1",
      {
        opacity: 0,
        ease: "none",
      },
      {
        opacity: 1,
        duration: 2,
        ease: "none",
      }
    );
    gsap.from(".people", {
      opacity: 0,
      stagger: {
        amount: 1,
        from: "random",
      },
      scrollTrigger: {
        trigger: "#team",
      },
    });
    gsap.from(".person", {
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 1,
        from: "random",
      },
      scrollTrigger: {
        trigger: "#solo",
      },
    });
    gsap.from("#divider-mask-1", {
      scrollTrigger: {
        trigger: "#scrollTriggerServices",
        scrub: true,
        start: "top 100%",
        end: "bottom 100%",
      },
      opacity: 0.2,
      stagger: {
        amount: 0.5,
        from: "edges",
      },
    });
  }, []);
  return (
    <MainDiv id="scrollTriggerServices">
      <DividerSVG />
      <Container>
        <div style={{ width: "fit-content" }}>
          <ScrollAnimation
            animateIn="bounceInLeft"
            delay={1}
            animatePreScroll={false}
            animateOnce={true}
          >
            <Header>Services</Header>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="bounceInLeft"
            delay={500}
            animatePreScroll={false}
            animateOnce={true}
          >
            <SubHeader>What I can offer your business.</SubHeader>
          </ScrollAnimation>
          <CircleWrapper>
            <ScrollAnimation
              animateIn="bounceInDown"
              delay={1}
              animatePreScroll={false}
              animateOnce={true}
            >
              <Circle />
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInDown"
              delay={300}
              animatePreScroll={false}
              animateOnce={true}
            >
              <Circle />
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInDown"
              delay={600}
              animatePreScroll={false}
              animateOnce={true}
            >
              <Circle />
            </ScrollAnimation>
          </CircleWrapper>
        </div>
        <ContentWrapper>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <ParagraphWrapper id="team">
              <PeopleSVG />
              <Title>
                Working in a{" "}
                <span style={{ color: theme?.colors.tertiary1 }}>
                  software team.
                </span>
              </Title>
              <p>
                I am able to work in a full-stack environment. From traditional
                to cloud, monolith to microservices. From vanilla JavaScript,
                HTML, CSS, to fully fledged frontend frameworks like React. I
                will be an asset to your company and can contribute to your
                codebase within the first week.
              </p>
              <StyledButtonLeft
                onClick={() => {
                  window.open("./cv.pdf");
                }}
              >
                View My CV
              </StyledButtonLeft>
            </ParagraphWrapper>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <ParagraphWrapper id="solo">
              <PersonSVG />
              <Title>
                Working as a{" "}
                <span style={{ color: theme?.colors.tertiary2 }}>
                  freelancer.
                </span>
              </Title>
              <p>
                I can build simple websites on my own, freelance if needed. I
                will handle everything from design, construction, deployment,
                and getting your website on Google. Simple websites include SPA
                marketing websites, websites with simple monolith backend
                architecture and a SPA frontend, or a vanilla HTML, JS, and CSS
                website.
              </p>
              <StyledButtonRight
                onClick={() => {
                  window.open("https://www.linkedin.com/in/christopher-alba/");
                }}
              >
                Contact Me
              </StyledButtonRight>
            </ParagraphWrapper>
          </ScrollAnimation>
        </ContentWrapper>
      </Container>
    </MainDiv>
  );
};

export default Services;
