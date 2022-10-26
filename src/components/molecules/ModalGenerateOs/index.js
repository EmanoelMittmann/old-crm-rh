import React from "react";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../../../redux/actions";
import CancelButton from "../../atoms/Buttons/CancelButton/style";
import SaveButton from "../../atoms/Buttons/SaveButton/style";
import FooterModais from "../../organisms/FooterModais";
import { ModalOverlay, ModalTitle } from "../Modal/style";
import CloseButtonCircle from "../../atoms/Buttons/CloseButtonCircle";
import {
  ContainerAbsolute,
  ModalContainerButtons,
  ModalContainerProfessional,
} from "./style";
import Shelf from "./shelf";
import { useEffect } from "react";
import ModalCancelOS from "../ModalCancelOS";
import { useState } from "react";
import ModalCompanies from "../ModalCompanies";

const ModalGenerateOs = ({
  ModalProfessional,
  ModalProfessionalMeta,
  handleSubmit,
  setCompanyModal,
  handleFilterModalRequest,
  checkedProfissional,
  setCheckedProfissional,
}) => {
  const [Modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const nextPage = () => {
    handleFilterModalRequest('next')
    handleSubmit(checkedProfissional);
  };

  const previousPage = () => {  
    handleFilterModalRequest('previous')
    handleSubmit(checkedProfissional); 
  };

  const handleDelete = (index) => {
    setCheckedProfissional(
      checkedProfissional.filter((item) => item !== index)
    );
  };

  useEffect(() => {
    handleFilterModalRequest()
    handleSubmit(checkedProfissional);
  }, [checkedProfissional]);

  return (
    <>
      {!Modal && checkedProfissional.length > 0 ? (
        <>
          <ModalContainerProfessional>
            <CloseButtonCircle
              onClick={() => dispatch(closeModal({ type: "CLOSEMODAL" }))}
            />
            <ContainerAbsolute>
              <ModalTitle padding="1em">Confirmar Profissionais</ModalTitle>
              <div className="shelf">
                {ModalProfessional?.map((professional) => (
                  <Shelf
                    key={professional.id}
                    professional={professional}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            </ContainerAbsolute>

            <FooterModais
              position="relative"
              previousPage={previousPage}
              nextPage={nextPage}
              lastPage={ModalProfessionalMeta?.last_page}
              currentPage={ModalProfessionalMeta?.current_page}
              firstPage={ModalProfessionalMeta?.first_page}
            />
            <ModalContainerButtons>
              <CancelButton
                onClick={() => {
                  setModal((prev) => !prev);
                }}
              >
                Cancelar
              </CancelButton>
              <SaveButton
                onClick={() => {
                  dispatch(closeModal({ type: "CLOSEMODAL" }))
                  setCompanyModal(prev => !prev)
                }}
              >
                Confirmar
              </SaveButton>
            </ModalContainerButtons>
          </ModalContainerProfessional>
          <ModalOverlay />
        </>
      ) : (
        <ModalCancelOS
          text={"Tem certeza que deseja cancelar a OS?"}
          CloseButtonClickHandler={() => setModal((prev) => !prev)}
          redButtonClickHandler={() => dispatch(closeModal({ type: "CLOSEMODAL" }))}
        />
      )}
    </>
  );
};

export default ModalGenerateOs;
