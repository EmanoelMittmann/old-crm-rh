import React from "react";
import { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { ContainerTr, PopOver, PopOverText, ValuesTd } from "./style";

export const RowsTable = ({ data }) => {
  const { end_date, created_at, hour_quantity, project, justification } = data;
  return (
    <>
      <ContainerTr>
        <ValuesTd w="20%" left="1em">
          {formatDate(created_at)}
        </ValuesTd>
        <ValuesTd w="20%">
          {end_date ? formatDate(end_date) : formatDate(created_at)}
        </ValuesTd>
        <ValuesTd w="15%">{hour_quantity}</ValuesTd>
        <ValuesTd w="14%">{project.name}</ValuesTd>
        <ValuesTd
          w="35%"
        >
          {justification}
        </ValuesTd>
      </ContainerTr>
    </>
  );
};
