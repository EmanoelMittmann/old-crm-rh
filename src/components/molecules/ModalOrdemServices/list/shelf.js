import React from 'react';
import { ContainerLabelProfessional, IconButton } from '../style';
import { ReactComponent as Trash } from '../../../../assets/icons/trash.svg';
import InputWithLabel from '../../../atoms/InputWithLabel';
import { ContainerWap } from '../style';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { DefaultToast } from '../../../atoms/Toast/DefaultToast';
import { toast } from 'react-toastify';

const Shelf = ({ professional, handleDelete, AddOrUpdate, validatorError }) => {
  const teste = useSelector((state) => state.valueOfCommission);
  const isExist = teste.find((item) => item.id === professional.id);
  const [commission, setCommission] = useState(!!isExist ? isExist.value : '');

  useEffect(() => {
    if (commission < 0) {
      return toast.error(
        <DefaultToast text={'Valores Negativos não permitidos'} />
      );
    }
  }, []);

  return (
    <>
      <ContainerWap>
        <ContainerLabelProfessional key={professional.id}>
          {professional.name}
          <IconButton onClick={() => handleDelete(professional)}>
            <Trash />
          </IconButton>
        </ContainerLabelProfessional>
        <InputWithLabel
          onChange={(e) => setCommission(e.target.value)}
          key={teste.id}
          value={commission}
          width="100%"
          label="R$ 0.00"
          type="number"
          handleBlur={() =>
            AddOrUpdate({ id: professional.id, value: commission })
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
