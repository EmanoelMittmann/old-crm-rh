import styled from "styled-components";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const ContainerRegisterProfessionalsData = styled.div`
  padding: 0 3em 0 3em;
`;

export const RegisterProfessionalsForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BorderTop = styled.div`
  border-top: 1px solid #ccc;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2em;
  gap: 2em;

  &:last-child {
    margin-bottom: 3em;
  }
`;
export const ContainerRowDuo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5em;
  gap: 2em;

  &:last-child {
    margin-bottom: 3em;
  }
`;
export const ProfessionalData = styled.form`
  display: flex;
  flex-direction: column;
`;
export const ContainerEmail = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;
`;
export const ProfessionalBank = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ContainerRowBank = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 45%;
  margin-bottom: 1.5em;

  &:last-child {
    margin-bottom: 3em;
  }

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5em;
  box-sizing: border-box;

  &:last-child {
    margin-bottom: 3em;
  }
`;
