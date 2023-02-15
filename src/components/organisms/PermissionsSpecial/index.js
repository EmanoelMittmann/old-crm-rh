import React from 'react'
import SecondaryText from '../../atoms/SecondaryText/style'
import { ContainerAbsolute, ContainerCheckBox, ContainerCheckBoxDuo, ContainerGeneral } from './style'
import { SelectsItens } from './style'
import { useState } from 'react'

export const PermissionsSpecial = () => {
    const [check, setCheck] = useState(false);


  return (
      <ContainerGeneral>
          <SecondaryText margin="2em 0 0 3em">Especiais</SecondaryText>
          <ContainerAbsolute>
              <ContainerCheckBox>
                  <SelectsItens width="60%" content="flex-start">
                      <input
                          type="checkbox"
                          name="Relatórios"
                          id="box"
                          checked={check}
                          onChange={() => {}}
                      />
                      <p>Relatórios</p>
                  </SelectsItens>
                  <SelectsItens width="60%" content="flex-start">
                      <input
                          type="checkbox"
                          name="Relatórios"
                          id="box"
                          checked={check}
                          onChange={() => { }}
                      />
                      <p>Ordens de Serviços</p>
                  </SelectsItens>
                  <SelectsItens width="60%" content="flex-start">
                      <input
                          type="checkbox"
                          name="Relatórios"
                          id="box"
                          checked={check}
                          onChange={() => { }}
                      />
                      <p>Configurações</p>
                  </SelectsItens>
                  <SelectsItens width="60%" content="flex-start">
                      <input
                          type="checkbox"
                          name="Relatórios"
                          id="box"
                          checked={check}
                          onChange={() => { }}
                      />
                      <p>Horas Extras</p>
                  </SelectsItens>
              </ContainerCheckBox>

              <ContainerCheckBoxDuo>
                  <SelectsItens width="60%" content="flex-start">
                      <input
                          type="checkbox"
                          name="Relatórios"
                          id="box"
                          checked={check}
                          onChange={() => { }}
                      />
                      <p>Notas Fiscais</p>
                  </SelectsItens>
                  <SelectsItens width="60%" content="flex-start">
                      <input
                          type="checkbox"
                          name="Relatórios"
                          id="box"
                          checked={check}
                          onChange={() => { }}
                      />
                      <p>Projetos</p>
                  </SelectsItens>
                  <SelectsItens width="60%" content="flex-start">
                      <input
                          type="checkbox"
                          name="Relatórios"
                          id="box"
                          checked={check}
                          onChange={() => { }}
                      />
                      <p>Início</p>
                  </SelectsItens>
                  <SelectsItens width="60%" content="flex-start">
                      <input
                          type="checkbox"
                          name="Relatórios"
                          id="box"
                          checked={check}
                          onChange={() => { }}
                      />
                      <p>Profissionais</p>
                  </SelectsItens>
              </ContainerCheckBoxDuo>
          </ContainerAbsolute>
      </ContainerGeneral>
  )
}
