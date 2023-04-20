import InputDate from "../../atoms/InputDate";
import InputSearch from "../../atoms/InputSearch";
import InputSelect from "../../atoms/InputSelect";
import InputWithLabel from "../../atoms/InputWithLabel/index.js";
import { StatusHistory } from "./options";
import { ContainerInputs } from "./style";

const HistoryInput = ({ 
    searchResult, 
    setSearchResult, 
    statusSelected, 
    setStatusSelected, 
    signature, 
    setSignature, 
    finish, 
    setFinish, 
}) => {


    return (
        <ContainerInputs>
            <InputSearch
                value={searchResult}
                setSearchResult={setSearchResult}
                inputWidth="280px"
                lineWidth="35%"
            />
            <InputSelect
                width="100%"
                lineWidth="100%"
                placeholder="Status"
                options={StatusHistory}
                value={statusSelected}
                onChange={(e) => setStatusSelected(e.target.value)}
            />
          
            <InputDate
                width="100%"
                date={signature}
                onChange={(e) => setSignature(e.target.value)}
                name="initialDate"
                placeholder="Período inicial"
            />
            <InputDate
                width="100%"
                date={finish}
                onChange={(e) => setFinish(e.target.value)}
                name="initialDate"
                placeholder="Período final"
            />
        </ContainerInputs>
    )

}

export default HistoryInput;