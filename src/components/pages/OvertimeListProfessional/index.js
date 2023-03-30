import React, { useEffect, useState } from "react";
import api from "../../../api/api";
import { toast } from "react-toastify";
import { Container } from "../../atoms/Container";
import InputSelect from "../../atoms/InputSelect";
import { DefaultToast } from "../../atoms/Toast/DefaultToast";
import { SearchSection } from "../../molecules/SearchSection";
import { OvertimeList } from "../../organisms/OvertimeList";
import { SearchContainer, StyleIsTechLead } from "./style";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ArrowRegister from "../../atoms/ArrowRegister";
import InputWithLabel from "../../atoms/InputWithLabel";

const OvertimeListProfessional = () => {
  const [data, setData] = useState();
  const [meta, setMeta] = useState({});
  const [status, setStatus] = useState([]);
  const [statusParams, setStatusParams] = useState("");
  const [projects, setProjects] = useState([]);
  const [projectParams, setProjectParams] = useState("");
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState({ order: "desc", field: "" });
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const isTechLead = useSelector((state) => state.validTechLead);
  let params = {};
  const history = useHistory();

  const getOvertimes = async () => {
    try {
      const { data } = await api.get("/extraHoursReleases", { params: params });
      setData(data.data);
      setMeta(data.meta);
    } catch (error) {
      console.error(error)
    }
  };

  const getStatus = async () => {
    try {
      const { data } = await api.get( "/extraHoursStatus");
      data.data.push({ id: "", name: "Todos" });
      setStatus(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getProjects = async () => {
    handleFilterRequest();
    try {
      const { data } = await api.get("/userProjects/user");
      data.push({ id: "", name: "Todos" });
      setProjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilterRequest = (pagesFilter) => {
    if (pagesFilter === undefined) params.page = meta.current_page;

    if (search !== "") {
      params.search = search;
      params.page = meta.first_page;
    }

    if (statusParams !== "") {
      params.status_id = statusParams;
      params.page = meta.first_page;
    }

    if (projectParams !== "") {
      params.project_id = projectParams;
      params.page = meta.first_page;
    }

    if (initialDate !== "") {
      params.date_start = initialDate;
      params.page = meta.first_page;
    }

    if (finalDate !== "" && finalDate > "1000-01-01") {
      finalDate < initialDate
        ? toast.warn(
            <DefaultToast text="Período final precisa ser maior que o período inicial" />,
            {
              toastId: "finalDate",
            }
          )
        : (params.date_end = finalDate);
      params.page = meta.first_page;
    }

    if (pagesFilter === "previous") params.page = `${meta.current_page - 1}`;

    if (pagesFilter === "next") params.page = `${meta.current_page + 1}`;

    if (order.order !== "") {
      params.orderField = order.orderField;
      params.order = order.order;
    }
  };

  const nextPage = () => {
    handleFilterRequest("next");
    return getOvertimes();
  };

  const previousPage = () => {
    handleFilterRequest("previous");
    return getOvertimes();
  };

  const sortByField = (field) => {
    order.order === "desc"
      ? setOrder({
          order: "asc",
          orderField: field,
        })
      : setOrder({
          order: "desc",
          orderField: field,
        });
  };
  const getIstechLead = () => {
    history.push("/timeIstechLead");
  };

  useEffect(() => {
    getProjects();
    getStatus();
    getOvertimes();
  }, [search, order, statusParams, projectParams, initialDate, finalDate]);

  return (
    <Container>
      {isTechLead ? (
        <StyleIsTechLead>
          <ArrowRegister clickHandler={getIstechLead} />
        </StyleIsTechLead>
      ) : (
        ""
      )}
      <SearchSection
        fnSearch={setSearch}
        placeholder="Buscar pelo código"
        width="100%"
      >
        <SearchContainer>
          <InputSelect
            options={projects}
            textColor={projectParams}
            onChange={(e) => setProjectParams(e.target.value)}
            placeholder="Projeto"
            width="30%"
            lineWidth="100%"
          />
          <InputSelect
            options={status}
            textColor={statusParams}
            onChange={(e) => setStatusParams(e.target.value)}
            placeholder="Status"
            width="30%"
            lineWidth="100%"
          />
          <InputWithLabel
            type="date"
            onChange={(e) => setInitialDate(e.target.value)}
            value={initialDate}
            width="100%"
            widthContainer="30%"
            handleBlur={() => {}}
            name="initial_period"
            placeholder="Período inicial"
          />
          <InputWithLabel
            type="date"
            onChange={(e) => setFinalDate(e.target.value)}
            value={finalDate}
            width="100%"
            widthContainer="30%"
            handleBlur={() => {}}
            name="initial_period"
            placeholder="Período final"
          />
        </SearchContainer>
      </SearchSection>
      <OvertimeList
        data={data}
        meta={meta}
        status={status}
        nextPage={nextPage}
        previousPage={previousPage}
        sortById={sortByField}
      />
    </Container>
  );
};

export default OvertimeListProfessional;
