import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../../api/api";
import OvertimeRh from "../../organisms/OvertimeRh";

const Overtime = () => {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState([]);
  const [order, setOrder] = useState("");
  const [data, setData] = useState([]);
  const [dataMeta, setDataMeta] = useState({});
  const [search, setSearch] = useState("");
  const [projectParams, setProjectParams] = useState("");
  const [statusParams, setStatusParams] = useState("");
  const [orderField, setOrderField] = useState("")
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");

  const params = new URLSearchParams()

  const sortByName = () => {
    order === "" && setOrder("desc");
    order === "asc" && setOrder("desc");
    order === "desc" && setOrder("asc");
  };

  const nextPage = () => {
    handleFilterRequest("next");
    getHoursPending();
  };

  const previousPage = () => {
    handleFilterRequest("previous");
    getHoursPending();
  };

  const handleFilterRequest = (pagesFilter) => {
    if (pagesFilter === "previous") params.append('page',dataMeta.current_page - 1)

    if (pagesFilter === "next") params.append('page',dataMeta.current_page + 1)

    if (order !== "") params.append('order',order)

    if(orderField !== "") params.append('orderField',orderField)
  };

  const getHoursPending = async () => {
    try {
      const { data } = await api.get(`/extrasHoursReleases/pending?limit=5`, {
        params: params});
      setData(data.data);
      setDataMeta(data.meta);
    } catch (error) {
      console.error(error);
    }
  };
  const getProject = async () => {
    try {
      const { data } = await api.get("/project");
      setProjects(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getStatus = async () => {
    try {
      const { data } = await api.get("/extraHoursStatus");
      setStatus(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProject();
    getStatus();
    getHoursPending();
    handleFilterRequest();
  }, [order,orderField]);

  return (
    <>
      <OvertimeRh
        projects={projects}
        status={status}
        sortByName={sortByName}
        data={data}
        dataMeta={dataMeta}
        setOrderField={setOrderField}
        next={nextPage}
        prev={previousPage}
        finalDate={finalDate}
        setProjectParams={setProjectParams}
        setInitialDate={setInitialDate}
        projectParams={projectParams}
        setFinalDate={setFinalDate}
        initialDate={initialDate}
        setSearch={setSearch}
        setStatusParams={setStatusParams}
      />
    </>
  );
};
export default Overtime;
