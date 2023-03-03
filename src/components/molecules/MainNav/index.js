import React, { useState, useEffect } from "react";
import { LocalStorageKeys } from "../../../settings/LocalStorageKeys";
import { userTypes } from "../../../models/userTypes";

import { Nav} from "./style.js";
import { userAccess } from "./Modules/acessUser";


const NavHome = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { permissions, isTechLead } = JSON.parse(localStorage.getItem("@UbiRH/USER"));

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(LocalStorageKeys.USER));
    if (user.user_type_id === userTypes.ADMIN) {
      return setIsAdmin(true);
    }
    return;
  }, [isAdmin]);

  return (
    <Nav>
      {permissions.map((usersPermissions) =>
        userAccess(isTechLead)
          .filter((permission) => permission.hasOwnProperty(usersPermissions))
          .map((permission) => permission[usersPermissions])
      )}
    </Nav>

  );
};

export default NavHome;
