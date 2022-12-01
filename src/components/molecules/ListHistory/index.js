import React from "react";
import { Badge } from "../ProfessionalsListItem/style";
import { Container, Row } from "./style";

export const ListHistory = () => {
  return (
    <>
      <Container>
        <Row>
          <div className="col">
            <Badge bg="#FF354126" color="#FF3541" width="20em" h="2em">
              Negado
            </Badge>
          </div>
          <div className="col">
            <p4>12/12/2001</p4>
          </div>
          <div className="col">
            <p2 className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis sem non purus efficitur, nec vehicula nisl malesuada. Suspendisse urna massa, bibendum ac lacus sit amet, facilisis scelerisque felis.</p2>
          </div>
        </Row>
        <Row>
          <div className="col">
            <Badge bg="#FF354126" color="#FF3541" width="20em" h="2em">
              Negado
            </Badge>
          </div>
          <div className="col">
            <p4>12/12/2001</p4>
          </div>
          <div className="col">
            <p2 className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis sem non purus efficitur, nec vehicula nisl malesuada. Suspendisse urna massa, bibendum ac lacus sit amet, facilisis scelerisque felis.</p2>
          </div>
        </Row>
        <Row>
          <div className="col">
            <Badge bg="#FF354126" color="#FF3541" width="20em" h="2em">
              Negado
            </Badge>
          </div>
          <div className="col">
            <p4>12/12/2001</p4>
          </div>
          <div className="col">
            <p2 className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis sem non purus efficitur, nec vehicula nisl malesuada. Suspendisse urna massa, bibendum ac lacus sit amet, facilisis scelerisque felis.</p2>
          </div>
        </Row>
      </Container>
    </>
  );
};
