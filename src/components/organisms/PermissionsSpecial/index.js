import React from 'react'
import SecondaryText from '../../atoms/SecondaryText/style'
import { ContainerAbsolute, ContainerCheckBox, ContainerCheckBoxDuo, ContainerGeneral } from './style'
import { SelectsItens } from './style'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../../../api/api'



export const PermissionsSpecial = () => {
    const [permissions, setPermissions] = useState()
    const [disabled, isDisabled] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [isCheckedOrServices, setIsCheckedOrServices] = useState(false)
    const [isCheckedSettings, setIsCheckedSettings] = useState(false)
    const [isCheckedInvoices, setIsCheckedInvoices] = useState(false)
    const [isCheckedProjects, setIsCheckedProjects] = useState(false)
    const [isCheckedStart, setIsCheckedStart] = useState(false)
    const [isCheckedProfessionals, setIsCheckedProfessionals] = useState(false)
    const [isCheckedOvertime, setIsCheckedOvertime] = useState(false)

    // const getPermissions = async () => {
    //     const { data } = await api({
    //         method: "GET",
    //         url: "/permissions",
    //     });
    //     setPermissions(data.data);
    // };


    // useEffect(()=>{
    //     getPermissions()
    // },[])

  return (
      <ContainerGeneral>
          <SecondaryText margin="2em 0 0 3em">Especiais</SecondaryText>
          <ContainerAbsolute>
              <ContainerCheckBox>
                  <SelectsItens width="60%" content="flex-start">
                      <input
                          type="checkbox"
                          name="permissions"
                          value='reports'
                          id="reports"
                          disabled={disabled}
                          checked={isChecked}
                          onChange={() => setIsChecked(!isChecked)}
                      />
                      <p>Relatórios</p>
                  </SelectsItens>
                  <SelectsItens width="60%" content="flex-start">
                      <input
                          type="checkbox"
                          name="permissions"
                          value="service_orders"
                          id="service_orders"
                          disabled={disabled}
                          checked={isCheckedOrServices}
                          onChange={() => setIsCheckedOrServices(!isCheckedOrServices)}
                      />
                      <p>Ordens de Serviços</p>
                  </SelectsItens>
                  <SelectsItens width="60%" content="flex-start">
                      <input
                          type="checkbox"
                          name="permissions"
                          id="settings"
                          value='settings'
                          disabled={disabled}
                          checked={isCheckedSettings}
                          onChange={() => setIsCheckedSettings(!isCheckedSettings)}
                      />
                      <p>Configurações</p>
                  </SelectsItens>
                  <SelectsItens width="60%" content="flex-start">
                      <input
                          type="checkbox"
                          name="permissions"
                          id="overtime"
                          value='overtime'
                          disabled={disabled}
                          checked={isCheckedOvertime}
                          onChange={() => setIsCheckedOvertime(!isCheckedOvertime)}
                      />
                      <p>Horas Extras</p>
                  </SelectsItens>
              </ContainerCheckBox>

              <ContainerCheckBoxDuo>
                  <SelectsItens width="60%" content="flex-start">
                      <input
                          type="checkbox"
                          name="permissions"
                          id="invoices"
                          value='invoices'
                          disabled={disabled}
                          checked={isCheckedInvoices}
                          onChange={() => setIsCheckedInvoices(!isCheckedInvoices)}
                      />
                      <p>Notas Fiscais</p>
                  </SelectsItens>
                  <SelectsItens width="60%" content="flex-start">
                      <input
                          type="checkbox"
                          name="permissions"
                          id="projects"
                          value='projects'
                          disabled={disabled}
                          checked={isCheckedProjects}
                          onChange={() => setIsCheckedProjects(!isCheckedProjects)}
                      />
                      <p>Projetos</p>
                  </SelectsItens>
                  <SelectsItens width="60%" content="flex-start">
                      <input
                          type="checkbox"
                          name="permissions"
                          id="start"
                          value='start'
                          disabled={disabled}
                          checked={isCheckedStart}
                          onChange={() => setIsCheckedStart(!isCheckedStart)}
                      />
                      <p>Início</p>
                  </SelectsItens>
                  <SelectsItens width="60%" content="flex-start">
                      <input
                          type="checkbox"
                          name="permissions"
                          id="professionals"
                          value='professionals'
                          disabled={disabled}
                          checked={isCheckedProfessionals}
                          onChange={() => setIsCheckedProfessionals(!isCheckedProfessionals)}
                      />
                      <p>Profissionais</p>
                  </SelectsItens>
              </ContainerCheckBoxDuo>
          </ContainerAbsolute>
      </ContainerGeneral>
  )
}
