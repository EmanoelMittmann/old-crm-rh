import React from "react";
import { useParams } from "react-router-dom";
import { HeaderTable } from "../../molecules/HeaderTable";
import { formatDate } from "../../utils/formatDate";
import { ListHistory } from "../../molecules/ListHistory";
import api from "../../../api/api";
import { Badge } from "../../molecules/ProfessionalsListItem/style";
import { RowsTable } from "../../molecules/RowsTable";
import TitleContainer from "../../molecules/TitleContainer";
import {
  Container,
  ContainerHeader,
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
      const { data } = await api({
        method: "GET",
        url: `/extraHoursReleases/15`,
      });
      setRequestData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLaunchedHours();
  }, [id]);

  // const colorBg = 
  //   corporation.registration_status === 'ACTIVE' ? '#ddf7e5' : 
  //     corporation.registration_status === 'SUSPENDED' ? '#fff3d9' : 
  //       corporation.registration_status === 'NULL' ? '#F5F5F5' :
  //         corporation.registration_status === 'UNFIT' ? '#FFE1E3' : '#FFE1E3'
  // const colorText = 
  //   corporation.registration_status === 'ACTIVE' ? '#1ECB4F' : 
  //     corporation.registration_status === 'SUSPENDED' ? '#FFAE00' :  
  //       corporation.registration_status === 'NULL' ? '#000000' :
  //         corporation.registration_status === 'UNFIT' ? '#FF3541' : '#FF3541'

  return (
    <>
      <TitleContainer backToPath="/timeSending" title="Detalhes" />
      {requestData.map((data) => (
        <Container>
          <Flex>
            <Text>Lançamento #{data.id}</Text>
            <Status data={data}/>
          </Flex>
          <Flex mt="10px">
            <p1 className="text">{data.project.name}</p1>
            <p2>
              Lançado{" "}
              {data.launch_date && formatDate(data.launch_date)}
            </p2>
          </Flex>
          <Table>
            <HeaderTable />
            <RowsTable data={data}/>
          </Table>
          <Flex mt="2em">
            <h3>Histórico</h3>
          </Flex>
          <History>
            <ListHistory />
          </History>
        </Container>
      ))}
    </>
  );
};

export default DetailsRelease;
