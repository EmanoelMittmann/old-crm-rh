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
import { useDispatch, useSelector } from "react-redux";
import ModalGenerateOs from "../../molecules/ModalGenerateOs";
import { openModal } from "../../../redux/actions";

const GenerateOS = () => {
  const history = useHistory();
  const [FirstHalfProfessional, setFirstHalfProfessional] = useState([]);
  const [LastHalfProfessional, setLastHalfProfessional] = useState([]);
  const [professionalMeta, setProfessionalMeta] = useState({});
  const [order, setOrder] = useState();
  const [checkedProfissional, setCheckedProfissional] = useState([]);
  const Modal = useSelector(state => state.modalVisibility)
  const dispatch = useDispatch()

  let params = {}

  const GetProfessional = async () => {
    try {
      await api({
        method: "GET",
        url: `/orderOfServicePending?limit=14&`,
        params:params
      }).then((data) => {
        setFirstHalfProfessional(data.data.data.slice(0, 7));
        setLastHalfProfessional(data.data.data.slice(7, 14));
        setProfessionalMeta(data.data.meta);
      });
    } catch (error) {}
  };

  const nextPage = () => {
    handleFilterRequest('next')
    GetProfessional()
  }

  const previousPage = () => {
    handleFilterRequest('previous')
    GetProfessional()
  }

  const sortByName = () => {
    order === "" && setOrder("asc");
    order === "asc" && setOrder("desc");
    order === "desc" && setOrder("asc");
  };

  const handleFilterRequest = (pagesFilter) => {
    if (pagesFilter === 'previous')
      params.page = `${professionalMeta.current_page - 1}`;

    if (pagesFilter === 'next') params.page = `${professionalMeta.current_page + 1}`;

    if (pagesFilter === undefined) params.page = professionalMeta.current_page;

    if (order !== '') params.order = order;
  };


  useEffect(() => {
    GetProfessional();
  }, []);
  

  return (
    <>
      <Container>
        {Modal && <ModalGenerateOs/>}
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
          <BlueButton width="108px" height="40px" onClick={() => {dispatch(openModal({type: 'OPENMODAL'}))}}>
            Confirmar
          </BlueButton>
        </ContainerButtons>
      </Container>
      <Container>
        <ContainerChildren>
          <Childrens>
            <div className="Header">
              <InputSearch lineWidth="18em" inputWidth="15em" />
              <HeaderOS sortByName={sortByName}/>
              {FirstHalfProfessional?.map((index) => (
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
              {LastHalfProfessional?.map((index) => (
                <GenerateOSItens
                  key={index.id}
                  index={index}
                  setCheckedProfissional={setCheckedProfissional}
                  checkedProfissional={checkedProfissional}
                />
              ))}
              
              <Footer 
                height="3em" 
                border="2px solid #ccc" 
                firstPage={professionalMeta.first_page}
                nextPage={() => nextPage()}
                previousPage={() => previousPage()}
                lastPage={professionalMeta.last_page}
                currentPage={professionalMeta.current_page}
                />
            </div>
          </Childrens>
        </ContainerChildren>
      </Container>
    </>
  );
};

export default GenerateOS;
