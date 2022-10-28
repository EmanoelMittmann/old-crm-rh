import React from "react";
import { useState } from "react";
import api from "../../../api/api";
import InputSearch from "../../atoms/InputSearch";
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
import { ReactComponent as ArrowBackNew } from "../../../assets/icons/arrowBackNew.svg";

const NewOrdemService = () => {
  const [searchResult, setSearchResult] = useState("");
  const [professionals, setProfessionals] = useState([]);
  const [checkedProfissional, setCheckedProfissional] = useState([]);
  const [order, setOrder] = useState("");
  const [newId, setNewId] = useState([]);
  const [check, setCheck] = useState(true)
  const [haveCommission, setHaveCommission] = useState([]);
  const [haveCommissionMeta, setHaveCommissionMeta] = useState({});
  const [page, setPage] = useState(1);
  const ValueCommission = useSelector((state) => state.valueOfCommission);
  const Modal = useSelector((state) => state.modalVisibility);
  const currentPage = haveCommissionMeta?.current_page
  const totalpages = Math.ceil(haveCommissionMeta?.total / 5)
  const dispatch = useDispatch();
  const history = useHistory();

  let params = {};

  const sortByName = () => {
    order === "" && setOrder("desc");
    order === "asc" && setOrder("desc");
    order === "desc" && setOrder("asc");
  };

  const handleClick = () => {
    const allIds = professionals.map((item) => item.id);

    if(check){
      setCheckedProfissional(allIds.map((item) => ({ professional_id: item})));
    }
  };


  const handleSubmit = async (data) => {
    if (checkedProfissional.length > 0) {
      try {
        await api({
          method: "POST",
          url: `/findProfessionalCommission?page=${page}&limit=5`,
          data: data,
          params: params,
        }).then((res) => {
          if (res.data.msg === "Os criada com sucesso") {
            dispatch(closeModal({ type: "CLOSEMODAL" }));
            history.push("/serviceOrders");
            dispatch(valueOfCommission([]));
            return toast.success(
              <DefaultToast text={"Os criada com sucesso"} />
            );
          } else {
            dispatch(openModal({ type: "OPENMODAL" }));
            setHaveCommission(res.data.data);
            setHaveCommissionMeta(res.data.meta);
          }
        });
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

  const getProfessionals = async () => {
    const { data } = await api({
      method: "get",
      url: `/professionals/?limit=20&search=${searchResult}`,
    });
    setProfessionals(data.data);
  };
  useEffect(() => {
    getProfessionals();
  }, [searchResult]);

  useEffect(() => {
    handleSubmit(checkedProfissional);
  }, [page]);

  useEffect(() => {
    if (haveCommission[1] === undefined && currentPage === totalpages && totalpages > 1) {
      setCheckedProfissional(newId)
      setPage(page - 1)
    }
    else if (haveCommission[1] !== undefined) {
      handleSubmit(
        newId.map((item) => ({ professional_id: item.professional_id }))
      );
      setCheckedProfissional(newId);
    } else {
      setCheckedProfissional(newId);
      dispatch(closeModal({ type: "CLOSEMODAL" }));
    }
    handleSubmit(
      newId.map((item) => ({ professional_id: item.professional_id }))
    );
    setCheckedProfissional(newId);
  }, [newId]);

  useEffect(() => {
    filteredProfessionals();
  }, [ValueCommission]);


  return (
    <>
      <ContainerButtonGeral>
        <ContainerButtonsHeader>
          <ContainerIconModal>
            <ArrowBackNew
              onClick={() => {
                history.push("/serviceOrders");
                dispatch(valueOfCommission([]));
              }}
            />
          </ContainerIconModal>
          <TitleOS>Criar nova O.S</TitleOS>
        </ContainerButtonsHeader>
        <ContainerButtons>
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
            }}
          >
            Confirmar
          </BlueButton>
          {Modal && (
            <ModalOrdemServices
              checkedProfissional={checkedProfissional}
              haveCommission={haveCommission}
              setHaveCommission={setHaveCommission}
              setPage={setPage}
              page={page}
              setCheckedProfissional={setCheckedProfissional}
              newId={newId}
              setNewId={setNewId}
              haveCommissionMeta={haveCommissionMeta}
              setHaveCommissionMeta={setHaveCommissionMeta}
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
          <div className="InputBox">
            <input
              type="checkbox"
              onClick={() => handleClick()}
              onChange={(e) => setCheck(prev => !prev)}
              className="Box"
              id="box"
            />
            <label for="box" className="Box">
              Selecionar Todos
            </label>
          </div>
        </div>
        <OrdemServiceHeader sortByName={sortByName} />
        <ScrollContainer>
          {professionals?.map((index) => {
            return (
              <OrdemServiceListItem
                professionals={professionals}
                setNewId={setNewId}
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
      </Container>
    </>
  );
};

export default NewOrdemService;