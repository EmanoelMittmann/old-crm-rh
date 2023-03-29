import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { toast } from "react-toastify";

import api from "../../../api/api";

import { DefaultToast } from "../../atoms/Toast/DefaultToast";

import {
  jobOptionClicked,
  statusOptionClicked,
  projectTypeOptionClicked,
  setJobList,
  setStatusList,
  setProjectTypeList,
  settingsPages,
  openModal,
  modalEditOpen,
  editJobClicked,
  editStatusClicked,
  editProjectTypeClicked,
} from "../../../redux/actions";

import ModalSettings from "./ModalSetting";

const SettingsListItem = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const location = useLocation();

  const getSettingsList = async () => {
    try {
      const { data } = await api({
        method: "get",
        url: `${location.pathname}`,
      });

      if (location.pathname === "/job") dispatch(setJobList(data.data));
      if (location.pathname === "/projectStatus")
        dispatch(setStatusList(data.data));
      if (location.pathname === "/projectType")
        dispatch(setProjectTypeList(data.data));
      dispatch(settingsPages(data.meta));
    } catch (err) {}
  };

  useEffect(() => {
    getSettingsList();
  }, [location.pathname]);

  const openOptions = (info) => {
    if (location.pathname === "/job") {
      dispatch(jobOptionClicked(info.id));
    }
    if (location.pathname === "/projectStatus") {
      dispatch(statusOptionClicked(info.id));
    }
    if (location.pathname === "/projectType") {
      dispatch(projectTypeOptionClicked(info.id));
    }
  };

  const editListItem = (info) => {
    if (location.pathname === "/job") {
      dispatch(editJobClicked(info.id));
    }
    if (location.pathname === "/projectStatus") {
      dispatch(editStatusClicked(info.id));
    }
    if (location.pathname === "/projectType") {
      dispatch(editProjectTypeClicked(info.id));
    }
    dispatch(modalEditOpen());
    dispatch(openModal());
  };

  let params = {};

  const handleFilterRequest = () => {
    params.page = state.settingsPagesFilter.current_page;

    if (state.filterStatus !== "" && state.filterStatus !== " ")
      params.is_active = state.filterStatus;

    if (state.settingsSearchFilter !== "")
      params.search = state.settingsSearchFilter;

    if (state.filterOrder !== "") params.orderField = "name";

    if (state.filterOrder !== "") params.order = state.filterOrder;
  };

  const toggleStatusOptions = (info) => {
    const updateStatusJob = async () => {
      try {
        handleFilterRequest();

        await api({
          method: "put",
          url: `/updateJobStatus`,
          data: {
            id: info.id,
          },
        });

        const { data } = await api({
          method: "get",
          url: "/job",
          params: params,
        });

        dispatch(setJobList(data.data));
        return toast.success(<DefaultToast text="Status alterado!" />);
      } catch (error) {}
    };

    const updateProjectStatus = async () => {
      try {
        handleFilterRequest();

        await api({
          method: "put",
          url: `/updateProjectStatus`,
          data: {
            id: info.id,
          },
        });

        const { data } = await api({
          method: "get",
          url: "/projectStatus",
          params: params,
        });

        dispatch(setStatusList(data.data));
        return toast.success(<DefaultToast text="Status alterado!" />);
      } catch (error) {}
    };

    const updateStatusProjectType = async () => {
      try {
        handleFilterRequest();

        await api({
          method: "put",
          url: `/updateProjectType`,
          data: {
            id: info.id,
          },
        });

        const { data } = await api({
          method: "get",
          url: "/projectType",
          params: params,
        });

        dispatch(setProjectTypeList(data.data));
        return toast.success(<DefaultToast text="Status alterado!" />);
      } catch (error) {}
    };

    if (location.pathname === "/job") {
      updateStatusJob();
    }
    if (location.pathname === "/projectStatus") {
      updateProjectStatus();
    }
    if (location.pathname === "/projectType") {
      updateStatusProjectType();
    }
  };

  return (
    <div >
      {location.pathname === "/job" &&
        state.jobs.map((job) => (
          <ModalSettings
            data={job}
            key={job.id}
            edit={editListItem}
            toggle={toggleStatusOptions}
            openOptions={openOptions}
          />
        ))}
      {location.pathname === "/projectStatus" &&
        state.status.map((status) => (
          <ModalSettings
            data={status}
            key={status.id}
            edit={editListItem}
            toggle={toggleStatusOptions}
            openOptions={openOptions}
          />
        ))}
      {location.pathname === "/projectType" &&
        state.projectType.map((project) => (
          <ModalSettings
            data={project}
            key={project.id}
            edit={editListItem}
            toggle={toggleStatusOptions}
            openOptions={openOptions}
          />
        ))}
    </div>
  );
};

export default SettingsListItem;
