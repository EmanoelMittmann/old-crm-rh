import React, { useEffect, useState } from "react";
import api from "../../../api/api";
import { toast } from "react-toastify";
import { Container } from "../../atoms/Container";
import { DefaultToast } from "../../atoms/Toast/DefaultToast";
import Footer from "../../organisms/Footer";
import TechnicalLeadApproval from "../../molecules/ListHeaderTechnicalLeadApproval";
import { OvertimeListTechnicalLeadApproval } from "../../molecules/OvertimeListTechnicalLeadApproval";
import { Height, SearchContainer } from "./style";
import InputSelect from "../../atoms/InputSelect";
import { SearchSection } from "../../molecules/SearchSection";
import InputWithLabel from "../../atoms/InputWithLabel";

const OvertimeListIsTechLead = () => {
  const [data, setData] = useState();
  const [meta, setMeta] = useState({});
  const [statusProject, setStatusProject] = useState([]);
  const [statusParams, setStatusParams] = useState("");
  const [projects, setProjects] = useState([]);
  const [projectParams, setProjectParams] = useState("");
  const [orderField, setOrderField] = useState("users.id");
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("");
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");

  let params = {};

  const getOvertimesTechLead = async () => {
    try {
        const { data } = await api.get(`/extrasHoursReleases/pending?limit=6`, {
          params: params,
        });
        setData(data.data);
        setMeta(data.meta);
    } catch (error) {
        console.error(error)
    }
  };

  const getStatus = async () => {
    try {     
        const { data } = await api.get("/extraHoursStatus");
        data.data.push({ id: "", name: "Todos" });
        setStatusProject(data.data);
    } catch (error) {
        console.error(error)
    }
  };

  const getProjects = async () => {
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

    if (pagesFilter === "next") params.page = `${meta.current_page + 1}`;
    if (pagesFilter === "previous") params.page = `${meta.current_page - 1}`;
    if (order !== "") {
      params.order = order;
    }
    if (orderField !== "") {
      params.orderField = orderField;
    }
  };

  const nextPage = () => {
    handleFilterRequest("next");
    return getOvertimesTechLead();
  };

  const previousPage = () => {
    handleFilterRequest("previous");
    return getOvertimesTechLead();
  };

  const sortByField = () => {
    order === "" && setOrder("desc");
    order === "asc" && setOrder("desc");
    order === "desc" && setOrder("asc");
  };

  useEffect(() => {
    handleFilterRequest();
    getOvertimesTechLead();
    getProjects();
    getStatus();
  }, [search, statusParams, projectParams, initialDate, order, finalDate]);

  return (
    <Container>
      <SearchContainer>
        <SearchSection
          fnSearch={setSearch}
          inputWidth='30%'
          placeholder="Buscar por profissional"
          width="100%"
        >
          <InputSelect
            onChange={(e) => setProjectParams(e.target.value)}
            placeholder="Projeto"
            textColor={projectParams}
            options={projects}
            width="30%"
            lineWidth="100%"
          />
          <InputSelect
            options={statusProject}
            onChange={(e) => setStatusParams(e.target.value)}
            textColor={statusParams}
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
            placeholder="Período incial"
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
        </SearchSection>
      </SearchContainer>

      <TechnicalLeadApproval
        sortByName={sortByField}
        setOrderField={setOrderField}
      />

      <Height>
        <OvertimeListTechnicalLeadApproval
          data={data}
          getOvertimesTechLead={getOvertimesTechLead}
        />
      </Height>

      <Footer
        height="4em"
        previousPage={previousPage}
        nextPage={nextPage}
        sortById={sortByField}
        currentPage={meta.current_page}
        firstPage={meta.first_page}
        lastPage={meta.last_page}
      />
    </Container>
  );
};

export default OvertimeListIsTechLead;
