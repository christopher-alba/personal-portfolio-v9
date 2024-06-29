import { FC, useEffect, useState, useRef, useContext } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Company } from "../data";
import {
  BottomInnerDiv,
  BottomWrapper,
  CompanyHeading,
  CompanyLink,
  DateHeading,
  MainWrapper,
  PositionHeading,
  TechPill,
  TechWrapper,
  ToggleButton,
  UpperWrapper,
} from "./styled";
import { ThemeContext } from "styled-components";

const Section: FC<{ company: Company; overrideOpen: number }> = ({
  company,
  overrideOpen,
}) => {
  const [open, setOpen] = useState(false);
  const bottomWrapperRef = useRef(null);
  const iconRef = useRef(null);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (overrideOpen > 0) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [overrideOpen]);

  useEffect(() => {
    if (open) {
      gsap.to(bottomWrapperRef.current, {
        height: "auto",
        duration: 0.5,
        opacity: 1,
        ease: "power2.inOut",
      });
      gsap.to(iconRef.current, {
        rotation: 180,
        duration: 0.5,
        background: theme?.colors.tertiary1,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(bottomWrapperRef.current, {
        height: 0,
        duration: 0.5,
        opacity: 0,
        ease: "power2.inOut",
      });
      gsap.to(iconRef.current, {
        rotation: 0,
        duration: 0.5,
        background: theme?.colors.tertiary2,
        ease: "power2.inOut",
      });
    }
  }, [open]);

  const toggleSectionDetails = () => {
    setOpen(!open);
  };

  return (
    <MainWrapper onClick={toggleSectionDetails}>
      <UpperWrapper>
        <div>
          <DateHeading>{company.dateString}</DateHeading>
          <CompanyHeading>{company.name}</CompanyHeading>
          <PositionHeading>{company.position}</PositionHeading>
        </div>
        <div>
          <ToggleButton onClick={toggleSectionDetails} ref={iconRef}>
            <FontAwesomeIcon icon={faChevronDown} />
          </ToggleButton>
        </div>
      </UpperWrapper>
      <BottomWrapper ref={bottomWrapperRef}>
        <BottomInnerDiv>
          <p>{company.summary}</p>
          <CompanyLink href={company.website} target="_blank" rel="noopener noreferrer">
            Visit {company.nameShort}
          </CompanyLink>
        </BottomInnerDiv>
        <BottomInnerDiv>
          <TechWrapper>
            {company.technologies.map((x) => (
              <TechPill key={x}>{x}</TechPill>
            ))}
          </TechWrapper>
        </BottomInnerDiv>
      </BottomWrapper>
    </MainWrapper>
  );
};

export default Section;
