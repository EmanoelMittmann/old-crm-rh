import { toast } from "react-toastify";
import { DefaultToast } from "../atoms/Toast/DefaultToast";

export function requestCheckDataInvalid(response) {
  response.data.error.map((index) => {
    switch (index) {
      case "CPF da nota fiscal não corresponde ao do cadastro do usuário":
        toast.error(<DefaultToast text="CPF não corresponde ao cadastro" />);
        break;
      case "CNPJ da nota fiscal não corresponde a nenhuma empresa na ordem de serviço do usuário":
        toast.error(
          <DefaultToast text="CNPJ não corresponde a Ordem de serviço" />
        );
        break;
      case "Valor da nota fiscal não corresponde ao valor da ordem de serviço do usuário":
        toast.error(
          <DefaultToast text="Valor da nota fiscal  não corresponde a Ordem de serviço" />
        );
        break;
      case "Nenhuma ordem de serviço foi gerada para o usuário":
        toast.error(
          <DefaultToast text="Nenhuma ordem de serviço foi gerada para o usuário"/>
        )
      default:
        break;
    }
  });
}
