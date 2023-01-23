import React from "react";
import { ListHeaderTitle } from "../../atoms/ListHeader/style";
import { ReactComponent as Arrows } from "../../../assets/icons/arrows.svg";
import { HeaderContainer, ListHeadeProject, ListHeadeQntHours, ListHeaderLaunch, ListHeaderProfessional, ListHeaderStatus } from "./style";

const HeaderOvertimeRh = ({sortByName,setOrderField}) => {
  return (
    <>
      <HeaderContainer>
        <ListHeaderProfessional>
          <ListHeaderTitle margin="2em">Profissional</ListHeaderTitle>
          <Arrows
            onClick={() => {
              sortByName()
              setOrderField('user_id')            
            }}
          />
        </ListHeaderProfessional>

        <ListHeadeQntHours>
          <ListHeaderTitle margin="3em">Quantidade de Horas</ListHeaderTitle>
          <Arrows
            onClick={() => {
              sortByName()
              setOrderField('project_id')
            }}
          />
        </ListHeadeQntHours>

        <ListHeadeProject>
          <ListHeaderTitle margin="3em">Projeto</ListHeaderTitle>
          <Arrows
            onClick={() => {
              sortByName()
              setOrderField('project_id')    
            }}
          />
        </ListHeadeProject>

        <ListHeaderLaunch>
          <ListHeaderTitle margin="3em">Data de lançamento</ListHeaderTitle>
          <Arrows
            onClick={() => {
              sortByName()
              setOrderField('launch_date')    
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
