import React, { useState, useEffect } from "react";
import CancelButton from "../../atoms/Buttons/CancelButton/style";
import SaveButton from "../../atoms/Buttons/SaveButton/style";
import FooterModais from "../../organisms/FooterModais";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CloseButtonCircle from '../../atoms/Buttons/CloseButtonCircle'
import {
  ModalTitle,
  ModalContainerProfessional,
  ModalOverlay,
} from "../Modal/style.js";

import { ModalContainerButtons, TitleComissionProfessional } from "./style";
import Shelf from "./list/shelf.js";
import { closeModal, valueOfCommission } from "../../../redux/actions/index.js";

export const ModalOrdemServices = ({
  haveCommission,
  setHaveCommission,
  haveCommissionMeta,
  setPage,
  page,
}) => {
  const state = useSelector((state) => state.valueOfCommission);
  const location = useLocation();
  const [professionals, setProfessionals] = useState([]);
  const [valuesCommission, setValuesCommission] = useState(state);
  const [order, setOrder] = useState({ order: "", field: "" });
  const params = {};
  const dispatch = useDispatch();

  const AddOrUpdate = (object) => {
    const findId = valuesCommission.find(item => item.id === object.id);
    if(findId){
      const newCommission = valuesCommission.filter(item => item.id !== object.id);
      setValuesCommission([...newCommission,object]);
    }else{
      setValuesCommission([...valuesCommission,object])
    }
  }

  const nextPage = () => {
    if (page === haveCommissionMeta.last_page) {
      return setPage(page);
    }
    return setPage(page + 1);
  };

  const previousPage = () => {
    if (page === 0) {
      return setPage(page + 1);
    } else if (page > 1) {
      setPage(page - 1);
    }
  };


  const handleDelete = (professional) =>
    setHaveCommission(
      haveCommission.filter((item) => item.id !== professional.id)
    );


  useEffect(() => {
 
    location.state && setProfessionals(location.state.professionals.data);
  }, [order, page]);

  return (
    <div>
      <ModalContainerProfessional>
        <CloseButtonCircle onClick={() => dispatch(closeModal({ type: "CLOSEMODAL" }))} />
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
          lastPage={haveCommissionMeta?.last_page}
          currentPage={haveCommissionMeta?.current_page}
          firstPage={haveCommissionMeta?.first_page}
        />
        <ModalContainerButtons>
          <CancelButton
            margin="-5em 0 0 0"
            onClick={() => dispatch(closeModal({ type: "CLOSEMODAL" }))}
          >
            Cancelar
          </CancelButton>
          <SaveButton
            margin="-5em 3em 0 1.7em"
            onClick={() => {
              dispatch(valueOfCommission(valuesCommission));
              dispatch(closeModal({ type: "CLOSEMODAL" }));
            }}
          >
            Confirmar
          </SaveButton>
        </ModalContainerButtons>
      </ModalContainerProfessional>
      <ModalOverlay />
    </div>
  );
};
