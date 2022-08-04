import React, { useEffect } from 'react';
import Header from '../../organisms/Header';
import {
  SectionTitle,
  SectionTitleIcon,
  SectionTitleContainer,
} from '../../atoms/PageTitle/style.js';
import { ReactComponent as HomeIcon } from '../../../assets/icons/home.svg';

const Home = () => {
  useEffect(() => {
    //    console.log(JSON.parse(localStorage.getItem('token')));
  }, []);

  return (
    <>
      {/* Renderização duplicada... olhar novamente mais tarde */}
      {/* <Header />
      <SectionTitleContainer>
        <SectionTitleIcon>
          <HomeIcon />
        </SectionTitleIcon>
        <SectionTitle>Início</SectionTitle>
      </SectionTitleContainer> */}
    </>
  );
};

export default Home;
