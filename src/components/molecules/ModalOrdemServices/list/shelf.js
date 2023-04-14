import React from 'react';
import { ContainerLabelProfessional, IconButton } from '../style';
import { ReactComponent as Trash } from '../../../../assets/icons/trash.svg';
import { ContainerWap } from '../style';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import InputMasked from '../../../atoms/InputMasked';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';



const Shelf = ({ professional, handleDelete, AddOrUpdate }) => {
  const state = useSelector((state) => state.valueOfCommission);
  const isExist = state.find((item) => item.id === professional.id);
  const [commission, setCommission] = useState(!!isExist ? isExist.value : '');


  const maskCommission = createNumberMask({
    prefix: 'R$',
    thousandsSeparatorSymbol: '.',
    includeThousandsSeparator: true,
    allowDecimal: true,
    decimalSymbol: ',',
    requireDecimal:true,
    decimalLimit: 2, //quantos dígitos permitidos após o decimal
  })
 
  return (
    <>
      <ContainerWap>
        <ContainerLabelProfessional key={professional.id}>
          <div className="name_professional">{professional.name}</div>
          <IconButton onClick={() => handleDelete(professional)}>
            <Trash />
          </IconButton>
        </ContainerLabelProfessional>
        <InputMasked // usar <InputMasked/> para usar a máscara
          mask={maskCommission}
          id="commission"
          onChange={(e) => setCommission(e.target.value)}
          key={state.id}
          value={commission}
          width="100%"
          label="R$ 0.00"
          type="number"
          handleBlur={() =>
            AddOrUpdate({ id: professional.id, value: commission})
          }
          name="comission"
          widthContainer="40%"
          padding="0em 1em 0em 0em"
        />
      </ContainerWap>
    </>
  );
};

export default Shelf;
