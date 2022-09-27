import React from 'react'
import { ContainerOrdemServices, OrdemServiceItens} from './style'

const OrdemServiceListItem = ({index}) => {
  return (
    <ContainerOrdemServices key={index.id}>
        <OrdemServiceItens>
            <input type="checkbox" name="professional"/>
            {index.name}
        </OrdemServiceItens>
        <OrdemServiceItens>
            {index.cnpj}
        </OrdemServiceItens>
        <OrdemServiceItens>
            {index.salary}
        </OrdemServiceItens>
        <OrdemServiceItens>
            -
        </OrdemServiceItens>
        <OrdemServiceItens>
            R$ 1000,00
        </OrdemServiceItens>
    </ContainerOrdemServices>
  )
}

export default OrdemServiceListItem