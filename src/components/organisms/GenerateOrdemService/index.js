import React from "react";
import {
  ContainerButtons,
  ContainerButtonsHeader,
  ContainerIconModal,
  TitleOS,
} from "../SelectorNewOs/style";
import api from "../../../api/api";
import { Childrens, Container, ContainerChildren } from "./style";
import { useHistory } from "react-router-dom";
import { ReactComponent as ArrowBackNew } from "../../../assets/icons/arrowBackNew.svg";
import CancelButton from "../../atoms/Buttons/CancelButton/style";
import { BlueButton } from "../../atoms/Buttons/BlueButton/style";
import HeaderOS from "../../molecules/HeaderOS";
import InputSearch from "../../atoms/InputSearch";
import GenerateOSItens from "../../molecules/GenerateOSItens";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../../organisms/Footer";
import { useMemo } from "react";

const GenerateOS = () => {
  const history = useHistory();
  const [FirstHalfProfessional, setFirstHalfProfessional] = useState([]);
  const [LastHalfProfessional, setLastHalfProfessional] = useState([]);
  const [professionalMeta, setProfessionalMeta] = useState({});
  const [order, setOrder] = useState();
  const [checkedProfissional, setCheckedProfissional] = useState([]);

  const GetProfessional = async () => {
    try {
      await api({
        method: "GET",
        url: "/orderOfService?limit=14",
      }).then((data) => {
        setFirstHalfProfessional(data.data.data.slice(0, 7));
        setLastHalfProfessional(data.data.data.slice(7, 14));
        setProfessionalMeta(data.data.meta);
      });
    } catch (error) {}
  };

  const sortByName = () => {
    order === "" && setOrder("asc");
    order === "asc" && setOrder("desc");
    order === "desc" && setOrder("asc");
  };

  useEffect(() => {
    GetProfessional();
  }, []);

  return (
    <>
      <Container>
        <ContainerButtonsHeader>
          <ContainerIconModal>
            <ArrowBackNew
              onClick={() => {
                history.push("/serviceOrders");
              }}
            />
          </ContainerIconModal>
          <TitleOS>Gerar O.S</TitleOS>
        </ContainerButtonsHeader>
        <ContainerButtons bottom="1.5em">
          <CancelButton
            margin="10px"
            onClick={() => {
              history.push("/serviceOrders");
            }}
          >
            Cancelar
          </CancelButton>
          <BlueButton width="108px" height="40px" onClick={() => {}}>
            Confirmar
          </BlueButton>
        </ContainerButtons>
      </Container>
      <Container>
        <ContainerChildren>
          <Childrens>
            <div className="Header">
              <InputSearch lineWidth="18em" inputWidth="15em" />
              <HeaderOS />
              {FirstHalfProfessional.map((index) => (
                <GenerateOSItens
                  key={index.id}
                  index={index}
                  setCheckedProfissional={setCheckedProfissional}
                  checkedProfissional={checkedProfissional}
                />
              ))}
            </div>
          </Childrens>
          <Childrens>
            <div className="continuation">
              <HeaderOS sortByName={sortByName} />
              {LastHalfProfessional.map((index) => (
                <GenerateOSItens
                  key={index.id}
                  index={index}
                  setCheckedProfissional={setCheckedProfissional}
                  checkedProfissional={checkedProfissional}
                />
              ))}
              <Footer height="3em" border="2px solid #ccc" />
            </div>
          </Childrens>
        </ContainerChildren>
      </Container>
    </>
  );
};

export default GenerateOS;
