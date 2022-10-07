
import React, { useState, useEffect } from "react";
import CancelButton from "../../atoms/Buttons/CancelButton/style";
import SaveButton from "../../atoms/Buttons/SaveButton/style";
import FooterModais from "../../organisms/FooterModais";
import { useDispatch, useSelector } from "react-redux";
import CloseButtonCircle from "../../atoms/Buttons/CloseButtonCircle";
import { ModalTitle, ModalOverlay } from "../Modal/style.js";

import {
  ModalContainerButtons,
  TitleComissionProfessional,
  ModalContainerProfessional,
  ContainerAbsolute
} from './style';

import Shelf from './list/shelf.js';
import { closeModal, valueOfCommission } from '../../../redux/actions/index.js';


export const ModalOrdemServices = ({
  haveCommission,
  haveCommissionMeta,
  setPage,
  page,
  checkedProfissional,
  setNewId,
}) => {
  const state = useSelector((state) => state.valueOfCommission);
  const [valuesCommission, setValuesCommission] = useState(state);
  const dispatch = useDispatch();


  const AddOrUpdate = (object) => {
    const findId = valuesCommission.find((item) => item.id === object.id);
    if (findId) {
      const newCommission = valuesCommission.filter(
        (item) => item.id !== object.id
      );
      setValuesCommission([...newCommission, object]);

    } else {
      setValuesCommission([...valuesCommission, object]);
    }
  };

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

  const handleDelete = (professional) => {
    setNewId(checkedProfissional.filter((item) => item !== professional.id));
  };


  return (
    <div>
      <ModalContainerProfessional>
        <CloseButtonCircle
          onClick={() => dispatch(closeModal({ type: "CLOSEMODAL" }))}
        />
        <ContainerAbsolute>
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
        </ContainerAbsolute>
        <FooterModais
          previousPage={previousPage}
          nextPage={nextPage}
          lastPage={haveCommissionMeta?.last_page}
          currentPage={haveCommissionMeta?.current_page}
          firstPage={haveCommissionMeta?.first_page}
        />

        <ModalContainerButtons>
          <CancelButton
            onClick={() => dispatch(closeModal({ type: "CLOSEMODAL" }))}
          >
            Cancelar
          </CancelButton>
          <SaveButton
            onClick={() => {
              dispatch(valueOfCommission(valuesCommission));
              dispatch(closeModal({ type: 'CLOSEMODAL' }));
            }

          >
            Confirmar
          </SaveButton>
        </ModalContainerButtons>
      </ModalContainerProfessional>
      <ModalOverlay />
    </div>
  );
};