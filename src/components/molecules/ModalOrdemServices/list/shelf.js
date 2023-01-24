import React from 'react';
import { ContainerLabelProfessional, IconButton } from '../style';
import { ReactComponent as Trash } from '../../../../assets/icons/trash.svg';
import { ContainerWap } from '../style';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import InputMasked from '../../../atoms/InputMasked';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import InputWithLabel from '../../../atoms/InputWithLabel';
import MaskedInput from 'react-text-mask';


const Shelf = ({ professional, handleDelete, AddOrUpdate }) => {
  const state = useSelector((state) => state.valueOfCommission);
  const isExist = state.find((item) => item.id === professional.id);
  const [commission, setCommission] = useState(!!isExist ? isExist.value : '');

  
  const maskCommission = createNumberMask({
    prefix: 'R$',
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2
  })

  return (
    <>
      <ContainerWap>
        <ContainerLabelProfessional key={professional.id}>
          {professional.name}
          <IconButton onClick={() => handleDelete(professional)}>
            <Trash />
          </IconButton>
        </ContainerLabelProfessional>
        {/* <InputWithLabel
          onChange={(e) => setCommission(e.target.value)}
          key={state.id}
          value={commission}
          width="100%"
          label="R$ 0.00"
          type="text"
          handleBlur={() =>
            AddOrUpdate({ id: professional.id, value: commission})
          }
          name="comission"
          widthContainer="40%"
          padding="0em 1em 0em 0em"
        /> */}
        <InputMasked
        mask={maskCommission}
          onChange={(e) => setCommission(e.target.value)}
          key={state.id}
          value={commission}
          width="100%"
          label="R$ 0.00"
          type="text"
          handleBlur={() =>
            AddOrUpdate({ id: professional.id, value: commission })
          }
          name="comission"
          widthContainer="40%"
          padding="0em 1em 0em 0em" />
      </ContainerWap>
    </>
  );
};

export default Shelf;
