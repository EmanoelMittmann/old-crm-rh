import React from "react";
import { Badge } from "../../../molecules/ProfessionalsListItem/style";

export const Status = ({ data }) => {
  return (
    <>
      {data.status.id === 1 | data.status_id === 1 ? (
        <Badge bg="#FFAE0026" color="#FFAE00" width="200px">
          {data.status.name || data.status}
        </Badge>
      ) : data.status.id === 2 | data.status_id === 2 ? (
        <Badge bg="#FFAE0026" color="#FFAE00" width="200px">
          {data.status.name || data.status}
        </Badge>
      ) : data.status.id === 3 | data.status_id === 3 ? (
        <Badge bg="#0066FF26" color="#0066FF" width="200px">
          {data.status.name || data.status}
        </Badge>
      ) : data.status.id === 4| data.status_id === 4 ? (
        <Badge bg="#1ECB4F26" color="#1ECB4F" width="200px">
          {data.status.name|| data.status}
        </Badge>
      ) : data.status.id === 5 | data.status_id === 5 ? (
        <Badge bg="#1ECB4F" color="#FFF" width="200px">
          {data.status.name || data.status}
        </Badge>
      ) : data.status.id === 6 | data.status_id === 6 ? (
        <Badge bg="#FF354126" color="#FF3541" width="200px">
          {data.status.name || data.status}
        </Badge>
      ) : (
        ""
      )}
    </>
  );
};
