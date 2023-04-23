import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Kiara's Portfolio
        </SectionTitle>
        <SectionText>
          I am primarily a MERN stack developer who is always working to expand
          my knowledge and solve problems.
        </SectionText>
        <Button onClick={() => (window.location = "https://google.com")}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
