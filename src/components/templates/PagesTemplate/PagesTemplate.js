import React from 'react';
import { useHistory } from 'react-router-dom';

import DarkButton from '../../atoms/Buttons/DarkButton/style';
import {
  SectionTitle,
  SectionTitleContainer,
  SectionTitleIcon,
} from '../../atoms/PageTitle/style';

import Header from '../../organisms/Header';
import PagesContainer from '../../organisms/PagesContainer/styled';

import { Container, ContainerButtons } from './style';

export const PagesTemplate = (props) => {
  const history = useHistory(props);
  const { name, icon, hasButton, buttonText, buttonPath, isRegisterPage, secondButton, secondButtonText, secondButtonPath } =
    props.template;

  if (!isRegisterPage)
    return (
      <PagesContainer>
        <Header />
        <Container>
          <SectionTitleContainer>
            <SectionTitleIcon>{icon}</SectionTitleIcon>
            <SectionTitle>{name}</SectionTitle>
          </SectionTitleContainer>
          <ContainerButtons>
          {hasButton ? (
            <DarkButton
              onClick={() => history.push(buttonPath)}
              width="200px"
              height="42px"
              margin="0 5% 0 0"
            >
              {buttonText}
            </DarkButton>
          ) : (
            <></>
          )}
          {secondButton && (
            <DarkButton
              onClick={() => history.push(secondButtonPath)}
              width="200px"
              height="42px"
              margin="0 5% 0 0"
            >
            {secondButtonText}
            </DarkButton>
          )}
          </ContainerButtons>
        </Container>
        {props.children}
      </PagesContainer>
    );

  return (
    <PagesContainer>
      <Header />
      {props.children}
    </PagesContainer>
  );
};

export default PagesTemplate;
