import React from "react";
import { useState } from "react";
import api from "../../../api/api";
import Payments from "../../organisms/Payments";

const Reports = () => {
    const [projects,setProjects] = useState([])

    const getProjects = async() => {
        const {data} = await api('/project')
        setProjects(data.data)
    }

  return (
    <>
      <Payments />
    </>
  );
};

export default Reports;
