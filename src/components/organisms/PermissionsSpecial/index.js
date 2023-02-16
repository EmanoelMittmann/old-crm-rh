import React from 'react'
import SecondaryText from '../../atoms/SecondaryText/style'
import { ContainerAbsolute, ContainerCheckBox, ContainerCheckBoxDuo, ContainerGeneral } from './style'
import { SelectsItens } from './style'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../../../api/api'



export const PermissionsSpecial = () => {
    const [permissions, setPermissions] = useState('')
    const [disabled, isDisabled] = useState(false)

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
                          checked={permissions === "reports"}
                          onChange={(e) => setPermissions(e.target.value)}
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
                          checked={permissions === "service_orders"}
                          onChange={(e) => setPermissions(e.target.value)}
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
                          checked={permissions === "settings"}
                          onChange={(e) => setPermissions(e.target.value)}
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
                          checked={permissions === "overtime"}
                          onChange={(e) => setPermissions(e.target.value)}
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
                          checked={permissions === "invoices"}
                          onChange={(e) => setPermissions(e.target.value)}
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
                          checked={permissions === "projects"}
                          onChange={(e) => setPermissions(e.target.value)}
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
                          checked={permissions === "start"}
                          onChange={(e) => setPermissions(e.target.value)}
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
                          checked={permissions === "professionals"}
                          onChange={(e) => setPermissions(e.target.value)}
                      />
                      <p>Profissionais</p>
                  </SelectsItens>
              </ContainerCheckBoxDuo>
          </ContainerAbsolute>
      </ContainerGeneral>
  )
}
