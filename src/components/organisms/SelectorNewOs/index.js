import React from "react";
import { useState } from "react";
import api from "../../../api/api";
import InputSearch from "../../atoms/InputSearch";
import useDebounce from '../../../hooks/debounce'
import OrdemServiceHeader from "../../molecules/OrdemServiceListHeader";
import OrdemServiceListItem from "../../molecules/OrdemServicesListItem";
import {
  Container,
  ScrollContainer,
  ContainerButtons,
  ContainerIconModal,
  TitleOS,
  ContainerButtonsHeader,
  ContainerButtonGeral,
  ContainerFlexLoanding,
} from "./style";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BlueButton } from "../../atoms/Buttons/BlueButton/style";
import CancelButton from "../../atoms/Buttons/CancelButton/style";
import { ModalOrdemServices } from "../../molecules/ModalOrdemServices";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { DefaultToast } from "../../atoms/Toast/DefaultToast";
import {
  closeModal,
  openModal,
  valueOfCommission,
} from "../../../redux/actions";
import ArrowRegister from "../../atoms/ArrowRegister";
import OnPrice from "../../utils/onPrice";
import { BoxLoading } from "../../atoms/LoadingCircle/style";

const NewOrdemService = () => {
  const [searchResult, setSearchResult] = useState("");
  const [professionals, setProfessionals] = useState([]);
  const [checkedProfissional, setCheckedProfissional] = useState([]);
  const [order, setOrder] = useState("");
  const [newId, setNewId] = useState([]);
  const [check, setCheck] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [idCompanie, setIdCompanie] = useState()
  const [haveCommission, setHaveCommission] = useState([]);
  const [haveCommissionMeta, setHaveCommissionMeta] = useState({});
  const [page, setPage] = useState(1);
  const ValueCommission = useSelector((state) => state.valueOfCommission);
  const Modal = useSelector((state) => state.modalVisibility);
  const currentPage = haveCommissionMeta?.current_page;
  const totalpages = Math.ceil(haveCommissionMeta?.total / 5);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  let params = {
    limit: '5',
    search: searchResult,
    order: order
  };

  const sortByName = () => {
    order === "" && setOrder("desc");
    order === "asc" && setOrder("desc");
    order === "desc" && setOrder("asc");
  };

  const selectAll = () => {
    if (check) {
      setCheckedProfissional(
        professionals.map((item) => {
          if (item.commission) {
            return { professional_id: item.id, companies_id: item.companies.id };
          } else {
            return {
              professional_id: item.id,
              commission: 0,
              companies_id: item.companies.id
            };
          }
        })
      );

    } else {
      setCheckedProfissional([]);
    }
  };

  const handleSubmit = async (dataUser) => {
    if (checkedProfissional.length > 0) {
      try {
        const { data } = await api.post(`/findProfessionalCommissionOrCreateOrderOfService`, dataUser)
        if (data.msg === "successfully generated report") {
          dispatch(closeModal({ type: "CLOSEMODAL" }));
          history.push("/serviceOrders");
          dispatch(valueOfCommission([]));
          return toast.success(
            <DefaultToast text={"Ordem de serviço gerada com sucesso!"} />
          );
        }
        dispatch(openModal({ type: "OPENMODAL" }));
        setHaveCommission(data.data);
        setHaveCommissionMeta(data.meta);

      } catch (err) { }
    }
  };

  const filteredProfessionals = () => {
    const updateProfissional = professionals.map((item) => {
      const search = ValueCommission.find((obj) => obj.id === item.id);
      if (search) {
        return { ...item, value: search.value };
      }
      return item;
    });
    setProfessionals(updateProfissional);
  };

  const deleteProfessionalWithCommission = (index) => {
    if (index) {
      delete index.value;
      const reloadProfissional = professionals.map((item) => {
        if (index.id === item.id) {
          return index;
        }
        return item;
      });
      setProfessionals(reloadProfissional);
      dispatch(
        valueOfCommission(
          ValueCommission.filter((item) => item.id !== index.id)
        )
      );
    }
  };

  const getCompanies = async () => {
    try {
      const { data } = await api.get("/companies");
      setCompanies(data.data);
    } catch (error) {
      console.error(error)
    }
  };

  const getProfessionals = async () => {
    const { data } = await api.get(`/professionals`, { params: params });
    setProfessionals(data.data.filter(person => person.professional_data !== null));
  };

  useEffect(() => {
    getProfessionals();
  }, [searchResult]);

  useEffect(() => {
    getCompanies();
  }, [])

  useEffect(() => {
    handleSubmit(checkedProfissional);
  }, [page]);

  useEffect(() => {
    if (
      haveCommission[1] === undefined &&
      currentPage === totalpages &&
      totalpages > 1
    ) {
      setCheckedProfissional(newId);
      setPage(page - 1);
    } else if (haveCommission[1] !== undefined) {
      handleSubmit(
        newId.map((item) => ({ professional_id: item.professional_id }))
      );
      setCheckedProfissional(newId);
    } else {
      setCheckedProfissional(newId);
      dispatch(closeModal({ type: "CLOSEMODAL" }));
      return;
    }
    handleSubmit(
      newId.map((item) => ({ professional_id: item.professional_id }))
    );
    setCheckedProfissional(newId);
  }, [newId]);

  useEffect(() => {
    filteredProfessionals();
  }, [ValueCommission]);


  const goBackClickHandler = () => {
    history.push("/serviceOrders");
    dispatch(valueOfCommission([]));
  };
  return (
    <>
      <ContainerButtonGeral>
        <ContainerButtonsHeader>
          <ContainerIconModal>
            <ArrowRegister clickHandler={goBackClickHandler} />
          </ContainerIconModal>
          <TitleOS>Criar nova O.S</TitleOS>
        </ContainerButtonsHeader>
        <ContainerButtons>
          <CancelButton
            width="10em"
            onClick={() => {
              selectAll();
              setCheck((prev) => !prev);
            }}
          >
            Selecionar Todos
          </CancelButton>
          <CancelButton
            margin="10px"
            onClick={() => {
              history.push("/serviceOrders");
              dispatch(valueOfCommission([]));
            }}
          >
            Cancelar
          </CancelButton>
          <BlueButton
            width="108px"
            height="40px"
            onClick={() => {
              if (checkedProfissional.length > 0) {
                handleSubmit(checkedProfissional);
              } else {
                return toast.error(
                  <DefaultToast text={"Selecione os Profissionais!"} />
                );
              }
              setIsLoading(true);
              setButtonDisabled(true);
            }}
            disabled={isLoading || buttonDisabled}
          >
            {isLoading ?
              <ContainerFlexLoanding>
                <BoxLoading width="20px" height="20px" />
              </ContainerFlexLoanding>
              :
              "Confirmar"
            }
          </BlueButton>

          {Modal && (
            <ModalOrdemServices
              checkedProfissional={checkedProfissional}
              haveCommission={haveCommission}
              setHaveCommission={setHaveCommission}
              page={page}
              setPage={setPage}
              handleSubmit={handleSubmit}
              setCheckedProfissional={setCheckedProfissional}
              newId={newId}
              setNewId={setNewId}
              haveCommissionMeta={haveCommissionMeta}
              setHaveCommissionMeta={setHaveCommissionMeta}
              setIsLoading={setIsLoading}
              setButtonDisabled={setButtonDisabled}
              buttonDisabled={buttonDisabled}
            />
          )}
        </ContainerButtons>
      </ContainerButtonGeral>

      <Container>
        <div className="header">
          <InputSearch
            value={searchResult}
            setSearchResult={setSearchResult}
            inputWidth="280px"
          />
        </div>
        <OrdemServiceHeader sortByName={sortByName} />
        <ScrollContainer>
          {professionals?.map((index) => {
            return (
              <OrdemServiceListItem
                professionals={professionals}
                companies={companies}
                idCompanie={idCompanie}
                setIdCompanie={setIdCompanie}
                key={index.id}
                index={index}
                setCheckedProfissional={setCheckedProfissional}
                checkedProfissional={checkedProfissional}
                deleteProfessionalWithCommission={
                  deleteProfessionalWithCommission
                }
              />
            );
          })}
        </ScrollContainer>
        <div>
          <OnPrice {...{ checkedProfissional, companies, professionals }} />
        </div>

      </Container>

    </>
  );
};

export default NewOrdemService;
