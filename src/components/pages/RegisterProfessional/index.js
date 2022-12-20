import React, { useState, useEffect, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../../../api/api";
import { toast } from "react-toastify";
import ArrowRegister from "../../atoms/ArrowRegister";
import OvertimePayCalc from "../../atoms/OvertimePayCalc";
import { SectionTitle } from "../../atoms/PageTitle/style.js";
import { DefaultToast } from "../../atoms/Toast/DefaultToast";
import EmploymentContract from "../../molecules/EmploymentContract";
import ProfessionalsExtraHour from "../../molecules/ProfessionalsExtraHour";
import RegisterFooter from "../../molecules/RegisterFooter";
import AttachmentProject from "../../organisms/Attachment/Project";
import RegisterProfessionalsData from "../../organisms/RegisterProfessionalsData";
import {
  RegisterProfessionalTitleContainer,
  RegisterProfessionalContainer,
} from "./style.js";
import { cleanMask } from "../../utils/cleanMask";
import { getDate } from "../../utils/getDate";
import { messages } from "../../../settings/YupValidates";
import { handleErrorMessages } from "../../utils/handleErrorMessages";
import { handleCEP } from "../../utils/validateCep";
import InputWithLabel from "../../atoms/InputWithLabel";

const RegisterProfessional = () => {
  const [jobs, setJobs] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [uniqueCpf, setUniqueCpf] = useState("");
  const [cpfValid, setCpfValid] = useState(false);
  const [uniqueCEP, setUniqueCEP] = useState("");
  const [anotherCep, setAnotherCEP] = useState("");
  const [extraHour, setExtraHour] = useState("");
  const history = useHistory();
  const { id } = useParams();
  const attachment = {
    projects,
    setProjects,
    addProject,
    removeProject,
    editProject,
  };

  const schema = Yup.object().shape({
    name: Yup.string().required(messages.required),
    cpf: Yup.string()
      .required(messages.required)
      .min(14, "CPF inválido")
      .test("Verificar CPF", "CPF já existe", () => {
        if (values.cpf.length === 14 && values.cpf !== uniqueCpf) {
          setUniqueCpf(values.cpf);
          validateCpf(values.cpf)
            .then((response) => {
              if (response.data) {
                setCpfValid(true);
              } else {
                setCpfValid(false);
              }
            })
            .catch((error) => false);
        }
        return true;
      }),

    rg: Yup.string().required(messages.required),
    birth_date: Yup.string().required(messages.required),
    cep: Yup.string()
      .required(messages.required)
      .min(4 - 9, "CEP Inválido")
      .test("CEP válido", "CEP não encontrado", () => {
        if (
          values.cep.length === 9 &&
          values.cep !== uniqueCEP &&
          values.country == "Brazil"
        ) {
          setUniqueCEP(values.cep);
          handleCEP(values.cep).then((data) => {
            if (data.data.erro) return setFieldError("cep", "Cep Invalido!");
            const { bairro, localidade, logradouro, uf } = data.data;
            if (localidade) setFieldValue("city_name", localidade);
            if (uf) setFieldValue("uf", uf);
            if (logradouro) setFieldValue("street_name", logradouro);
            if (bairro) setFieldValue("neighbourhood_name", bairro);
          });
        }
        return true;
      }),

    street_name: Yup.string().required(messages.required),
    house_number: Yup.number().required(messages.required),
    complement: Yup.string(),
    neighbourhood_name: Yup.string().required(messages.required),
    city_name: Yup.string().required(messages.required),
    uf: Yup.string().required(messages.required),
    telephone_number: Yup.string().required(messages.required),
    email: Yup.string().required(messages.required),
    professional_data: Yup.object().shape({
      cnpj: Yup.string().min(18, "CNPJ Inválido"),
      razao_social: Yup.string(),
      fantasy_name: Yup.string(),
      company_city_name: Yup.string(),
      company_street_name: Yup.string(),
      company_neighborhood_name: Yup.string(),
      company_complement: Yup.string(),
      company_house_number: Yup.string(),
      uf_campany: Yup.string(),
      company_phone_number: Yup.string(),
      bank: Yup.string(),
      agency: Yup.string().max(5, "Invalido"),
      account_type: Yup.string(),
      type_of_transfer:Yup.string(),
      pix_key_type: Yup.string(),
      pix_key: Yup.string(),
      account_number: Yup.number(),
      company_email: Yup.string(),
      company_cep: Yup.string()
        .required(messages.required)
        .min(4 - 9, "CEP Inválido")
        .test("CEP válido", "CEP não encontrado", () => {
          if (
            values.professional_data.company_cep.length === 9 &&
            values.professional_data.company_cep !== anotherCep
          ) {
            setAnotherCEP(values.professional_data.company_cep);
            handleCEP(values.professional_data.company_cep).then((data) => {
              if (data.data.erro) return setFieldError("cep", "Cep Invalido!");
              const { bairro, localidade, logradouro, uf } = data.data;
              if (localidade)
                setFieldValue(
                  "professional_data.company_city_name",
                  localidade
                );
              if (uf) setFieldValue("professional_data.uf_company", uf);
              if (logradouro)
                setFieldValue(
                  "professional_data.company_street_name",
                  logradouro
                );
              if (bairro)
                setFieldValue(
                  "professional_data.company_neighborhood_name",
                  bairro
                );
            });
          }
          return true;
        }),
    }),
    start_date: Yup.date().required(messages.required),
    job_id: Yup.number().required(messages.required),
    job_type: Yup.string().required(messages.required),
    weekly_hours: Yup.number()
      .required(messages.required)
      .max(44, "Horas/semana excedida"),
    mounth_hours: Yup.number()
      .required(messages.required)
      .max(176, "Horas/mês excedida"),
    fixed_payment_value: Yup.string().required(messages.required),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      cpf: cleanMask(""),
      rg: "".toString(),
      birth_date: "",
      avatar:
        "https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png",
      cep: cleanMask(""),
      street_name: "",
      house_number: "",
      complement: "",
      neighbourhood_name: "",
      city_name: "",
      country: "Brazil",
      uf: "",
      tools: "",
      telephone_number: cleanMask(""),
      email: "",
      start_date: "",
      job_id: "",
      job_type: "",
      weekly_hours: "",
      mounth_hours: "",
      is_tech_lead: true,
      fixed_payment_value: cleanMask(""),
      extra_hour_activated: true,
      variable1: "",
      variable2: cleanMask(""),
      extra_hour_value: "",
      limited_extra_hours: false,
      extra_hour_limit: "",
      user_type_id: 2,
      commission: true,
      professional_data: {
        cnpj: cleanMask(""),
        razao_social: "",
        fantasy_name: "",
        company_cep: cleanMask(""),
        company_street_name: "",
        company_neighborhood_name: "",
        company_house_number: "",
        company_complement: "",
        company_city_name: "",
        uf_company: "",
        company_phone_number: cleanMask(""),
        company_email: "",
        bank: cleanMask(""),
        account_type: "",
        agency: "",
        account_number: "",
        type_of_transfer:"",
        pix_key_type:"",
        pix_key:"",
      },
    },
    onSubmit: async (values) => {
      await api({
        method: id ? "put" : "post",
        url: id ? `/user/${id}` : "/user",
        data: !id
          ? {
              ...values,
              extra_hour_value: parseFloat(
                values.extra_hour_value.replace("R$", "").replace(",", ".")
              ),
              fixed_payment_value: values.fixed_payment_value
                .replace("R$", "")
                .replace(".", "")
                .replace(",00", ""),
              telephone_number: values.telephone_number
                .toString()
                .replace("(", "")
                .replace(")", "")
                .replace(" ", "")
                .replace(" ", "")
                .replace("-", ""),
              cpf: cleanMask(values.cpf),
              cep: cleanMask(values.cep),
              rg: values.rg.toString(),
              projects,
            }
          : {
              ...values,
              extra_hour_value: parseFloat(
                values.extra_hour_value.replace("R$", "").replace(",", ".")
              ),
              fixed_payment_value: values.fixed_payment_value
                .replace("R$", "")
                .replace(".", "")
                .replace(",00", ""),
              telephone_number: values.telephone_number
                .toString()
                .replace("(", "")
                .replace(")", "")
                .replace(" ", "")
                .replace(" ", "")
                .replace("-", ""),
              cpf: cleanMask(values.cpf),
              cep: cleanMask(values.cep),
              rg: values.rg.toString(),
            },
      })
        .then(() => {
          toast.success(<DefaultToast text="Profissional cadastrado." />, {
            toastId: "post",
          });
          return history.push("/professionals");
        })
        .catch((error) => {
          toast.error(<DefaultToast text="Há error de validação" />, {
            toastId: "post",
          });
          const errors = error.response.data.errors;
          setErrors(handleErrorMessages(errors));
        });
    },
    validationSchema: schema,
    isValidating: false,
    enableReinitialize: true,
  });

  const { values, setFieldValue, setFieldError, setErrors, setFieldTouched, touched, errors, handleChange} =
    formik;

  const reloadProjects = useCallback(async () => {
    const { data } = await api({
      method: "get",
      url: `/userProjects/user/${id}`,
    });
    setProjects(data);
  }, []);

  const validateCpf = async (cpf) => {
    const response = await api({
      method: "post",
      url: "/user/validateCpf",
      data: { cpf: cpf },
    });
    return response;
  };

  const goBackClickHandler = () => {
    history.push("/professionals");
  };

  const optionsJob = useCallback(async () => {
    const response = await api({
      method: "get",
      url: `/job/?is_active=1&limit=undefined&?orderField=name&order=asc`,
    });
    setJobs(response.data.data);
  }, []);

  const getAllProjects = useCallback(async () => {
    const { data } = await api({
      method: "get",
      url: "/project",
    });
    setAllProjects(data.data);
  }, []);

  async function addProject(id_project, workload, extra_hours_limit , is_tech_lead) {
    await api({
      method: "post",
      url: `/userProjects/user/${id}`,
      data: {
        id: id_project,
        extra_hours_estimated: extra_hours_limit,
        extra_hours_performed:null,
        hours_mounths_estimated: workload,
        hours_mounths_performed:null,
        isTechLead: is_tech_lead,
        job_: null,
        status: null
      },
    })
      .then(() => {
        toast.success(<DefaultToast text="Projeto vinculado." />, {
          toastId: "post",
        });
        reloadProjects();
      })
      .catch((error) => {
        toast.error(<DefaultToast text="Erro ao vincular projeto." />, {
          toastId: "post",
        });
      });
  }

  async function removeProject(project) {
    await api({
      method: "delete",
      url: `/userProjects/user/${id}`,
      data: {
        project_id: project,
      },
    })
      .then(() => {
        toast.success(<DefaultToast text="Projeto removido." />, {
          toastId: "delete",
        });
        reloadProjects();
      })
      .catch((error) => {
        toast.error(<DefaultToast text="Erro ao remover projeto." />, {
          toastId: "delete",
        });
      });
  }

  async function editProject(project, workload, extra_hours_limit) {
    await api({
      method: "put",
      url: `/userProjects/user/${id}`,
      data: {
        id: project,
        workload: workload,
        extra_hours_limit: extra_hours_limit,
      },
    })
      .then(() => {
        toast.success(<DefaultToast text="Projeto atualizado." />, {
          toastId: "put",
        });
        reloadProjects();
      })
      .catch((error) => {
        toast.error(<DefaultToast text="Erro ao atualizar projeto." />, {
          toastId: "put",
        });
      });
  }

  const getProfessionalData = async   () => {
    if (!jobs.length) optionsJob();
    if (!allProjects.length) getAllProjects();
    if (id) {
      await api({
        method: "get",
        url: `/user/${id}`,
      })
        .then((response) => {
          const data = response.data[0];
          Object.entries(data).forEach(([property, value]) => {
            if (property.includes("date")) {
              setFieldValue(property, getDate(value));
            } else if (property.includes("cnpj")) {
              setFieldValue(
                property,
                value.replace(
                  /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
                  "$1 $2 $3/$4-$5"
                )
              );
            } else if (property.includes("fixed_payment_value")) {
              setFieldValue(property, `R$${value},00`);
            } else if (property.includes("cep")) {
              let data = value.replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
              setUniqueCEP(data);
              setFieldValue(property, data);
            } else if (property.includes("company_cep")) {
              let data = value.replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
              setAnotherCEP(data);
              setFieldValue(property, data);
            } else if (property.includes("cpf")) {
              let data = value.replace(
                /(\d{3})(\d{3})(\d{3})(\d{2})/,
                "$1.$2.$3-$4"
              );
              setUniqueCpf(data);
              setFieldValue(property, data);
            } else if (property.includes("extra_hour_value")) {
              setFieldValue(property, String(value).replace(".", ","));
            } else {
              setFieldValue(property, value);
            }
          });
        })
        .catch((error) => {
          new Error(error.message);
        });
      reloadProjects();
    }
    return () => {
      setJobs([]);
      setAllProjects([]);
    };

  }
  useEffect(() => {
    getProfessionalData()
  }, [id]);

  useEffect(() => {
    setFieldValue(
      "variable2",
      Number(
        values.fixed_payment_value
          .replace("R$", "")
          .replace(".", "")
          .replace(",00", "")
      )
    );
  }, [values.fixed_payment_value]);

  useEffect(() => {
    if (values.variable1 > 0 && values.variable2 !== "") {
      let calc = values.variable2 / values.variable1;
      setFieldValue(
        "extra_hour_value",
        "R$" + calc.toFixed(2).toString().replace(".", ",")
      );
    }
  }, [values.variable1, values.variable2]);
  return (
    <>
      <RegisterProfessionalTitleContainer>
        <ArrowRegister clickHandler={goBackClickHandler} />
        <SectionTitle>
          {id ? "Edição de profissional" : "Novo profissional"}
        </SectionTitle>
      </RegisterProfessionalTitleContainer>
      <RegisterProfessionalContainer>
        <form id="professional" onSubmit={formik.handleSubmit}>
          <RegisterProfessionalsData data={formik} />
          <EmploymentContract data={formik} jobs={jobs} />
          <ProfessionalsExtraHour
            extraHour={extraHour}
            setExtraHour={setExtraHour}
            setFieldValue={setFieldValue}
            data={values}
          />
          {values.extra_hour_activated !== false ? (
            <OvertimePayCalc data={formik} />
          ) : (
            <></>
          )}
        </form>
        <AttachmentProject
          allOptions={allProjects}
          attachment={attachment}
          data={formik}
        />
        <InputWithLabel
          name="tools"
          width="100%"
          margin='10px'
          widthContainer="30%"
          label="Ferramentas"
          justify="center"
          padding="0 1em 0 3.5em"
          handleBlur={setFieldTouched}
          error={errors.tools}
          touched={touched.tools}
          value={values.tools}
          onChange={handleChange("tools")}
        />
        <RegisterFooter
          cancelButtonHandler={goBackClickHandler}
          registerButtonHandler={() => {}}
          buttonDescription={id ? "Atualizar" : "Cadastrar"}
          type="submit"
          form="professional"
        />
      </RegisterProfessionalContainer>
    </>
  );
};

export default RegisterProfessional;
