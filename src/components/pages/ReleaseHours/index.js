import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../../api/api'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import { InputRadio } from '../../atoms/InputRadio/style'
import { DefaultToast } from '../../atoms/Toast/DefaultToast'
import TitleContainer from '../../molecules/TitleContainer'
import RegisterFooter from '../../molecules/RegisterFooter'
import ModalRed from '../../molecules/ModalRed'
import { OvertimeByDate } from '../../organisms/OvertimeByDate'
import { OvertimeByPeriod } from '../../organisms/OvertimeByPeriod'
import { Container, TypeRelease } from './style'
import { messages } from '../../../settings/YupValidates'

function ReleaseHours() {
  const [projects, setProjects] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const history = useHistory()

  const schema = Yup.object().shape({
    launch_date: Yup.string().required(messages.required),
    end_date: Yup.string().when('type', {
      is: type => type === "BY_PERIOD",
      then: Yup.string().required(messages.required)
    }),
    project_id: Yup.number().required(messages.required),
    justification: Yup.string().required(messages.required),
    hour_quantity: Yup.number().required(messages.required),
  })

  const formik = useFormik({
    initialValues: {
      hour_quantity: '',
      justification: '',
      launch_date: '',
      end_date: '',
      project_id: '',
      type: 'BY_DATE',
      extra_hours_status_id: 1,
    },
    onSubmit: async (values) => {
      await api({
        method: 'post',     
        url: '/extraHoursReleases',
        data: { ...values }
      })
      .then( response => {
        toast.success(<DefaultToast text="Horas extras enviadas!" />)
        return goBack()
      })
      .catch(error => toast.error(error))
    },
    validationSchema: schema,
    isValidating: false,
    enableReinitialize: true
  })
  const { values, handleChange, setFieldValue} = formik

  function goBack() {
    return history.push('/timeSending')
  }

  const getAllProjects = useCallback( async () => {
    const {data} = await api({
        method:'get',     
        url:'/userProjects/user'
    })
    setProjects(data)        
},[])



  useEffect(() => {
    if(!projects.length) getAllProjects()
  },[])

  return (
    <>
      { modalIsVisible && 
        <ModalRed
          CloseButtonClickHandler={() => setModalIsVisible(false)}
          redButtonClickHandler={goBack}
          title="Cancelar lançamento"
          message="Tem certeza que deseja cancelar a operação? "
        /> 
      }

      <TitleContainer backToPath="/timeSending" title="Lançar horas extras" />
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <TypeRelease onChange={(e) => setFieldValue('type', e.target.value)}>
            <InputRadio 
              type="radio"
              name="hour"
              value="BY_DATE"
              id="hour"
              checked={values.type === "BY_DATE"}
            /><span> Por data</span>
            <InputRadio 
              type="radio"
              name="hour"
              value="BY_PERIOD"
              id="hour"
            /><span> Por período</span>
          </TypeRelease>

          { values.type === 'BY_DATE' 
            ? <OvertimeByDate data={formik} options={projects} /> 
            : <OvertimeByPeriod data={formik} options={projects} /> 
          }   

          <RegisterFooter
            cancelButtonHandler={() => setModalIsVisible(true)}
            registerButtonHandler={() => {}}
            buttonDescription="Enviar"
            type="submit"
          />
        </form>
      </Container>
    </>
  )
}

export default ReleaseHours
