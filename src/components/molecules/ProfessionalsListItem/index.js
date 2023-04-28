import MenuOptions from "../../atoms/MenuOptions";
import { ReactComponent as OptionsIcon } from "../../../assets/icons/options.svg";
import {
  ContainerProfessionalsListItem,
  ProfessionalEmail,
  ProfessionalPhoneNumber,
  ProfessionalJob,
  ProfessionalCity,
  ProfessionalProfile,
  ProfessionalsListOptions,
  ContainerIconOptions,
  ProfessionalStatus,
  Badge,
} from "./style.js";
import { useHistory } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ModalRed from "../../molecules/ModalRed";
import api from "../../../api/api";
import ModalGreen from "../ModalGreen";
const ProfessionalsListItem = ({professional, getProfessionals}) => {
    const history = useHistory();
    const [menuOptionsisVisible, setMenuOptionsisVisible] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const modalRef = useRef(null);
    const buttonRef = useRef(null);
  
    const editProfessional = () => {
      history.push(`/professional/${professional.id}`);
    };
    const menuOptionsClicked = () => {
      setMenuOptionsisVisible(!menuOptionsisVisible);
    };
    const openModaldisableProfessional = () => {
      setOpenModal(true);
      setMenuOptionsisVisible(false);
  
      const status = professional.is_active ? "inativar" : "ativar";
      setModalMessage(`Deseja realmente ${status} ${professional.name}?
      Esta ação encerrará o contrato do mesmo.`);
    };
  
    const disableProfessional = async () => {
      try {
        await api({
          method: "put",
          url: `/user/updateStatus/${professional.id}`,
        });
        setOpenModal(false);
        getProfessionals();
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleOutside = (e) => {
      if (
        modalRef.current &&
        !modalRef.current?.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current?.contains(e.target)
      ) {
        menuOptionsClicked();
      }
    }
  
  
    useEffect(() => {
      document.addEventListener("mousedown", handleOutside);
      return () => {
        document.removeEventListener("mousedown", handleOutside);
      };
    },[menuOptionsisVisible]);
  
    return (
      <>
        <ContainerProfessionalsListItem key={professional.id}>
          <ProfessionalProfile>{professional.name}</ProfessionalProfile>
          <ProfessionalJob>{professional.job.name}</ProfessionalJob>
          <ProfessionalEmail>{professional.email}</ProfessionalEmail>
          <ProfessionalPhoneNumber>
            {professional.telephone_number}
          </ProfessionalPhoneNumber>
          <ProfessionalCity>{professional.local}</ProfessionalCity>
          <ProfessionalStatus>
            {professional.is_active === true ? (
              <Badge bg="#E4F8DD" color="#229A16">
                {" "}
                Ativo{" "}
              </Badge>
            ) : (
              <Badge bg="#FFE2E1" color="#BB2B3F">
                {" "}
                Inativo{" "}
              </Badge>
            )}
          </ProfessionalStatus>
          <ProfessionalsListOptions
            optionsColor={menuOptionsisVisible ? "#407BFF" : "#B7BDC2"}
          >
            <ContainerIconOptions 
              onClick={() => setMenuOptionsisVisible(!menuOptionsisVisible)} ref={buttonRef} >
              <OptionsIcon/>
            </ContainerIconOptions>
          </ProfessionalsListOptions>
          {menuOptionsisVisible && 
            <MenuOptions
              ref={modalRef}
              positionMenu="13px"
              firstOptionDescription="Editar"
              secondOptionDescription={
                professional.is_active ? "Inativar" : "Ativar"
              }
              firstChosenOption={editProfessional}
              secondChosenOption={openModaldisableProfessional}
              padding="0.3em 0.5em 0.3em 1.7em"
              id={professional.id}
            />
          }
          {!professional.is_active && openModal && (
            <ModalGreen
              CloseButtonClickHandler={() => setOpenModal(false)}
              redButtonClickHandler={() => disableProfessional()}
              title={professional.is_active === 1 ? "Inativar" : "Ativar"}
              message={`Deseja realmente ativar o profissional ${professional.name}`}
            />
          )}

          {professional.is_active && openModal && (
            <ModalRed
              CloseButtonClickHandler={() => setOpenModal(false)}
              redButtonClickHandler={() => disableProfessional()}
              title={professional.is_active === 1 ? "Ativar" : "Inativar"}
              message={modalMessage}
            />
          )}
        </ContainerProfessionalsListItem>
      </>
    );
  };


export default ProfessionalsListItem