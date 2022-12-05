import React from "react";
import {ListHeaderContainer, ListHeaderName, ListHeaderTitle, ListHeaderEmail, ListHeaderPlace, ListHeaderStatus, ListHeaderJob, ListHeaderPhoneNumbers} from "./styles";

export const HeaderTable = () => {
  return (
    <>
     <ListHeaderContainer>
            <ListHeaderName>
                <ListHeaderTitle margin="0">Período Inicial</ListHeaderTitle>
            </ListHeaderName>

            <ListHeaderJob>
                <ListHeaderTitle margin="0">Período Final</ListHeaderTitle>
            </ListHeaderJob>

            <ListHeaderEmail>
                <ListHeaderTitle margin="0" >Hours</ListHeaderTitle>
            </ListHeaderEmail>

            <ListHeaderPhoneNumbers>
                <ListHeaderTitle margin="0">Projeto</ListHeaderTitle>
            </ListHeaderPhoneNumbers>

            <ListHeaderPlace>
                <ListHeaderTitle margin="0">Justificativa</ListHeaderTitle>
            </ListHeaderPlace>
        </ListHeaderContainer>
    </>
  );
};
