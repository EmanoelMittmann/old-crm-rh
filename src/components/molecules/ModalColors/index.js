import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import api from "../../../api/api.js";

import {
  setStatusList,
  settingsPages,
  setFilterOrder,
  setFilterStatus,
  closeModal,
  setSearchName,
  setStatusColors,
} from "../../../redux/actions/index.js";

import SaveButton from "../../atoms/Buttons/SaveButton/style.js";
import CancelButton from "../../atoms/Buttons/CancelButton/style.js";
import CloseButtonCicle from "../../atoms/Buttons/CloseButtonCircle/index.js";
import InputSelect from "../../atoms/InputSelect";
import InputSelectEdit from "../../atoms/InputSelectEdit";
import InputWithLabel from "../../atoms/InputWithLabel/index.js";
import { DefaultToast } from "../../atoms/Toast/DefaultToast.js";
import { ModalContainerButtons, ModalInputContainer } from "./style.js";
import { ModalOverlay, ModalContainer, ModalTitle } from "../Modal/style.js";

const ModalColors = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const state = useSelector((state) => state);
  let params;

  if (state.filterOrder !== "") {
    params = {
      page: `${state.settingsPagesFilter.current_page}`,
      is_active: state.filterStatus,
      search: state.settingsSearchFilter,
      orderField: "name",
      order: state.filterOrder,
    };
  }

  if (state.filterOrder === "") {
    params = {
      page: `${state.settingsPagesFilter.current_page}`,
      is_active: state.filterStatus,
      search: state.settingsSearchFilter,
    };
  }

  const resetFilters = () => {
    dispatch(setFilterOrder(""));
    dispatch(setFilterStatus("all"));
    dispatch(setSearchName(""));
  };

  const saveStatus = async () => {
    try {
      await api({
        method: "post",
        url: "/projectStatus",
        data: {
          name: value,
          colors_id: selectedOption,
        },
      });

      const { data } = await api({
        method: "get",
        url: "/projectStatus",
      });

      dispatch(setStatusList(data.data));
      dispatch(settingsPages(data.meta));
      resetFilters();

      return (
        data.data &&
        toast.success(<DefaultToast text="Status do Projeto cadastrado!" />)
      );
    } catch (error) {
      return toast.warn(<DefaultToast text={value.trim() === "" ?"Insira um Status" : "Um status com esse nome já existe"} />);
    }
  };
  const updateStatus = async () => {
    try {
      await api({
        method: "put",
        url: `/projectStatus/${state.statusId}`,
        data: {
          name: value,
          colors_id: selectedOption,
        },
      })
      const { data } = await api({
        method: "get",
        url: "/projectStatus",
        params: params,
      });
      dispatch(setStatusList(data.data));
      dispatch(settingsPages(data.meta));

      return toast.success(
        <DefaultToast text="Status do Projeto atualizado!" />
      );
    } catch (error) {
      return toast.error(
        <DefaultToast text=" Um status com esse nome já existe" />
      );
    }
  };

  const saveButtonClickHandler = () => {
    if (value.length === 0) return;
    if (state.modalFunctionality.register) {
      saveStatus();
      dispatch(closeModal());
    }
    if (state.modalFunctionality.edit) {
      updateStatus();
      dispatch(closeModal());
    }
  };

  const CloseButtonClickHandler = () => {
    dispatch(closeModal());
  };

  const cancelButtonClickHandler = () => {
    dispatch(closeModal());
  };

  const statusName = () => {
    const editStatus = state.status.find((status) => {
      if (state.statusId === status.id) return status;
    });

    const { name, color } = editStatus;
    setValue(name);
    setSelectedOption(color.id);
  };

  const getStatusColor = async () => {
    try {
      const { data } = await api({
        method: "get",
        url: "/color",
      });

      dispatch(setStatusColors(data));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getStatusColor();
    if (state.modalFunctionality.edit) {
      statusName();
    }
  }, []);
  return (
    <div>
      <ModalContainer>
        <CloseButtonCicle CloseButtonClickHandler={CloseButtonClickHandler} />
        <ModalTitle padding="1.3em 0 1.3em 1.6em">
          {state.modalFunctionality.edit
            ? "Editar status do projeto"
            : "Novo status do projeto"}
        </ModalTitle>
        <ModalInputContainer>
          <InputWithLabel
            label="Status"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            width="100%"
            placeholder="Digite o nome do status"
            widthContainer="85%"
            handleBlur={() => { }}
            justify="center"
            padding="0 0.5em 0.8em 0"
          />

          {state.modalFunctionality.edit ? (
            <InputSelect
              textColor={state.statusColors}
              label="Status"
              optionId={selectedOption}
              setSelectedOption={setSelectedOption}
              width="83%"
              lineWidth="100%"
              margin="0em 0em 0em -0.2em"
              options={state.statusColors}
            />
          ) : (
            <InputSelect
              onChange={(e) => setSelectedOption(e.target.value)}
              placeholder="Color"
              width="83%"
              lineWidth="100%"
              margin="0em 0em 0em -0.2em"
              options={state.statusColors}
            />
          )}
        </ModalInputContainer>
        <ModalContainerButtons>
          <CancelButton onClick={cancelButtonClickHandler}>
            Cancelar
          </CancelButton>
          <SaveButton
            onClick={() => saveButtonClickHandler()}
            margin="0 3.5em 0 1.7em"
          >
            Salvar
          </SaveButton>
        </ModalContainerButtons>
      </ModalContainer>
      <ModalOverlay />
    </div>
  );
};

export default ModalColors;
