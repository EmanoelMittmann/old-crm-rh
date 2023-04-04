import React from "react";
import { InputRadio, LabelInputRadio } from "../../atoms/InputRadio/style";
import { ContainerCommission } from "../EmploymentContract/style";
import { Container } from "./style";

const TechLeadAndDev = ({ formik }) => {
  const { handleChange, values,setFieldValue } = formik;
  const name = "function_job"
  return (
    <Container>
      <ContainerCommission>
        <InputRadio
          type="radio"
          name="function"
          value="Technical Leader"
          id="Technical Leader"
          checked={values.function_job === 'Technical Leader' && true}
          onChange={handleChange(name)}
          onClick={() => setFieldValue(name,'')}
        />
        <LabelInputRadio for="Technical Leader">Lider Técnico </LabelInputRadio>
      </ContainerCommission>
      <ContainerCommission>
        <InputRadio
          type="radio"
          name="function"
          value="Technical Lead and Developer"
          id="Technical Lead and Developer"
          checked={values.function_job === 'Technical Lead and Developer' && true}
          onChange={handleChange(name)}
          onClick={() => setFieldValue(name,'')}
        />
        <LabelInputRadio for="Technical Lead and Developer">
          Lider Técnico e Desenvolvedor
        </LabelInputRadio>
      </ContainerCommission>
      <ContainerCommission>
        <InputRadio
          type="radio"
          name="function"
          value="Developer"
          id="Developer"
          checked={values.function_job === 'Developer' && true}
          onChange={handleChange(name)}
          onClick={() => setFieldValue(name,'')}
        />
        <LabelInputRadio for="Developer">Desenvolvedor</LabelInputRadio>
      </ContainerCommission>
    </Container>
  );
};

export default TechLeadAndDev;
