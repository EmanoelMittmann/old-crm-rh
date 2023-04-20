import { useHistory, useParams } from "react-router-dom";
import RegisterCompany from "../../organisms/RegisterCompany";
import api from "../../../api/api";
import { useFormik } from "formik";
import { cleanMask } from "../../utils/cleanMask";
import { getDate } from "../../utils/getDate";
import { SectionTitle } from "../../atoms/PageTitle/style";
import RegisterFooter from "../../molecules/RegisterFooter";
import {
  RegisterProfessionalContainer,
  RegisterProfessionalTitleContainer,
} from "../RegisterProfessional/style";
import { AddressContact } from "../../organisms/Address&Contact";
import { SituationCadastion } from "../../organisms/SituationCadastion";
import { toast } from "react-toastify";
import { DefaultToast } from "../../atoms/Toast/DefaultToast";
import { useState } from "react";
import { messages } from "../../../settings/YupValidates";
import * as Yup from "yup";
import { useEffect } from "react";
import { handleErrorMessages } from "../../utils/handleErrorMessages";
import { useSelector } from "react-redux";
import { handleCEP } from "../../utils/validateCep";
import DataBank from "../../molecules/DataBank";
import ArrowRegister from "../../atoms/ArrowRegister";
import { useCallback } from "react";
import { useMemo } from "react";

export const RegisterCompanies = () => {
  const { id } = useParams();
  const [uniqueCEP, setUniqueCEP] = useState();
  const [director, setDirector] = useState([]);
  const [errors, setErrors] = useState();
  const history = useHistory();
  const isDisable = useSelector((state) => state.disableEditor);

  const schema = Yup.object().shape({
    razao_social: Yup.string().required(messages.required),
    fantasy_name: Yup.string().required(messages.required),
    cnpj: Yup.string().required(messages.required).min(18, "CNPJ Inválido"),
    is_matriz: Yup.boolean().required(messages.required),
    opening_date: Yup.date().required(messages.required),
    cep: Yup.string()
      .required(messages.required)
      .min(9, "CEP Inválido")
      .test("CEP válido", "CEP não encontrado", () => {
        if (values.cep.length === 9 && values.cep !== uniqueCEP) {
          setUniqueCEP(values.cep);
          handleCEP(values.cep).then((data) => {
            if (data.data.erro) return setFieldError("cep", "Cep Invalido!");
            const { bairro, localidade, logradouro, uf } = data.data;
            if (localidade) setFieldValue("city_name", localidade);
            if (uf) setFieldValue("uf", uf);
            if (logradouro) setFieldValue("street_name", logradouro);
            if (bairro) setFieldValue("neighborhood_name", bairro);
          });
        }
        return true;
      }),
    size: Yup.string().required(messages.required),
    director: Yup.string().required(messages.required),
    witnesses: Yup.array().min(2,messages.required),
    street_name: Yup.string().required(messages.required),
    main_cnae: Yup.array()
      .min(1, "Campo obrigatório")
      .required(messages.required),
    secondary_cnae: Yup.array()
      .min(1, "Campo obrigatório")
      .required(messages.required),
    code_and_description_of_the_legal_status: Yup.array()
      .min(1, "Campo obrigatório")
      .required(messages.required),
    registration_status: Yup.string().required(messages.required),
    house_number: Yup.number().required(messages.required),
    neighborhood_name: Yup.string().required(messages.required),
    phone_number: Yup.string().required(messages.required),
    city_name: Yup.string().required(messages.required),
    uf: Yup.string().required(messages.required),
    phone_number: Yup.string().required(messages.required),
    main_email: Yup.string().required(messages.required),
    registration_status: Yup.string().required(messages.required),
    date_of_registration_status: Yup.string().required(messages.required),
    reason_for_registration_status: Yup.string().required(messages.required),
    type_company: Yup.string().required(messages.required),
    agency: Yup.string().required(messages.required),
    account_number: Yup.string().required(messages.required),
    bank: Yup.string().required(messages.required),
    account_type: Yup.string().required(messages.required),
  });

  const formik = useFormik({
    initialValues: {
      razao_social: "",
      fantasy_name: "",
      cnpj: cleanMask(""),
      is_matriz: false,
      opening_date: "",
      state_registration: "",
      municipal_registration: "",
      size: "",
      main_cnae: [],
      secondary_cnae: [],
      code_and_description_of_the_legal_status: [],
      director: "",
      witnesses: [],
      cep: cleanMask(""),
      street_name: "",
      house_number: "",
      complement: "",
      neighborhood_name: "",
      city_name: "",
      uf: "",
      phone_number: cleanMask(""),
      main_email: "",
      secondary_email: "",
      responsible_federative_entity: "",
      registration_status: "",
      date_of_registration_status: "",
      reason_for_registration_status: "",
      date_of_special_situation: "",
      special_situation: "",
      type_company: "",
      agency: "",
      account_number: "",
      bank: "",
      account_type: "",
    },
    onSubmit: async (values) => {
      await api({
        method: id ? "put" : "post",
        url: id ? `/companies/${id}` : "/companies",
        data: id
          ? {
              ...values,
            }
          : {
              ...values,
            },
      })
        .then(() => {
          toast.success(<DefaultToast text="Empresa cadastrada." />, {
            toastId: "post",
          });
          return history.push("/company");
        })
        .catch((error) => {
          toast.error(
            <DefaultToast text={"Algo Errado, Revise os Campos!"} />,
            {
              toastId: "post",
            }
          );
          const errors = error.response.data.errors;
          setErrors(handleErrorMessages(errors));
        });
    },
    validationSchema: schema,
    isValidating: false,
    enableReinitialize: true,
  });

  const { values, setFieldValue, setFieldError } = formik;

  const goBackClickHandler = () => {
    history.push("/Company");
  };

  const getProfessionals = useCallback(async () => {
    const { data } = await api.get("/professionals?limit=50");
    setDirector(
      data.data
        .filter((witness) => witness.job.name.substring(0, 7) === "Diretor")
        .map((witness) => ({ id: witness.id, name: witness.name}))
    );
  }, []);

  const getCompanyData = useCallback(async () => {
    if (id) {
      const { data } = await api.get(`/companies/${id}`);
      Object.entries(data[0]).forEach(([property, value]) => {
        if (property.includes("date_of_registration_status")) {
          setFieldValue(property, getDate(value));
        } else if (property.includes("cnpj")) {
          setFieldValue(
            property,
            value.replace(
              /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
              "$1 $2 $3/$4-$5"
            )
          );
        } else if (property.includes("cep")) {
          let data = value.replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
          setFieldValue(property, data);
        } else if (property.includes("opening_date")) {
          setFieldValue(property, getDate(value));
        } else if (property.includes("date_of_special_situation")) {
          if (value === null) {
            return null;
          }
          setFieldValue(property, getDate(value));
        } else {
          setFieldValue(property, value);
        }
      });
    }
  }, [id]);

  useEffect(() => {
    getCompanyData();
  }, [getCompanyData]);

  useEffect(() => {
    getProfessionals();
  }, [getProfessionals]);

  useEffect(() => {
    setFieldValue("account_number", cleanMask(values.account_number));
  }, [values.account_number]);

  return (
    <>
      <RegisterProfessionalTitleContainer>
        <ArrowRegister clickHandler={goBackClickHandler} />
        <SectionTitle>{id ? "Edição de Empresa" : "Nova Empresa"}</SectionTitle>
      </RegisterProfessionalTitleContainer>
      <RegisterProfessionalContainer>
        <form id="Company" onSubmit={formik.handleSubmit}>
          <RegisterCompany
            data={formik}
            disabled={isDisable}
            diretor={director}
          />
          <DataBank data={formik} />
          <AddressContact data={formik} disabled={isDisable} />
          <SituationCadastion data={formik} disabled={isDisable} />
        </form>
        {isDisable ? (
          <RegisterFooter cancelButtonHandler={goBackClickHandler} />
        ) : (
          <RegisterFooter
            cancelButtonHandler={goBackClickHandler}
            registerButtonHandler={() => {}}
            buttonDescription={id ? "Atualizar" : "Cadastrar"}
            type="submit"
            form="Company"
          />
        )}
      </RegisterProfessionalContainer>
    </>
  );
};
