import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import filesize from 'filesize'
import api from '../../../api/api'
import { toast } from 'react-toastify'
import { DefaultToast } from '../../atoms/Toast/DefaultToast'
import AlertInvoice from '../../atoms/AlertInvoice'
import DropZone from '../../molecules/DropZone'
import RegisterFooter from '../../molecules/RegisterFooter'
import TitleContainer from '../../molecules/TitleContainer'
import { getDate } from '../../utils/getDate'
import { Container, Text } from './style'
import ModalRed from '../../molecules/ModalRed'

function InvoiceUpload() {
  const history = useHistory()
  const [fileData, setFileData] = useState(null)
  const [modalIsVisible, setModalIsVisible] = useState(false)
  
  function handleUpload(file) {
    const data = {
      file,
      fileSize: filesize(file[0].size),
    }
    return setFileData(data)
  }

  const processUpload = () => {

    if(fileData === null) {
      return toast.warn(<DefaultToast text="Arraste ou selecione o arquivo primeiro."/>, {
        toastId: "fileEmpty"
      })
    }

    const data = new FormData()
    data.append('param_name_file', fileData.file[0])

    api.post('fiscalNotesProfissionals', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    })
    .then(() => {
      toast.success(<DefaultToast text="Nota fiscal enviada!" />)
      return history.push("/invoiceSending")
    })
    .catch(err => {
      return toast.error(<DefaultToast text="Não foi possível completar o upload!" />)
    })
  }

  function cancelUpload() {
    !fileData ? history.push("/invoiceSending") : setModalIsVisible(true)
  }

  return ( 
    <>
      { modalIsVisible && 
        <ModalRed
          CloseButtonClickHandler={() => {setModalIsVisible(false)}}
          redButtonClickHandler={() => {history.push("/invoiceSending")}}
          title="Cancelar o upload"
          message="Tem certeza que deseja cancelar o upload?"
        /> }
      <TitleContainer backToPath="/invoiceSending" title="Enviar NF" />
      <Container>
        <AlertInvoice 
          text="O envio das NF devem ser feitas até o dia 25 de cada mês."
        />
        <Text>
          Upload Nota Fiscal
        </Text>
        <DropZone 
          onUpload={handleUpload} 
          data={fileData}
        />
        <RegisterFooter
          cancelButtonHandler={cancelUpload}
          registerButtonHandler={processUpload}
          buttonDescription="Enviar"
        />
      </Container>
    </> 
  ) 
}

export default InvoiceUpload