import React, { useEffect, useState } from "react";
import api from "../../../api/api";
import { toast } from "react-toastify";
import { Container } from "../../atoms/Container";
import { DefaultToast } from "../../atoms/Toast/DefaultToast";
import { OvertimeList } from "../../organisms/OvertimeList";
import ListInputs from "./ListInputs";
import Footer from "../../organisms/Footer";
import TechnicalLeadApproval from "../../molecules/ListHeaderTechnicalLeadApproval";
import { OvertimeListTechnicalLeadApproval } from "../../molecules/OvertimeListTechnicalLeadApproval";
import { Height } from "./style";
import { useSelector } from "react-redux";

const OvertimeListIsTechLead = ({ status }) => {
  const [data, setData] = useState();
  const [meta, setMeta] = useState({});
  const [statusProject, setStatusProject] = useState([]);
  const [statusParams, setStatusParams] = useState("");
  const [projects, setProjects] = useState([]);
  const [projectParams, setProjectParams] = useState("");
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState({ order: "desc", field: "" });
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const isTechLead = useSelector(state => state.validTechLead)
  let params = {};

  const getOvertimes = async () => {
    await api({
      method: "get",
      url: "/indexUserHoursExtrasReleasesPending?limit=7",
      params: params,
    })
      .then((response) => {
        setData(response.data.data);
        setMeta(response.data.meta);
      })
      .catch((error) => toast.error(error.message));
  };

  const getStatus = async () => {
    await api({
      method: "get",
      url: "/extraHoursStatus",
    })
      .then((response) => {
        setStatusProject(response.data.data);
      })
      .catch((error) => toast.error(error.message));
  };

  const getProjects = async () => {
    await api({
      method: "get",
      url: "/userProjects/user",
    })
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => toast.error(error.message));
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

  useEffect(() => {
    getProjects();
    getStatus();
    handleFilterRequest();
    getOvertimes();
  }, [search, order, statusParams, projectParams, initialDate, finalDate]);

  return (
    <Container>
      <ListInputs
        search={search}
        statusProject={statusProject}
        initialDate={initialDate}
        finalDate={finalDate}
      />
      <TechnicalLeadApproval />
      <Height>
        <OvertimeListTechnicalLeadApproval data={data} status={status} />
      </Height>
      <Footer
        height='3.5em'
        border={"1px solid #CCD1D6"}
        previousPage={previousPage}
        nextPage={nextPage}
        sortById={sortByField}
        currentPage={meta?.current_page}
        firstPage={meta?.first_page}
        lastPage={meta?.last_page}
      />
    </Container>
  );
};

export default OvertimeListIsTechLead;
