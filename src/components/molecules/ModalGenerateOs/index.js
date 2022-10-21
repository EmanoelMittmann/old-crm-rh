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
  TitleComissionProfessional,
} from "./style";
import Shelf from "./shelf";
import { useEffect } from "react";
import ModalCancelOS from "../ModalCancelOS";
import { useState } from "react";

const ModalGenerateOs = ({
  ModalProfessional,
  ModalProfessionalMeta,
  handleSubmit,
  checkedProfissional,
  setCheckedProfissional,
  page,
  setPage
}) => {
  const [Modal, setModal] = useState(false);
  const dispatch = useDispatch();

  let params = {};

  const nextPage = () => {
    setPage(page + 1)
    handleSubmit();
  };

  const previousPage = () => {
    setPage(page - 1);
    handleSubmit();
  };

  // const handleFilterRequest = (pagesFilter) => {
  //   if (pagesFilter === "previous")
  //     params.page = `${ModalProfessionalMeta.current_page - 1}`;

  //   if (pagesFilter === "next")
  //     params.page = `${ModalProfessionalMeta.current_page + 1}`;

  //   if (pagesFilter === undefined)
  //     params.page = ModalProfessionalMeta.current_page;
  // };

  const handleDelete = (index) => {
    setCheckedProfissional(
      checkedProfissional.filter((item) => item !== index)
    );
  };

  useEffect(() => {
    handleSubmit(checkedProfissional);
  }, [checkedProfissional,page]);

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
                  dispatch(closeModal({ type: "CLOSEMODAL" }));
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
