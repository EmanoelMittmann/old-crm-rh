import React from "react";
import {
  ContainerButtons,
  ContainerButtonsHeader,
  ContainerIconModal,
  TitleOS,
} from "../SelectorNewOs/style";
import api from "../../../api/api";
import { Childrens, Container, ContainerChildren, SectionFooter } from "./style";
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
import ModalCancelOs from "../../molecules/ModalCancelOS";
import { toast } from "react-toastify";
import {DefaultToast} from '../../atoms/Toast/DefaultToast'

const GenerateOS = () => {
  
  const [FirstHalfProfessional, setFirstHalfProfessional] = useState([]);
  const [LastHalfProfessional, setLastHalfProfessional] = useState([]);
  const [professionalMeta, setProfessionalMeta] = useState({});
  const [ModalProfessional, setModalProfessional] = useState([]);
  const [ModalProfessionalMeta, setModalProfessionalMeta] = useState({});
  const [order, setOrder] = useState('');
  const [ModalOs, setModalOs] = useState(false);
  const [searchResult, setSearchResult] = useState('')
  const [checkedProfissional, setCheckedProfissional] = useState([]);
  const [page, setPage] = useState(1)
  const [orderBy, setOrderBy] = useState('id')
  const Modal = useSelector((state) => state.modalVisibility);
  const dispatch = useDispatch();
  const history = useHistory()


  let params = {};
  
  const GetProfessional = async () => {
    try {
      await api({
        method: "GET",
        url: `/orderOfServicePending?limit=14&search=${searchResult}&cnpj=${searchResult}&orderField=${orderBy}&order=${order}`,
        params:params
      }).then((data) => {
        console.log(data)
        setFirstHalfProfessional(data.data.data.slice(0, 7));
        setLastHalfProfessional(data.data.data.slice(7, 14));
        setProfessionalMeta(data.data.meta);
      });
    } catch (error) {}
  };

  const handleSubmit = async (checkedProfissional) => {
    try {
      await api({
        method: "POST",
        url: `/orderOfServiceIds?limit=14&page=${page}`,
        data: checkedProfissional,
      }).then((res) => {
        setModalProfessional(res.data.data);
        setModalProfessionalMeta(res.data.meta);
        dispatch(openModal({ type: "OPENMODAL" }));
      });
    } catch (error) {}
  };

  const nextPage = () => {
    handleFilterRequest("next");
    GetProfessional();
  };

  const previousPage = () => {
    handleFilterRequest("previous");
    GetProfessional();
  };

  const sortByName = () => {
    order === "" && setOrder("desc");
    order === "asc" && setOrder("desc");
    order === "desc" && setOrder("asc");
  };

  const handleFilterRequest = (pagesFilter) => {
    if (pagesFilter === "previous")
      params.page = `${professionalMeta.current_page - 1}`;

    if (pagesFilter === "next")
      params.page = `${professionalMeta.current_page + 1}`;

    if (pagesFilter === undefined) params.page = professionalMeta.current_page;

  };


  useEffect(() => {
    GetProfessional(searchResult);
    handleFilterRequest(order);
  }, [order, orderBy, searchResult]);


  return (
    <>
      <Container>
        {Modal && (
          <ModalGenerateOs
            ModalProfessional={ModalProfessional}
            ModalProfessionalMeta={ModalProfessionalMeta}
            handleSubmit={handleSubmit}
            checkedProfissional={checkedProfissional}
            setCheckedProfissional={setCheckedProfissional}
            page={page} 
            setPage={setPage}
          />
        )}
        {ModalOs && (
          <ModalCancelOs
            text={'Tem certeza que deseja cancelar a O.S?'}
            redButtonClickHandler={() => history.push("/serviceOrders")}
            CloseButtonClickHandler={() => setModalOs((prev) => !prev)}
          />
        )}
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
            onClick={() => setModalOs((prev) => !prev)}
          >
            Cancelar
          </CancelButton>
          <BlueButton
            width="108px"
            height="40px"
            onClick={() => {
              if(checkedProfissional.length > 0){
                handleSubmit(checkedProfissional)
              }else{
                return toast.error(<DefaultToast text={'Selecione os profissionais'}/>)
              }
              }
            }
          >
            Confirmar
          </BlueButton>
        </ContainerButtons>
      </Container>
      <Container>
        <ContainerChildren>
          <Childrens>
            <div className="Header">

              <InputSearch
                value={searchResult} 
                setSearchResult={setSearchResult}
                lineWidth="18em" 
                inputWidth="15em" 
              />
              <HeaderOS sortByName={sortByName}  setOrderBy={setOrderBy}/>
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
              <HeaderOS sortByName={sortByName} setOrderBy={setOrderBy}/>
              <SectionFooter> 

              {LastHalfProfessional?.map((index) => (
                <GenerateOSItens
                  key={index.id}
                  index={index}
                  setCheckedProfissional={setCheckedProfissional}
                  checkedProfissional={checkedProfissional}
                />
              ))} 
              </SectionFooter> 
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
