import React from "react";
import { ListHeaderTitle } from "../../atoms/ListHeader/style";
import {
  HeaderContainer,
  ListHeadeProject,
  ListHeadeQntHours,
  ListHeaderLaunch,
  ListHeaderProfessional,
  ListHeaderStatus,
} from "./style";
import { ReactComponent as Arrows } from "../../../assets/icons/arrows.svg";

const TechnicalLeadApproval = ({ sortByName, setOrderField }) => {
  return (
    <HeaderContainer>
      <ListHeaderProfessional>
        <ListHeaderTitle margin="3em">Profissional</ListHeaderTitle>
        <Arrows
          onClick={() => {
            sortByName() 
            setOrderField("user_name");
          }}
        />
      </ListHeaderProfessional>
      <ListHeadeQntHours>
        <ListHeaderTitle margin="3em">Quantidade de Horas</ListHeaderTitle>
        <Arrows
          onClick={() => {
            sortByName()
            setOrderField("hour_quantity");
          }}
        />
      </ListHeadeQntHours>
      <ListHeadeProject>
        <ListHeaderTitle margin="3em">Projeto</ListHeaderTitle>
        <Arrows
          onClick={() => {
            sortByName()
            setOrderField("project_id");
          }}
        />
      </ListHeadeProject>

      <ListHeaderLaunch>
        <ListHeaderTitle margin="3em">Data de lançamento</ListHeaderTitle>
        <Arrows
          onClick={() => {
            sortByName()
            setOrderField("launch_date");
          }}
        />
      </ListHeaderLaunch>

      <ListHeaderStatus>
        <ListHeaderTitle margin="3em">Status de Aprovação</ListHeaderTitle>
      </ListHeaderStatus>
    </HeaderContainer>
  );
};

export default TechnicalLeadApproval;
