import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../../api/api";
import OvertimeRh from "../../organisms/OvertimeRh";
import { DefaultToast } from "../../atoms/Toast/DefaultToast";
import { toast } from "react-toastify";

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
    if (pagesFilter === '') params.append('page', dataMeta.current_page);

    if (search !== "") {
      params.append('search', search);
    }
    if (statusParams !== "") {
      params.append('status_id', statusParams);
    }
    if (projectParams !== "") {
      params.append('project_id' ,projectParams);
    }
    if (initialDate !== "") {
      params.append('date_start' ,initialDate);
    }
    if (finalDate !== "" && finalDate > "1000-01-01") {
      finalDate < initialDate
        ? toast.warn(
          <DefaultToast text="Período final precisa ser maior que o período inicial" />,
          {
            toastId: "finalDate",
          }
        ) : (params.append('date_end', finalDate));
    }

    if (pagesFilter === "previous") params.append('page',dataMeta.current_page - 1)

    if (pagesFilter === "next") params.append('page',dataMeta.current_page + 1)

    if (order !== "") params.append('order',order)

    if(orderField !== "") params.append('orderField',orderField)
  };

  const getHoursPending = async () => {
    try {
      const { data } = await api.get(`/extrasHoursReleases/pending?limit=6`, {params});
      setData(data.data);
      setDataMeta(data.meta);
    } catch (error) {
      console.error(error);
    }
  };
  const getProject = async () => {
    try {
      const { data } = await api.get("/project");
      data.data.push({ id: '', name: 'Todos' });
      setProjects(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getStatus = async () => {
    try {
      const { data } = await api.get("/extraHoursStatus");
      data.data.push({ id: '', name: 'Todos' });
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
  }, [order, orderField, search, statusParams, projectParams, initialDate, finalDate]);


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
        getHoursPending={getHoursPending}
      />
    </>
  );
};
export default Overtime;
