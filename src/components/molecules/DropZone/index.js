import React from 'react'
import Dropzone from 'react-dropzone'
import RedButton from '../../atoms/Buttons/RedButton/style'
import { DropContainer, Column, Message, Text,Span } from './style'
import {ReactComponent as Img} from '../../../assets/invoice.svg'

function DropZone({onUpload, data,type}) {

  function renderMessage(isDragActive, isDragReject) {
    if(!isDragActive) {
      return <Message>Arraste ou selecione o arquivo</Message>
    }
    if(isDragReject) {
      return <Message>Arquivo não suportado</Message>
    }

    return <Message>Solte o arquivos aqui</Message>
  }

  return (
    <Dropzone 
      accept={type}
      onDropAccepted={onUpload} 
      maxFiles={1}
      maxSize={5242880}
    >
      {({getRootProps, getInputProps, isDragActive, isDragReject}) => (
        <DropContainer 
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <Img />
          {!data ? 
            <Column>
              {renderMessage(isDragActive,isDragReject)}
              <Text>Largue os arquivos aqui ou <Span>clique aqui</Span> para fazer upload</Text>
            </Column>
            : 
            <Column>
              <Message>{data.file[0].name}</Message>
              <Text>{data.fileSize}</Text>
              <RedButton width="80px">Alterar</RedButton>
            </Column>
          }
          <input {...getInputProps()} />
        </DropContainer>
      )}
    </Dropzone>
  )
}

export default DropZone