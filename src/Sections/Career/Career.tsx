import { FC } from "react";
import { DividerSVG, MainDiv } from "./styled";
import ScrollAnimation from "react-animate-on-scroll";
import { Header, SubHeader, CircleWrapper, Circle } from "../Services/styled";
import { Container } from "../../components/container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./animations.css";
const Career: FC = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#career-trigger",
        },
      })
      .fromTo(
        "#divider2",
        {
          opacity: 0,
          ease: "none",
        },
        {
          opacity: 1,
          duration: 2,
          ease: "none",
        }
      )
      .to("#divider2", {
        yoyo: true,
        scaleY: 0.9,
        scaleX: 1.1,
        repeat: -1,
        duration: 3,
      });
    gsap.from("#divider-2-mask", {
      yoyo: true,
      opacity: 0.7,
      stagger: {
        amount: 0.5,
        from: "edges",
      },
      repeat: -1,
    });
  }, []);
  return (
    <MainDiv id="career-trigger">
      <DividerSVG />
      <Container>
        <div
          style={{
            width: "fit-content",
            textAlign: "right",
            marginLeft: "auto",
          }}
        >
          <ScrollAnimation
            animateIn="bounceInRight"
            delay={1}
            animatePreScroll={false}
            animateOnce={true}
          >
            <Header>Career</Header>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="bounceInRight"
            delay={500}
            animatePreScroll={false}
            animateOnce={true}
          >
            <SubHeader>My Software Engineering History.</SubHeader>
          </ScrollAnimation>
          <CircleWrapper style={{ justifyContent: "flex-start" }}>
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
      </Container>
    </MainDiv>
  );
};

export default Career;
