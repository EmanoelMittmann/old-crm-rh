import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import filesize from "filesize";
import api from "../../../api/api";
import { toast } from "react-toastify";
import { DefaultToast } from "../../atoms/Toast/DefaultToast";
import AlertInvoice from "../../atoms/AlertInvoice";
import DropZone from "../../molecules/DropZone";
import RegisterFooter from "../../molecules/RegisterFooter";
import TitleContainer from "../../molecules/TitleContainer";
import { Container, Text } from "./style";
import ModalRed from "../../molecules/ModalRed";
import fileSize from "filesize";
import { requestCheckDataInvalid } from "../../utils/requestCheckDataInvalid";

function InvoiceUpload() {
  const history = useHistory();
  const [filePDF, setFilePDF] = useState(null);
  const [fileXML, setFileXML] = useState(null);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function handleFileChange(file) {
    const data = {
      file,
      fileSize: filesize(file[0].size),
    };
    return setFilePDF(data);
  }

  function handleXmlChange(file) {
    const data = {
      file,
      filesize: fileSize(file[0].size),
    };
    return setFileXML(data);
  }

  const processUpload = () => {
    if (filePDF === null || fileXML === null) {
      return toast.warn(
        <DefaultToast text="Arraste ou selecione o arquivo primeiro." />,
        {
          toastId: "fileEmpty",
        }
      );
    }

    const uploadFile = async (file, url) => {
      try {
        const response = await fetch(url, {
          method: 'PUT',
          body: file,
        });

        if (response.ok) {
          console.log('Arquivo enviado com sucesso!');
        } else {
          console.error('Erro ao enviar arquivo:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao enviar arquivo:', error);
      }
    };

    const pdfUrl = 'https://ubi-labs-development.s3.amazonaws.com/uploads/85/pdf/2/MatheusTesteDaSilva.pdf?AWSAccessKeyId=AKIAYABDEGGGLHNOL454&Expires=1687193476&Signature=efYCI1HNzEtg7Tpj8OGvafWUFvw%3D';
    const xmlUrl = 'https://ubi-labs-development.s3.amazonaws.com/uploads/85/xml/2/MatheusTesteDaSilva.xml?AWSAccessKeyId=AKIAYABDEGGGLHNOL454&Expires=1687193476&Signature=tmihB%2FMI1SurMJ5BhrqebTVORaY%3D';

    const pdfFile = filePDF.file[0];
    const xmlFile = fileXML.file[0];

    Promise.all([
      uploadFile(pdfFile, pdfUrl),
      console.log(pdfFile, pdfUrl),
      uploadFile(xmlFile, xmlUrl),
    ])
      .then(() => {
        const data = new FormData();
        data.append("param_name_file", filePDF[0]);
        data.append("param_name_xml", fileXML[0]);

        api
          .post("fiscalNotesProfissionals", data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })

          .then((response) => {
            if (response.data.error) {
              requestCheckDataInvalid(response);
            }
            if (response.data.error && response.data.error.length > 0) {
              const errorMessage = response.data.error[0];
              toast.error(<DefaultToast text={errorMessage} />)
            } else {
              toast.success(<DefaultToast text="Nota fiscal enviada!" />);
              return history.push("/invoiceSending");
            }
          })
          .catch((err) => {
            return toast.error(
              <DefaultToast text="Não foi possível completar o upload!" />
            );
          });
      })
      .catch((error) => {
        console.error('Erro ao enviar arquivo:', error);
      });
  };

  function cancelUpload() {
    !filePDF ? history.push("/invoiceSending") : setModalIsVisible(true);
  }



  return (
    <>
      {modalIsVisible && (
        <ModalRed
          CloseButtonClickHandler={() => {
            setModalIsVisible(false);
          }}
          redButtonClickHandler={() => {
            history.push("/invoiceSending");
          }}
          title="Cancelar o upload"
          message="Tem certeza que deseja cancelar o upload?"
        />
      )}
      <TitleContainer backToPath="/invoiceSending" title="Enviar NF" />
      <Container>
        <AlertInvoice text="O envio das NF devem ser feitas até o dia 25 de cada mês." />
        <Text>Upload Nota Fiscal</Text>
        <DropZone
          onUpload={handleFileChange}
          data={filePDF}
          type="application/pdf"
        />
        <DropZone
          onUpload={handleXmlChange}
          data={fileXML}
          type="text/xml"
          xml="xml"
        />
        <RegisterFooter
          cancelButtonHandler={cancelUpload}
          registerButtonHandler={processUpload}
          buttonDescription="Enviar"
        />
      </Container>
    </>
  );
}

export default InvoiceUpload;
