import React from "react";
import { useState } from "react";
import api from "../../../api/api";
import InputSearch from "../../atoms/InputSearch";
import OrdemServiceHeader from "../../molecules/OrdemServiceListHeader";
import OrdemServiceListItem from "../../molecules/OrdemServicesListItem";
import { Container, ScrollContainer, ContainerButtons } from "./style";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BlueButton } from "../../atoms/Buttons/BlueButton/style";
import CancelButton from "../../atoms/Buttons/CancelButton/style";
import { ModalOrdemServices } from "../../molecules/ModalOrdemServices";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import modalVisibility from "../../../redux/reducers/modalVisibility";
import { openModal } from "../../../redux/actions";

const NewOrdemService = () => {
  const [searchResult, setSearchResult] = useState('');
  const [professionals, setProfessionals] = useState([]);
  const [checkedProfissional, setCheckedProfissional] = useState([]);
  const [order, setOrder] = useState("");
  const [haveCommission, setHaveCommission] = useState([]);
  const [haveCommissionMeta, setHaveCommissionMeta] = useState({});
  const Modal = useSelector((state) => state.modalVisibility)
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  const history = useHistory()

  let params = {};

  const handleFilterRequest = () => {
    if (searchResult !== '') {
      params.search = searchResult;
    }

    if (order !== "") params.order = order;
  };

  const sortByName = () => {
    order === "" && setOrder("desc");
    order === "asc" && setOrder("desc");
    order === "desc" && setOrder("asc");
  };

  const handleSubmit = async() => {
    try{
      await api({
        method: 'POST',
        url: `/findProfessionalComission?page=${page}&limit=5`,
        data: checkedProfissional,
        params:params
      }).then(res => {
        setHaveCommission(res.data.data)
        setHaveCommissionMeta(res.data.meta)
      })
    }
    catch(err){
      console.log(err)
    }
  }

  const getProfessionals = async () => {
    const { data } = await api({
      method: "get",
      url: `/professionals/?limit=20&search=${searchResult}`,
    });
    setProfessionals(data.data);
  };


  useEffect(() => {
    getProfessionals();
    handleFilterRequest();
  }, [searchResult]);

  useEffect(() => {
    handleSubmit()
  },[page])

  return (
    <>
      <ContainerButtons>
        <CancelButton margin="10px" onClick={() => history.push('/serviceOrders')}>Cancelar</CancelButton>
        <BlueButton width="10%" height="40px" onClick={() => {
          handleSubmit()
          dispatch(openModal({type: "OPENMODAL"}))
        }}>Confirmar</BlueButton>
        {Modal && <ModalOrdemServices   
          haveCommission={haveCommission} 
          setHaveCommission={setHaveCommission}
          setPage={setPage}
          page={page}
          haveCommissionMeta={haveCommissionMeta}
          setHaveCommissionMeta={setHaveCommissionMeta}
          />}
      </ContainerButtons>
      <Container>
        <InputSearch
          setSearchResult={setSearchResult}
          lineWidth="20%"
          inputWidth="12em"
        />
        <OrdemServiceHeader sortByName={sortByName} />
        <ScrollContainer>
          {professionals?.map((index) => {
            return <OrdemServiceListItem key={index.id} index={index} setCheckedProfissional={setCheckedProfissional} checkedProfissional={checkedProfissional}/>;
          })}
        </ScrollContainer>
      </Container>
    </>
  );
};

export default NewOrdemService;
