import React, { useEffect } from "react";
import { useState } from "react";
import api from "../../../api/api";
import Payments from "../../organisms/Payments";

const Reports = () => {
    const [projects,setProjects] = useState([])
    const [menuOptions, setMenuOptions] = useState(false)
    const getProjects = async() => {
        const {data} = await api.get('/project')
        setProjects(data.data)
    }

    useEffect(() => {
      getProjects()
    },[])

  return (
    <>
      <Payments 
        projects={projects}
      />
    </>
  );
};

export default Reports;
