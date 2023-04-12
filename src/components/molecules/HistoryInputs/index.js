import InputSearch from "../../atoms/InputSearch";
import InputSelect from "../../atoms/InputSelect";
import InputWithLabel from "../../atoms/InputWithLabel";
import { ContainerInputs } from "./style";

const HistoryInput = ({ setSearchResult }) => {


    return (
        <ContainerInputs>
            <InputSearch
                setSearchResult={setSearchResult}
                inputWidth="280px"
                lineWidth="100%"
            />
            <InputSelect
                width="280px"
                lineWidth="230px"
                placeholder="Status"
            />

            <InputWithLabel
                width="230px"
                widthContainer="100%"
                type="Date"
            />
            <InputWithLabel
                type="Date"
                width="230px"
                widthContainer="100%"
            />
        </ContainerInputs>
    )

}

export default HistoryInput;