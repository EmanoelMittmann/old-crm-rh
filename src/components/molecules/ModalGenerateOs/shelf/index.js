import React from "react";
import { ContainerLabelProfessional, ContainerWap, IconButton } from "../style";
import { ReactComponent as Trash } from "../../../../assets/icons/trash.svg";

const Shelf = ({professional}) => {
  return (
    <ContainerWap>
      <ContainerLabelProfessional key={professional.id}>
        {professional.name}
        <IconButton onClick={() => {}}>
          <Trash />
        </IconButton>
      </ContainerLabelProfessional>
    </ContainerWap>
  );
};

export default Shelf;
