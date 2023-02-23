import React, { forwardRef } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import SettingsOptions from "../../../atoms/icons/SettingsOptions";
import StatusActive from "../../../atoms/StatusActive";
import StatusDisabled from "../../../atoms/StatusDisabled";
import { ListItemContainer, ListItemDetails, ListItemName } from "../style";

const ModalSettings = ({ data, edit, toggle, openOptions }) => {
    const modalRef = useRef(null);
    const buttonRef = useRef(null);

    const handleOutside = (e) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        openOptions(data);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleOutside);

      return () => {
        document.removeEventListener("mousedown", handleOutside);
      };
    }, []);

    return (
      <ListItemContainer>
        <ListItemName>{data.name}</ListItemName>
        <ListItemDetails>
          {data.is_active ? <StatusActive /> : <StatusDisabled />}
          <SettingsOptions
            ref={{ modalRef, buttonRef }}
            info={data}
            editListItem={edit}
            toggleStatusOptions={toggle}
            openOptions={openOptions}
          />
        </ListItemDetails>
      </ListItemContainer>
    );
  }


export default ModalSettings;
