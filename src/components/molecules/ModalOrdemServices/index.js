
import React, { useState, useEffect } from 'react'
import api from '../../../api/api.js'
import CancelButton from '../../atoms/Buttons/CancelButton/style'
import CloseButton from '../../atoms/Buttons/CloseButton'
import SaveButton from '../../atoms/Buttons/SaveButton/style'
import FooterModais from '../../organisms/FooterModais'
import { useLocation } from 'react-router-dom'
import {
    ModalTitle,
    ModalContainerProfessional,
    ModalOverlay
} from '../Modal/style.js'

import {
    ModalContainerButtons,
    TitleComissionProfessional
} from './style'
import Shelf from './list/shelf.js'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export const ModalOdemServices = ({ CloseButtonClickHandler }) => {
    const location = useLocation();

    const [professionals, setProfessionals] = useState([])
    const [valueOfComission, setValueOfComission] = useState()
    const [metaProfessional, setProfessionalMeta] = useState({})
    const [order, setOrder] = useState({ order: "", field: "" })
    const params = {}


    const handleFilterRequest = (pagesFilter) => {

        if (pagesFilter === "previous")
            params.page = `${metaProfessional.current_page - 1}`

        if (pagesFilter === "next")
            params.page = `${metaProfessional.current_page + 1}`

        if (order.order !== "") {
            params.orderField = order.orderField
            params.order = order.order
        }

    }
    const getProfessinals = async () => {
        handleFilterRequest()
        const { data } = await api({
            method: 'get',
            url: `/professionals/?limit=5`,
            params: params
        })
        setProfessionals(data.data)
        setProfessionalMeta(data.meta)
    }
    const nextPage = () => {
        handleFilterRequest("next")
        getProfessinals()
    }

    const previousPage = () => {
        handleFilterRequest("previous")
        getProfessinals()
    }

  

        console.log(professionals)


    const handleDelete = (professional) => 
        setProfessionals(professionals.filter(item => item.id  !== professional.id))


    useEffect(() => {
        getProfessinals()
        location.state && setProfessionals(location.state.professionals.data);
    }, [order])



    return (
        <div>
            <ModalContainerProfessional>
                <CloseButton CloseButtonClickHandler={CloseButtonClickHandler} />
                <ModalTitle padding="1em">
                    Confirmar Comissões
                </ModalTitle>
                <TitleComissionProfessional>
                    <h6>Profissional</h6>
                    <h6>Comissão</h6>
                </TitleComissionProfessional>
                    {professionals?.map(professional => <Shelf professional={professional} handleDelete={handleDelete} setValueOfComission={setValueOfComission}/> )}
                <FooterModais
                    previousPage={previousPage}
                    nextPage={nextPage}
                    lastPage={metaProfessional?.last_page}
                    currentPage={metaProfessional?.current_page}
                    firstPage={metaProfessional?.first_page}
                />
                <ModalContainerButtons>
                    <CancelButton margin="-5em 0 0 0" onClick={CloseButtonClickHandler}>Cancelar</CancelButton>
                    <SaveButton margin="-5em 3em 0 1.7em" onClick={() => {}}>Confirmar</SaveButton>
                </ModalContainerButtons>
            </ModalContainerProfessional>
            <ModalOverlay />
        </div>

    )

}

