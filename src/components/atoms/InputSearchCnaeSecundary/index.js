import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { BlueButton } from '../Buttons/BlueButton/style.js';
import { InputLine } from '../DefaultInput/style.js';
import { ErrorMessage, Label } from '../StyledComponents/generalStyle.js';
import { DefaultToast } from '../Toast/DefaultToast.js';
import {
  InputSearchWithLabel,
  DefaultInputCnae,
  ListItens,
  Itens,
  ValuesSelected,
} from './style.js';

const InputSearchCnaeSecundary = ({
  inputWidth,
  placeholder,
  setFieldValue,
  values,
  name,
  label,
  disabled,
  width,
  error,
  touched,
}) => {
  const [id, setId] = useState('');
  const [value, setValue] = useState([]);
  const [filteredValues, setFilteredValues] = useState([]);
  const [waitingValue, setWaitingValue] = useState([]);
  const [selectValue, setSelectValue] = useState([]);
  const [blur, setBlur] = useState('');
  const [focus, setFocus] = useState('');

  const handleFilter = (id) => {
    const searchCnae = value.filter((index) => index.id.includes(id));
    setFilteredValues(searchCnae);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // isExist => valida se um valor ja foi selecionado mais de 1 vez dentro de waitingValue.
    const isExist =
      waitingValue.filter((item) => item.id === waitingValue.at(-1).id).length >
      1;
    // Caso o valor tenha sido adicionado, não prosseguir o fluxo.
    if (isExist) {
      return toast.error(
        <DefaultToast text="Essa atividade ja foi selecionada." />
      );
    }
    setFieldValue('secondary_cnae', waitingValue);
  };

  const handleDelete = (index) => {
    // index = vem o id da atividade principal.
    // o id da atividade so existe 1, não podemos duplicar uma atividade
    // é por isso que se filtrarmos todas as atividades diferentes da que queremos remover o filtro vai funcionar.
    const temp = values.secondary_cnae.filter((item) => item.id !== index); // para remover
    setFieldValue('secondary_cnae', temp);
  };

  useEffect(() => {
    const dataInApi = async () => {
      await axios
        .get(`https://servicodados.ibge.gov.br/api/v2/cnae/classes/`)
        .then((res) => setValue(res.data));
    };
    dataInApi();
  }, []);

  useEffect(() => {
    if (value[0] !== undefined) {
      handleFilter(id);
    }
  }, [id]);

  useEffect(() => {
    setSelectValue(values.secondary_cnae);
  }, [values.secondary_cnae]);

  return (
    <>
      <InputSearchWithLabel>
        <InputLine width={width} error={touched && error}>
          <Label focus={focus || value !== ''} blur={blur || value !== ''}>
            {label}
          </Label>
          <DefaultInputCnae
            value={id}
            disabled={disabled}
            onChange={(e) => setId(e.target.value)}
            type="search"
            placeholder={placeholder}
            width={inputWidth}
            padding="0.3em 0 0 1em"
          />
        </InputLine>
        <div className="div1">
          {selectValue?.map((index) => (
            <ValuesSelected
              key={index.id}
              onClick={() => handleDelete(index.id)}
            >
              {index.description}
            </ValuesSelected>
          ))}
        </div>
        {error && touched && (
          <ErrorMessage visible={error}>{error}</ErrorMessage>
        )}
      </InputSearchWithLabel>
      {id >= 1 && (
        <ListItens>
          {filteredValues.length <= 150 &&
            filteredValues.map((index) => (
              <Itens
                key={index.id}
                onClick={() => {
                  setWaitingValue([
                    ...values.secondary_cnae,
                    { id: index.id, description: index.descricao },
                  ]);
                  setId('');
                }}
              >
                {index.id} {index.descricao}
              </Itens>
            ))}
        </ListItens>
      )}
      <BlueButton width="20%" onClick={(e) => handleClick(e)}>
        Adicionar
      </BlueButton>
    </>
  );
};

export default InputSearchCnaeSecundary;
