import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Mey Personal Portfolio
      </SectionTitle>
      <SectionText>
        A creative and self-starting software developer with a background in frontend development building stable e-health web and mobile applications.
      </SectionText>
      <Button onClick={() => window.location.href = 'mailto:jacob@majcan.ca' }>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;