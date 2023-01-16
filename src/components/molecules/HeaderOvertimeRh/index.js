import React from "react";
import { ListHeaderTitle } from "../../atoms/ListHeader/style";
import { HeaderContainer, ListHeadeProject, ListHeaderLaunch, ListHeaderProfessional, ListHeaderStatus } from "../ListHeaderTechnicalLeadApproval/style";
import { ReactComponent as Arrows } from "../../../assets/icons/arrows.svg";

const HeaderOvertimeRh = ({sortByName}) => {
  return (
    <>
      <HeaderContainer>
        <ListHeaderProfessional>
          <ListHeaderTitle margin="2em">Profissional</ListHeaderTitle>
          <Arrows
            onClick={() => {
              sortByName();
            }}
          />
        </ListHeaderProfessional>

        <ListHeadeProject>
          <ListHeaderTitle margin="3em">Projeto</ListHeaderTitle>
          <Arrows
            onClick={() => {
              sortByName();
            }}
          />
        </ListHeadeProject>

        <ListHeaderLaunch>
          <ListHeaderTitle margin="3em">Data de lançamento</ListHeaderTitle>
          <Arrows
            onClick={() => {
              sortByName();
            }}
          />
        </ListHeaderLaunch>

        <ListHeaderStatus>
          <ListHeaderTitle margin="3em">Status de Aprovação</ListHeaderTitle>
        </ListHeaderStatus>
      </HeaderContainer>
    </>
  );
};

export default HeaderOvertimeRh;
