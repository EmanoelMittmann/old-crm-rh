import { useState, useEffect, useCallback } from "react";
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
  ContainerPermission,
} from "./style.js";
import { cleanMask } from "../../utils/cleanMask";
import { getDate } from "../../utils/getDate";
import { messages } from "../../../settings/YupValidates";
import { handleErrorMessages } from "../../utils/handleErrorMessages";
import { handleCEP } from "../../utils/validateCep";
import InputWithLabel from "../../atoms/InputWithLabel";
import SecondaryText from "../../atoms/SecondaryText/style";
import TechLeadAndDev from "../../molecules/techLeadAndDev";
import { PermissionsSpecial } from "../../organisms/PermissionsSpecial";
import { formatAgeValidation } from "../../utils/formatDate";
import { useLayoutEffect } from "react";

const RegisterProfessional = () => {
  const [jobs, setJobs] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [uniqueCpf, setUniqueCpf] = useState("");
  const [permissions, setPermissions] = useState([]);
  const [optionsCompany_id, setOptionsCompany_id] = useState([])
  const [cpfmessage, setCpfmessage] = useState("");
  const [uniqueCEP, setUniqueCEP] = useState("");
  const [oldValue, setOldValue] = useState([]);
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
      .test("Verificar CPF", cpfmessage, async () => {
        if (values.cpf.length === 14) {
          setUniqueCpf(values.cpf);
          try {
            const {data} = await api.post("/user/validateCpf", {
              id:id,
              cpf: values.cpf,   
            })  
            return data
 
          }catch(error){
            setCpfmessage(error.response.data.msg)
            return false
          } 
        }
 
      }),

    rg: Yup.string()
      .required(messages.required)
      .max(11, "RG deve conter no maximo 11 dígitos"),
    birth_date: Yup.string()
      .required(messages.required)
      .test('idade', 'Idade deve ser maior que 18 anos.',  (value) => {
        const maxDate = new Date();
        maxDate.setFullYear(maxDate.getFullYear() - 18); 
        const selectedDate = new Date(value);
        return selectedDate <= maxDate;
      })
      .transform((value, originalValue) => {
        const date = new Date(originalValue);
        return formatAgeValidation(date, 'yyyy-MM-dd');
      }),
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
            if (data.data.erro)
              return setFieldError("cep", "CEP não encontrado!");
            const { bairro, localidade, logradouro, uf } = data.data;
            if (localidade) setFieldValue("city_name", localidade);
            if (uf) setFieldValue("uf", uf);
            if (logradouro) setFieldValue("street_name", logradouro);
            if (bairro) setFieldValue("neighbourhood_name", bairro);
          });
        }
        return true;
      }),

    extra_hour_activated: Yup.boolean(),
    street_name: Yup.string().required(messages.required),
    house_number: Yup.number().required(messages.required),
    complement: Yup.string(),
    neighbourhood_name: Yup.string().required(messages.required),
    city_name: Yup.string().required(messages.required),
    uf: Yup.string().required(messages.required),
    telephone_number: Yup.string().required(messages.required),
    email: Yup.string().required(messages.required),
    permissions: Yup.array().required(messages.required),
    companies: Yup.array().min(1,messages.required),
    professional_data: Yup.object().shape({
      cnpj: Yup.string().required(messages.required).min(18, "CNPJ Inválido"),
      razao_social: Yup.string().required(messages.required).nullable(),
      type_person: Yup.string().required(messages.required).nullable(),
      fantasy_name: Yup.string().required(messages.required).nullable(),
      company_city_name: Yup.string().required(messages.required).nullable(),
      company_street_name: Yup.string().required(messages.required).nullable(),
      company_neighborhood_name: Yup.string().required(messages.required).nullable(),
      company_complement: Yup.string().nullable(),
      company_house_number: Yup.string().required(messages.required).nullable(),
      uf_company: Yup.string().required(messages.required).nullable(),
      company_phone_number: Yup.string().required(messages.required).nullable(),
      bank: Yup.string().required(messages.required),
      account_number: Yup.string().required(messages.required),
      agency: Yup.string().required(messages.required).max(5, "Invalido"),
      account_type: Yup.string().required(messages.required),
      type_of_transfer: Yup.string().required(messages.required),
      pix_key_type: Yup.string()
        .when(["type_of_transfer"], {
          is: (type_of_transfer) => type_of_transfer === "PIX",
          then: Yup.string().required(messages.required),
        })
        .nullable(),
      pix_key: Yup.string()
        .when(["type_of_transfer"], {
          is: (type_of_transfer) => type_of_transfer === "PIX",
          then: Yup.string().required(messages.required),
        })
        .nullable(),
      company_email: Yup.string().required(messages.required).nullable(),
      company_cep: Yup.string()
        .min(4 - 9, "CEP Inválido")
        .test("CEP válido", "CEP não encontrado", () => {
          if (
            values.professional_data?.company_cep?.length === 9 &&
            values.professional_data?.company_cep !== anotherCep
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
        })
        .required(messages.required).nullable(),
    }),
    start_date: Yup.date().required(messages.required),
    job_id: Yup.number().required(messages.required),
    company_id:Yup.number().required(messages.required),
    job_type: Yup.string().required(messages.required),
    variable1: Yup.string()
      .when(["job_type", "extra_hour_activated"], {
        is: (job_type, extra_hour_activated) =>
          job_type !== "FREELANCER" && extra_hour_activated,
        then: Yup.string().required(messages.required),
        otherwise: "",
      })
      .nullable(),
    weekly_hours: Yup.number()
      .required(messages.required)
      .test("Horas válidas", "Horas/semana excedida", () => {
        if (values.job_type === "FULLTIME" && values.weekly_hours > 40) {
          return false;
        } else if (values.job_type === "PARTTIME" && values.weekly_hours > 20) {
          return false;
        }
        return true;
      }),
    mounth_hours: Yup.number()
      .required(messages.required)
      .test("Horas válidas", "Horas/mês excedida", () => {
        if (values.job_type === "FULLTIME" && values.mounth_hours > 160) {
          return false;
        } else if (values.job_type === "PARTTIME" && values.mounth_hours > 80) {
          return false;
        }
        return true;
      }),
    fixed_payment_value: Yup.string().required(messages.required),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      cpf: "",
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
      function_job: "",
      fixed_payment_value: "",
      extra_hour_activated: false,
      variable1: "",
      variable2: cleanMask(""),
      extra_hour_value: "",
      limited_extra_hours: false,
      extra_hour_limit: "",
      user_type_id: 2,
      commission: false,
      permissions: [],
      company_id:"",
      companies:[],
      professional_data: {
        cnpj: cleanMask(""),
        razao_social: "",
        fantasy_name: "",
        company_cep: cleanMask(""),
        company_street_name: "",
        company_neighborhood_name: "",
        company_house_number: 0,
        company_complement: "",
        company_city_name: "",
        uf_company: "",
        company_phone_number: cleanMask(""),
        company_email: "",
        type_person: "",
        bank: cleanMask(""),
        account_type: "",
        agency: cleanMask(""),
        account_number: "",
        type_of_transfer: "",
        pix_key_type: "",
        pix_key: cleanMask(""),
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
          toast.success(
            <DefaultToast
              text={id ? "Profissional Atualizado e contrato enviado com sucesso!" : "Profissional cadastrado e contrato enviado com sucesso!"}
            />,
            {
              toastId: "post",
            }
          );
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

  const {
    values,
    setFieldValue,
    setFieldError,
    setErrors,
    setFieldTouched,
    touched,
    errors,
    handleChange,
  } = formik;

  const getPermissions = useCallback(async () => {
    const { data } = await api.get("/permissions");
    setPermissions(data);
  },[])

  const reloadProjects = useCallback(async () => {
    const { data } = await api({
      method: "get",
      url: `/userProjects/user/${id}`,
    });
    setProjects(data);
  }, [id]);

  const goBackClickHandler = () => {
    history.push("/professionals");
  };

  const optionsJob = useCallback(async () => {
    const response = await api({
      method: "get",
      url: `/job/?is_active=1&limit=''`,
    });
    setJobs(response.data.data);
  }, []);
  const optionsCompanies = useCallback(async () => {
    const response = await api({
      method: "get",
      url: `/companies`,
    });
    setOptionsCompany_id(response.data.data);
  }, []);
 

  const getAllProjects = useCallback(async () => {
    const { data } = await api({
      method: "get",
      url: "/project",
    });
    setAllProjects(data.data);
  }, []);

  async function addProject(
    id_project,
    workload,
    extra_hours_limit,
    is_tech_lead
  ) {
    try {
      await api.post(`/userProjects/user/${id}`, {
        id: id_project,
        extra_hours_estimated: extra_hours_limit,
        extra_hours_performed: 0,
        hours_mounths_estimated: workload,
        hours_mounths_performed: 0,
        isTechLead: is_tech_lead,
        job_: null,
        status: null,
      });

      toast.success(<DefaultToast text="Projeto vinculado." />, {
        toastId: "post",
      });

      reloadProjects();
    } catch (error) {
      toast.error(<DefaultToast text="Erro ao vincular projeto." />, {
        toastId: "post",
      });
    }
  }

  async function removeProject(project) {
    try {
      await api({
        method: "delete",
        url: `/userProjects/user/${id}`,
        data: {
          project_id: project,
        },
      });
      toast.success(<DefaultToast text="Projeto removido." />, {
        toastId: "delete",
      });
      reloadProjects();
    } catch (error) {
      toast.error(
        <DefaultToast text="Erro ao remover projeto. Por favor, tente novamente mais tarde." />,
        {
          toastId: "delete",
        }
      );
    }
  }

  async function editProject(project, workload, extra_hours_limit) {
    try {
      await api.put(`/userProjects/user/${id}`, {
        id: project,
        workload,
        extra_hours_limit,
      });
      toast.success(<DefaultToast text="Projeto atualizado." />, {
        toastId: "put",
      });
      reloadProjects();
    } catch (error) {
      toast.error(<DefaultToast text="Erro ao atualizar projeto." />, {
        toastId: "put",
      });
    }
  }

  const getProfessionalData = useCallback(async () => {
    if (!jobs.length) optionsJob();
    if (!optionsCompany_id.length) optionsCompanies();
    if (!allProjects.length) getAllProjects();
    if (id) {
      const { data } = await api.get(`/user/${id}`);
      setOldValue(data[0]);
      Object.entries(data[0]).forEach(([property, value]) => {
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
        
        } else if (property.includes("extra_hour_value")) {
          setFieldValue(property, String(value).replace(".", ","));
        } else if (property.includes("permissions")) {
          setFieldValue(
            property,
            value.map((item) => item.id)
          );
        } else if (property.includes('userCompanies')) {
          setFieldValue(
            'companies',
            value.map(item => item.id)
          )
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
        } else {
          setFieldValue(property, value);
        }
      });
      reloadProjects();
      return () => {
        setJobs([]);
        setAllProjects([]);
      };
    }
  },[jobs,optionsCompany_id,allProjects,id]);

  useEffect(() => {
    getProfessionalData();
    if(!permissions.length){
      getPermissions();
    }
  },[id]);


  function maskValueVariabled(values, setFieldValue) {
    setFieldValue(
      "variable2",
      Number(
        values.fixed_payment_value
          .replace("R$", "")
          .replace(".", "")
          .replace(",00", "")
      )
    );
  }
  function calculateExtraHourValue(values, setFieldValue) {
    if (values.variable1 > 0 && values.variable2 !== "") {
      let calc = values.variable2 / values.variable1;
      setFieldValue(
        "extra_hour_value",
        "R$" + calc.toFixed(2).toString().replace(".", ",")
      );
    }
  }
  useEffect(() => {
    if(values.professional_data){
      setFieldValue(
        "professional_data.account_number",
        values.professional_data.account_number.replace("-", "")
      );
    }
    return
  }, [values?.professional_data?.account_number]);

  function resetPixKeyIfNecessary(
    values,
    oldValue,
    setFieldValue,
    setOldValue
  ) {
    const verified = oldValue?.professional_data?.pix_key_type === values.professional_data.pix_key_type &&
      oldValue?.professional_data?.type_of_transfer === values.professional_data.type_of_transfer;
    if (!verified) {
      setFieldValue("professional_data.pix_key", "");
    }
    setOldValue([]);
  }

  useEffect(() => {
    maskValueVariabled(values, setFieldValue);
    calculateExtraHourValue(values, setFieldValue);
  }, [values.variable1, values.variable2, values.fixed_payment_value]);

  useEffect(() => {
    if(values.professional_data){
      resetPixKeyIfNecessary(values, oldValue, setFieldValue, setOldValue);
    }
    return;
  }, [
    values.professional_data?.pix_key_type,
    values.professional_data?.type_of_transfer,
  ]);


  return (
    <>
      <RegisterProfessionalTitleContainer>
        <ArrowRegister clickHandler={goBackClickHandler} />
        <SectionTitle>
          {id ? "Edição de profissional" : "Novo profissional" }
        </SectionTitle>
      </RegisterProfessionalTitleContainer>

      <RegisterProfessionalContainer>
        <form id="professional" onSubmit={formik.handleSubmit}>
          <RegisterProfessionalsData data={formik} optionsCompany_id={optionsCompany_id}/>
          <EmploymentContract data={formik} jobs={jobs} optionsCompany_id={optionsCompany_id}/>
          <SecondaryText margin="2.5em 0 1.5em 2em">Permissões</SecondaryText>
          <ContainerPermission>
            <PermissionsSpecial permissions={permissions} formik={formik} />
          </ContainerPermission>

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
        <div className="techlead">
          <SecondaryText margin="2.5em 0 0 3em">Função</SecondaryText>
          <TechLeadAndDev formik={formik} />
        </div>

        <AttachmentProject
          allOptions={allProjects}
          attachment={attachment}
          data={formik}
        />
        {/* <InputWithLabel
          name="tools"
          width="100%"
          margin="10px"
          widthContainer="30%"
          label="Ferramentas"
          justify="center"
          padding="0 1em 0 3.5em"
          handleBlur={setFieldTouched}
          error={errors.tools}
          touched={touched.tools}
          value={values.tools}
          onChange={handleChange("tools")}
        /> */}
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
