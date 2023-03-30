import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router';

import api from '../../../api/api';
import Footer from '../Footer';
import ProfessionalsInputs from "../../molecules/ProfessionalsInputs";
import ProfessionalsListHeader from "../../atoms/ProfessionalsListHeader";
import ProfessionalsListItem from "../../molecules/ProfessionalsListItem";
import LoadingCircle from "../../atoms/LoadingCircle";
import { Container} from "../../atoms/Container";
import { ContainerAbsolute } from '../../atoms/Container/style';

const ProfessionalsSection = () => {
    const location = useLocation();
    const [professionals, setProfessionals] = useState([]);
    const [jobSelected, setJobSelected] = useState("");
    const [searchResult, setSearchResult] = useState("");
    const [professionalMeta, setProfessionalMeta] = useState("");
    const [order, setOrder] = useState("");

    let params = {};

    const handleFilterRequest = (pagesFilter) => {
        if (pagesFilter === "previous")
            params.page = `${professionalMeta.current_page--}`;

        if (pagesFilter === "next")
            params.page = `${professionalMeta.current_page++}`;

        if (pagesFilter === undefined) params.page = professionalMeta.current_page;

        if (searchResult !== "") {
            params.search = searchResult;
            params.page = professionalMeta.first_page;
        }

        if (jobSelected !== "") {
            params.job_id = jobSelected;
        }

        if (order !== "") params.order = order;
    };

    const sortByName = () => {
        order === "" && setOrder("desc");
        order === "asc" && setOrder("desc");
        order === "desc" && setOrder("asc");
    };

    const getProfessionals = async () => {
        handleFilterRequest()
        const {data} = await api({
            method: "get",
            url: `/professionals/?limit=5`,
            params: params,
        });

        setProfessionals(data.data);
        setProfessionalMeta(data.meta);
    };

    useEffect(() => {
        getProfessionals();
        location.state && setProfessionals(location.state.professionals.data);
    }, [searchResult, jobSelected, order]);

    const nextPage = () => {
        handleFilterRequest("next");
        getProfessionals();
    };

    const previousPage = () => {
        handleFilterRequest("previous");
        getProfessionals();
    };

    return (
        <Container>
            <ProfessionalsInputs
                setSearchResult={setSearchResult}
                setJobSelected={setJobSelected}
                jobSelected={jobSelected}
            />
            <ProfessionalsListHeader sortByName={sortByName}/>
            {professionals[0] ? (
                <>
                    <ContainerAbsolute>
                        {professionals.map(professional =>
                            <ProfessionalsListItem
                                professional={professional}
                                key={professional.id}
                                getProfessionals={getProfessionals}
                            />
                        )}
                    </ContainerAbsolute>
                    <Footer
                        previousPage={previousPage}
                        nextPage={nextPage}
                        currentPage={professionalMeta.current_page}
                        firstPage={professionalMeta.first_page}
                        lastPage={professionalMeta.last_page}
                    />
                </>
            ) : (
                <LoadingCircle/>
            )}
        </Container>
    );
};

export default ProfessionalsSection;
