import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/actions";
import CancelButton from "../../atoms/Buttons/CancelButton/style";
import SaveButton from "../../atoms/Buttons/SaveButton/style";
import FooterModais from "../../organisms/FooterModais";
import { ModalOverlay, ModalTitle } from "../Modal/style";
import CloseButtonCircle from '../../atoms/Buttons/CloseButtonCircle'
import { ContainerAbsolute, ModalContainerButtons, ModalContainerProfessional, TitleComissionProfessional } from "./style";
import { useState } from "react";
import Shelf from "./shelf";

const ModalGenerateOs = () => {
    const [state,setState] = useState([
      
    ])
    const dispatch = useDispatch()

  return (
    <div>
      <ModalContainerProfessional>
        <CloseButtonCircle
          onClick={() => dispatch(closeModal({ type: "CLOSEMODAL" }))}
        />
        <ContainerAbsolute>
          <ModalTitle padding="1em">Confirmar Profissionais</ModalTitle>
          <TitleComissionProfessional>
          </TitleComissionProfessional>

        <div className="shelf">
          {state?.map((professional) => (
            <Shelf
              key={professional.id}
              professional={professional}
             
            />
          ))}
        </div>
        </ContainerAbsolute>

        <FooterModais
          position='relative'
        //   previousPage={previousPage}
        //   nextPage={nextPage}
        //   lastPage={haveCommissionMeta?.last_page}
        //   currentPage={haveCommissionMeta?.current_page}
        //   firstPage={haveCommissionMeta?.first_page}
        />
        <ModalContainerButtons>
          <CancelButton
            onClick={() => dispatch(closeModal({ type: "CLOSEMODAL" }))}
          >
            Cancelar
          </CancelButton>
          <SaveButton
            // onClick={() => {
            //   const filterHaveCommission = checkedProfissional.filter(
            //     (profissional) => profissional?.commission !== ""
            //   );
            //   const isEmptyCommision = valuesCommission.find(
            //     (commission) => commission.value === ""
            //   );
            //   if (
            //     valuesCommission.length === filterHaveCommission.length &&
            //     !isEmptyCommision
            //   ) {
            //     dispatch(valueOfCommission(valuesCommission));
            //     dispatch(closeModal({ type: "CLOSEMODAL" }));
            //   } else {
            //     return toast.error(
            //       <DefaultToast
            //         text={
            //           "Há Campo vazio! Exclua-o, ou inclua um valor maior que 0"
            //         }
            //       />
            //     );
            //   }
            // }}
          >
            Confirmar
          </SaveButton>
        </ModalContainerButtons>
      </ModalContainerProfessional>
      <ModalOverlay />
    </div>
  );
};

export default ModalGenerateOs;
