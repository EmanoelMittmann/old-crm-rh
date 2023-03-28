import React from "react";
import { useState } from "react";
import { SelectsItens } from "../style";
import { modulesDescription } from "../ToolTip";

const Shelf = ({ data, formik }) => {
  const { values, setFieldValue } = formik;
  const { first, second, width } = modulesDescription(data.id);

  const addPermissions = () => {
    const id = values.permissions.includes(data.id);
    if (id) {
      const index = values.permissions.indexOf(data.id);
      values.permissions.splice(index, 1);
      setFieldValue("permissions", values.permissions);
    } else {
      setFieldValue("permissions", [...values.permissions, data.id]);
    }
  };

  return (
    <>
      <SelectsItens>
        <input
          type="checkbox"
          id={"permissions"}
          name={data.module_name}
          checked={values.permissions.includes(data.id)}
          value={values.permissions}
          onClick={() => {
            addPermissions();
          }}
        />
        <p className="popover_title">{data.modulo_name}</p>
        <div className="popover_content">
          <p>{first}</p>
          <p>{second}</p>
        </div>
      </SelectsItens>
    </>
  );
};

export default Shelf;
