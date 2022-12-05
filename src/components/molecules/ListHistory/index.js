import React from "react";
import { Status } from "../../organisms/DetailsRelease/status";
import { Badge } from "../ProfessionalsListItem/style";
import { Column, Container, Row } from "./style";

export const ListHistory = ({ data }) => {
  return (
    <>
      <Container>
        <Row>
          <Column>
            <Status data={data} />
          </Column>
          <Column>{data.env_data}</Column>
          <Column>
            <div className="popover__wrapper">
              <p className="popover__title">{data.justification}</p>
              <div className="popover__content">
                <p className="popover__message">{data.justification}</p>
              </div>
            </div>
          </Column>
        </Row>
      </Container>
    </>
  );
};
