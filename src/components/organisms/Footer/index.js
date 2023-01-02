import React, { useEffect, useState } from "react";
import {
  ContainerSettingsSectionFooter,
  PagesBackAndForth,
  ArrowContainer,
  RightArrowContainer,
  LeftArrowContainer,
  ContainerFlex,
} from "./style.js";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow.svg";

const Footer = ({
  previousPage,
  height,
  border,
  nextPage,
  currentPage = 1,
  firstPage = 1,
  lastPage = 1,
  onPrice,
}) => {



  const RightArrowClickHandler = (e) => {
    if (currentPage === lastPage) return;
    nextPage();
  };

  const LeftArrowClickHandler = (e) => {
    if (currentPage === firstPage) return;
    previousPage();
  };

  return (
    <ContainerSettingsSectionFooter height={height} border={border}>
      {onPrice ? (
        <ContainerFlex>
            Valor Total:{" "}
            {Number(onPrice.map(prop => prop.value).reduce((x,y) => x + y ,0)).toLocaleString("pt-br", {style: "currency",currency: "BRL"}) || 0}
          <div className="price">
            <PagesBackAndForth>{`${currentPage} de ${lastPage}`}</PagesBackAndForth>
            <ArrowContainer>
              <LeftArrowContainer onClick={(e) => LeftArrowClickHandler(e)}>
                <Arrow />
              </LeftArrowContainer>
              <RightArrowContainer onClick={(e) => RightArrowClickHandler(e)}>
                <Arrow />
              </RightArrowContainer>
            </ArrowContainer>
          </div>
        </ContainerFlex>
      ) : (
        <>
          <PagesBackAndForth>{`${currentPage} de ${lastPage}`}</PagesBackAndForth>
          <ArrowContainer>
            <LeftArrowContainer onClick={(e) => LeftArrowClickHandler(e)}>
              <Arrow />
            </LeftArrowContainer>
            <RightArrowContainer onClick={(e) => RightArrowClickHandler(e)}>
              <Arrow />
            </RightArrowContainer>
          </ArrowContainer>
        </>
      )}
    </ContainerSettingsSectionFooter>
  );
};

export default Footer;
