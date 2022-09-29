import React from 'react'
import { ContainerLabelProfessional, IconButton } from '../style'
import { ReactComponent as Trash } from '../../../../assets/icons/trash.svg'
import InputWithLabel from '../../../atoms/InputWithLabel'
import { ContainerWap } from '../style'

const shelf = ({ professional, handleDelete, setValueOfComission }) => {
  return (
      <><ContainerWap>
          <ContainerLabelProfessional key={professional.id}>
              {professional.name}
              <IconButton onClick={() => handleDelete(professional)}><Trash /></IconButton>
          </ContainerLabelProfessional>
          <InputWithLabel
              onChange={(e) => setValueOfComission(e.target.value)}
              width="100%"
              value=""
              label="R$ 0.00"
              type="number"
              name="comission"
              widthContainer="40%"
              padding="0em 1em 0em 0em"
          />
      </ContainerWap>
    </>
  )
}

export default shelf