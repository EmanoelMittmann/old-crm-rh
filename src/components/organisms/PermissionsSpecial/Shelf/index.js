import React from "react";
import { SelectsItens } from "../style";

const Shelf = ({ data }) => {
  return (
    <>
      <SelectsItens>
        <input type="checkbox" name={data.module_name} value={data.id}/>
        <p>{data.modulo_name}</p>
      </SelectsItens>
    </>
  );
};

export default Shelf;
