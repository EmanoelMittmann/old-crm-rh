import React, { useState, useEffect } from "react";
import { LocalStorageKeys } from "../../../settings/LocalStorageKeys";
import { userTypes } from "../../../models/userTypes";

import { Nav, ActiveIconContainer, ActiveIcon } from "./style.js";
import { userAccess } from "./Modules/acessUser";

const NavHome = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const { permissions } = JSON.parse(localStorage.getItem("@UbiRH/USER"));

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(LocalStorageKeys.USER));
    if (user.user_type_id === userTypes.ADMIN) {
      return setIsAdmin(true);
    }
    return;
  }, [isAdmin]);

  return (
    <Nav>
      {permissions.map((item1) =>
        userAccess
          .filter((item) => item.hasOwnProperty(item1))
          .map((item) => item[item1])
      )}
    </Nav>
  );
};

export default NavHome;
