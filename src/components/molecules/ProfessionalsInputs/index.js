import { ProfessionalsInputsContainer } from './style.js';
import InputSearch from '../../atoms/InputSearch';
import InputSelect from '../../atoms/InputSelect';

const ProfessionalsInputs = ({
  jobSelected,
  setJobSelected,
  setSearchResult,
  jobs
}) => {
 

  return (
    <ProfessionalsInputsContainer>
      <InputSearch
        setSearchResult={setSearchResult}
        lineWidth="280px"
        inputWidth="230px"
      />
      <InputSelect
        onChange={(e) => {
          setJobSelected(e.target.value);
        }}
        value={jobSelected}
        textColor={jobSelected}
        options={jobs}
        placeholder="Cargo"
        width="230px"
        lineWidth="100%"
      />
    </ProfessionalsInputsContainer>
  );
};

export default ProfessionalsInputs;
