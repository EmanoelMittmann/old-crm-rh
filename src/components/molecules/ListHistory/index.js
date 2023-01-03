import React from "react";
import { Status } from "../../organisms/DetailsRelease/status";
import { formatDate } from "../../utils/formatDate";
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
          <Column>{formatDate(data.created_at)}</Column>
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
