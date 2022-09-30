import React, { useState, useEffect } from "react";
import api from "../../../api/api.js";
import CancelButton from "../../atoms/Buttons/CancelButton/style";
import CloseButton from "../../atoms/Buttons/CloseButton";
import SaveButton from "../../atoms/Buttons/SaveButton/style";
import FooterModais from "../../organisms/FooterModais";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ModalTitle,
  ModalContainerProfessional,
  ModalOverlay,
} from "../Modal/style.js";

import { ModalContainerButtons, TitleComissionProfessional } from "./style";
import Shelf from "./list/shelf.js";
import { closeModal, valueOfCommission } from "../../../redux/actions/index.js";

export const ModalOrdemServices = ({ haveCommission, setHaveCommission }) => {
  const location = useLocation();
  const [professionals, setProfessionals] = useState([]);
  const [valuesCommission, setValuesCommission] = useState([]);
  const [metaProfessional, setProfessionalMeta] = useState({});
  const [order, setOrder] = useState({ order: "", field: "" });
  const params = {};
  const dispatch = useDispatch();
  const state = useSelector(state => state.valueOfCommission)
                                                                                  
  const AddOrUpdate = (object) => {
    const findId = valuesCommission.find(item => item.id === object.id);
    if(findId){
      const newCommission = valuesCommission.filter(item => item.id !== object.id);
      setValuesCommission([...newCommission,object]);
    }else{
      setValuesCommission([...valuesCommission,object])
    }
  }

  const handleFilterRequest = (pagesFilter) => {
    if (pagesFilter === "previous")
      params.page = `${metaProfessional.current_page - 1}`;

    if (pagesFilter === "next")
      params.page = `${metaProfessional.current_page + 1}`;

    if (order.order !== "") {
      params.orderField = order.orderField;
      params.order = order.order;
    }
  };

  const nextPage = () => {
    handleFilterRequest("next");
  };

  const previousPage = () => {
    handleFilterRequest("previous");
  };

  const handleDelete = (professional) =>
    setHaveCommission(
      haveCommission.filter((item) => item.id !== professional.id)
    );

  useEffect(() => {
    location.state && setProfessionals(location.state.professionals.data);
  }, [order]);

  console.log(state);

  return (
    <div>
      <ModalContainerProfessional>
        <CloseButton
          onClick={() => dispatch(closeModal({ type: "CLOSEMODAL" }))}
        />
        <ModalTitle padding="1em">Confirmar Comissões</ModalTitle>
        <TitleComissionProfessional>
          <h6>Profissional</h6>
          <h6>Comissão</h6>
        </TitleComissionProfessional>
        {haveCommission?.map((professional) => (
          <Shelf
            key={professional.id}
            professional={professional}
            handleDelete={handleDelete}
            AddOrUpdate={AddOrUpdate}
          />
        ))}
        <FooterModais
          previousPage={previousPage}
          nextPage={nextPage}
          lastPage={metaProfessional?.last_page}
          currentPage={metaProfessional?.current_page}
          firstPage={metaProfessional?.first_page}
        />
        <ModalContainerButtons>
          <CancelButton
            margin="-5em 0 0 0"
            onClick={() => dispatch(closeModal({ type: "CLOSEMODAL" }))}
          >
            Cancelar
          </CancelButton>
          <SaveButton margin="-5em 3em 0 1.7em" onClick={() => {
            dispatch(valueOfCommission(valuesCommission))
            dispatch(closeModal({ type: "CLOSEMODAL" }))
          }}>
            Confirmar
          </SaveButton>
        </ModalContainerButtons>
      </ModalContainerProfessional>
      <ModalOverlay />
    </div>
  );
};
