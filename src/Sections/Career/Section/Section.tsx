import { FC, useEffect, useState } from "react";
import { Company } from "../data";
import {
  BottomInnerDiv,
  BottomWrapper,
  TechPill,
  TechWrapper,
  UpperWrapper,
} from "./styled";

const Section: FC<{ company: Company; overrideOpen: number }> = ({
  company,
  overrideOpen,
}) => {
  console.log("TESTING A", overrideOpen);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (overrideOpen > 0) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [overrideOpen]);
  const toggleSectionDetails = () => {
    setOpen(!open);
  };
  return (
    <div>
      <UpperWrapper>
        <div>
          <h3>{company.dateString}</h3>
          <h1>{company.name}</h1>
          <h1>{company.position}</h1>
        </div>
        <div>
          <button onClick={toggleSectionDetails}>Toggle</button>
        </div>
      </UpperWrapper>
      {open && (
        <BottomWrapper>
          <BottomInnerDiv>
            <p>{company.summary}</p>
            <a
              href={company.website}
              target="_blank"
              rel="noopenner noreferrer"
            >
              Visit {company.nameShort}
            </a>
          </BottomInnerDiv>
          <BottomInnerDiv>
            <TechWrapper>
              {company.technologies.map((x) => (
                <TechPill>{x}</TechPill>
              ))}
            </TechWrapper>
          </BottomInnerDiv>
        </BottomWrapper>
      )}
    </div>
  );
};

export default Section;
