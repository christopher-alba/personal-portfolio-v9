import { FC, useState } from "react";
import { CompaniesWrapper, DividerSVG, MainDiv } from "./styled";
import ScrollAnimation from "react-animate-on-scroll";
import { Header, SubHeader, CircleWrapper, Circle } from "../Services/styled";
import { Container } from "../../components/container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./animations.css";
import { data } from "./data";
import Section from "./Section/Section";

const Career: FC = () => {
  const [openAll, setOpenAll] = useState(0);
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
      );
    gsap.from("#divider-2-mask", {
      scrollTrigger: {
        trigger: "#career-trigger",
        scrub: true,
        start: "top 100%",
        end: "bottom 90%",
      },
      opacity: 0.2,
      stagger: {
        amount: 0.5,
        from: "edges",
      },
    });
  }, []);

  const showAllDetails = () => {
    setOpenAll((prev) => {
      if (prev > 0) {
        return prev + 1;
      } else {
        return 1;
      }
    });
  };

  const hideAllDetails = () => {
    setOpenAll((prev) => {
      if (prev < 0) {
        return prev - 1;
      } else {
        return -1;
      }
    });
  };

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

        <CompaniesWrapper>
          <button onClick={showAllDetails}>View All Details</button>
          <button onClick={hideAllDetails}>Hide All Details</button>
          {data.map((x, i) => (
            <Section key={i} company={x} overrideOpen={openAll} />
          ))}
        </CompaniesWrapper>
      </Container>
    </MainDiv>
  );
};

export default Career;
