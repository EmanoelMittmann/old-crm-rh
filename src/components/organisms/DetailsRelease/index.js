import React from "react";
import { useParams } from "react-router-dom";
import { HeaderTable } from "../../molecules/HeaderTable";
import { formatDate } from "../../utils/formatDate";
import { ListHistory } from "../../molecules/ListHistory";
import api from "../../../api/api";
import { RowsTable } from "../../molecules/RowsTable";
import TitleContainer from "../../molecules/TitleContainer";
import {
  Container,
  Flex,
  History,
  Table,
  Text,
} from "./style";
import { useState } from "react";
import { useEffect } from "react";
import { Status } from "./status";


const DetailsRelease = () => {
  const [requestData, setRequestData] = useState([]);
  let { id } = useParams();
  
  const getLaunchedHours = async (id) => {
    try {
      const {data} = await api.get(`/extraHoursReleases/${id}`)
      setRequestData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLaunchedHours(id);
  }, [id]);

  return (
    <>
      <TitleContainer backToPath="/timeSending" title="Detalhes" />
      {requestData.map((data) => (
        <Container>
          <Flex>
            <Text>Lançamento #{data.id}</Text>
            <Status data={data} />
          </Flex>
          <Flex mt="10px">
            <p1 className="text">{data.project.name}</p1>
            <p2>Lançado {data.launch_date && formatDate(data.launch_date)}</p2>
          </Flex>
          <Table>
            <HeaderTable />
            <RowsTable data={data} />
          </Table>
          <Flex mt="2em">
            <h3>Histórico de Aprovação</h3>
          </Flex>
          <History>
            {data.historic?.map(item => <ListHistory data={item}/>)} 
          </History>
        </Container>
      ))}
    </>
  );
};

export default DetailsRelease;
