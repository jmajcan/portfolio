import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I'm an experienced software developer with a demonstrated history of working in frontend development in both web and mobile development.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Java, JavaScript, HTML/CSS, Python, SQL, C#
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <ListContainer>
          <ListTitle>Frameworks/Libraries</ListTitle>
          <ListParagraph>
            React, Redux, Bootstrap, React-Native, Spring Boot, Flask, PostgreSQL, Unity
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
