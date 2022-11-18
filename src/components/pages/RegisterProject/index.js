import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router';
import api from '../../../api/api.js';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { handleErrorMessages } from '../../utils/handleErrorMessages';
import ArrowRegister from '../../atoms/ArrowRegister/index.js';
import { SectionTitle } from '../../atoms/PageTitle/style.js';
import RegisterFooter from '../../molecules/RegisterFooter/index.js';
import ModalRed from '../../molecules/ModalRed/index.js';
import RegisterProjectData from '../../organisms/RegisterProjectData';
import AttachmentTeam from '../../organisms/Attachment/Team';
import { RegisterProjectTitleContainer } from './style.js';
import { messages } from '../../../settings/YupValidates.js';
import { formatFirstLetter } from '../../utils/formatFirstLetter.js';
import { getDate } from '../../utils/getDate.js';
import { DefaultToast } from '../../atoms/Toast/DefaultToast.js';
import { toast } from 'react-toastify';
import { Container } from '../../atoms/Container/index.js';

const RegisterProject = (props) => {
  const history = useHistory();
  const [typeOptions, setTypeOptions] = useState([]);
  const [statusOptions, setStatusOptions] = useState([]);
  const [team, setTeam] = useState([]);
  const [teamPayload, setTeamPayload] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [modalWarningIsVisible, setModalWarningIsVisible] = useState(false);
  const { id } = useParams();

  const schema = Yup.object().shape({
    name: Yup.string().required(messages.required),
    date_start: Yup.string()
      .required(messages.required)
      .test('Data válida', 'Insira uma data menor que a data final', () =>
        validDate()
      ),
    date_end: Yup.string()
      .required(messages.required)
      .test('Data válida', 'Insira uma data maior que a data inicial', () =>
        validDate()
      ),
    date_start_performed: Yup.string().required(messages.required),
    date_end_performed: Yup.string().test(
      'Data válida',
      'Insira uma data maior que a data inicial',
      () => {
        if (
          values.date_start !== '' &&
          values.date_start_performed !== '' &&
          values.date_end_performed !== ''
        ) {
          if (
            values.date_start > values.date_end_performed &&
            values.date_start_performed > values.date_end_performed
          ) {
            return false;
          }
          return true;
        }
        return true;
      }
    ),
    project_status_id: Yup.number().required(messages.required),
    project_type_id: Yup.number().required(messages.required),
    team_cost: Yup.string().required(messages.required),
    id: Yup.number().required(messages.required),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      date_start: '',
      date_end: '',
      date_end_performed: '',
      project_status_id: 0,
      project_type_id: 0,
      team_cost: '',
      id: '',
      date_start_performed: '',
    },

    onSubmit: async (values) => {
      if (id) {
        delete values.users;
      }
      await api({
        method: id ? 'put' : 'post',
        url: id ? `/project/${id}` : '/project',
        data: id
          ? {
            ...values,
            team_cost: values.team_cost
              .replace('R$', '')
              .replace('.', '')
              .replace(',', '.'),
          }
          : {
            ...values,
            users: teamPayload,
            team_cost: values.team_cost
              .replace('R$', '')
              .replace('.', '')
              .replace(',', '.'),
          },
      })
        .then((res) => {
          console.log(res)
          if(res.data = `Project with ID: ${values.id} already exists and cannot be duplicated`){
            return toast.error(<DefaultToast text="Id do projeto ja Existente !" />);
          }else{
            toast.success(<DefaultToast text="Projeto salvo!" />);
            goBackClickHandler();
          }
        })
        .catch((error) => {
          toast.error(<DefaultToast text="Há erros de validação!" />);
          const errors = error.response.data.errors;
          setErrors(handleErrorMessages(errors));
        });
    },
    validationSchema: schema,
    isValidating: false,
    enableReinitialize: true,
  });

  const { values, setFieldValue, setErrors } = formik;

  function validDate() {
    if (values.date_end !== '' && values.date_start !== '') {
      if (values.date_start > values.date_end) {
        return false;
      }

      return true;
    }
    return true;
  }

  const getProjectTypeOption = useCallback(async () => {
    const { data } = await api({
      method: 'get',
      url: `/projectTypeNoFilter`,
    });
    const formattedOptions = formatFirstLetter(data);
    setTypeOptions(formattedOptions);
  }, []);

  const getStatusOptions = useCallback(async () => {
    const { data } = await api({
      method: 'get',
      url: `/projectStatusNoFilter`,
    });
    const formattedStatusOptions = formatFirstLetter(data);
    setStatusOptions(formattedStatusOptions);
  }, []);

  const getAllProfessionals = useCallback(async () => {
    const { data } = await api({
      method: 'get',
      url: `/professionals/?limit=undefined`,
    });
    setAllUsers(data.data.filter((item) => item.is_active === true));
  }, []);

  const getTeam = async () => {
    await api({
      method: 'get',
      url: `/userProjects/project/${id}`,
    }).then(({ data }) => {
      setTeam(data);
    });
  };
  useEffect(() => {
    if (!typeOptions.length) getProjectTypeOption();
    if (!typeOptions.length) getStatusOptions();
    if (!allUsers.length) getAllProfessionals();
    if (id) {
      api({
        method: 'get',
        url: `/project/${id}`,
      }).then(async (response) => {
        const data = response.data[0];
        Object.entries(data).forEach(([property, value]) => {
          if (property.includes('date')) {
            setFieldValue(property, getDate(value));
          } else if (property.includes('team_cost')) {
            setFieldValue(property, 'R$' + String(value).replace('.', ','));
          } else {
            setFieldValue(property, value);
          }
        });
      });
      getTeam();
    }

    return () => {
      setStatusOptions([]);
      setTypeOptions([]);
      setAllUsers([]);
    };
  }, []);

  useEffect(() => {
    setTeamPayload([]);
    handlePayloadTeam();
  }, [team]);

  const goBackClickHandler = () => {
    history.push('/projects');
  };

  const CloseButtonClickHandler = () => {
    setModalWarningIsVisible(false);
  };

  const footerCancelButtonHandler = () => {
    return setModalWarningIsVisible(true);
  };

  function handlePayloadTeam() {
    team.map((user) => {
      setTeamPayload((oldState) => [
        ...oldState,
        {
          user_id: user.id,
          hours_mounths_estimated: user.hours_estimed,
          extra_hours_estimated: user.extrasHours_estimed,
          job_: user.job,
          isTechLead: false,
        },
      ]);
    });
  }

  function addMember(
    professionalSelected,
    hoursMonth,
    overtime,
    isTechLead,
    jobProject
  ) {
    api({
      method: 'post',
      url: `/userProjects/project/${id}`,
      data: {
        user_id: professionalSelected,
        hours_mounths_estimated: hoursMonth,
        hours_mounths_performed: null,
        extra_hours_estimated: overtime,
        extra_hours_performed: null,
        isTechLead: isTechLead,
        job_: isTechLead ? "TechLead" : jobProject
      },
    })
      .then(async (response) => {
        toast.success(<DefaultToast text="Profissional adicionado." />, {
          toastId: 'post',
        });
        getTeam();
      })
      .catch((error) => {
        toast.error(<DefaultToast text="Erro ao adicionar profissional." />, {
          toastId: 'post',
        });
      });
  }

  function removerMember(user_id) {
    api({
      method: 'delete',
      url: `/userProjects/project/${id}`,
      data: {
        user_id: user_id,
      },
    })
      .then(async (response) => {
        toast.success(<DefaultToast text="Profissional removido." />, {
          toastId: 'delete',
        });
        getTeam();
      })
      .catch((error) => {
        toast.error(<DefaultToast text="Erro ao remover profissional." />, {
          toastId: 'delete',
        });
      });
  }

  function editMember(user_id, workload, extra_hours_limit, jobProject, status) {
    api({
      method: 'put',
      url: `/userProjects/project/${id}`,
      data: {
        user_id: user_id,
        hours_mounths_estimated: workload,
        hours_mounths_performed: null,
        extra_hours_estimated: extra_hours_limit,
        extra_hours_performed: null,
        job_: jobProject,
        status: status
      },
    })
      .then(async (response) => {
        toast.success(<DefaultToast text="Profissional atualizado." />, {
          toastId: 'put',
        });
        getTeam();
      })
      .catch((error) => {
        toast.error(<DefaultToast text="Erro ao atualizar profissional." />, {
          toastId: 'put',
        });
      });
  }

  const attachment = {
    team,
    setTeam,
    getTeam,
    addMember,
    removerMember,
    editMember,
  };

  return (
    <>
      {modalWarningIsVisible && (
        <ModalRed
          CloseButtonClickHandler={CloseButtonClickHandler}
          redButtonClickHandler={goBackClickHandler}
          title={id ? 'Cancelar alterações' : 'Cancelar cadastro'}
          message={
            id
              ? 'Tem certeza que deseja cancelar as alterações?'
              : 'Tem certeza que deseja cancelar a operação?'
          }
        />
      )}
      <RegisterProjectTitleContainer>
        <ArrowRegister clickHandler={goBackClickHandler} />
        <SectionTitle>{id ? 'Edição de projeto' : 'Novo Projeto'}</SectionTitle>
      </RegisterProjectTitleContainer>

      <Container>
        <form id="register" onSubmit={formik.handleSubmit}>
          <RegisterProjectData
            data={formik}
            typeOptions={typeOptions}
            statusOptions={statusOptions}
          />
        </form>
        <AttachmentTeam allOptions={allUsers} attachment={attachment} />
        <RegisterFooter
          cancelButtonHandler={footerCancelButtonHandler}
          registerButtonHandler={() => { }}
          buttonDescription={id ? 'Atualizar' : 'Cadastrar'}
          type="submit"
          form="register"
        />
      </Container>
    </>
  );
};

export default RegisterProject;
