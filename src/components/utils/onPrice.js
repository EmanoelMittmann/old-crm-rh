import { ContainerFlex } from "../organisms/SelectorNewOs/style"

const OnPrice = ({ onPrice }) => {
    
    console.log('onPrice: ', onPrice);

return (
        <>
        {onPrice ? (
            <ContainerFlex>
                {onPrice.companies_id}
                Valor total:  {" "}
                    {Number(onPrice.map(prop => prop.value).reduce((x, y) => x + y, 0)).toLocaleString("pt-br", { style: "currency", currency: "BRL" }) || 0}
            </ContainerFlex >
            ) : (
            ''
        )}
        </>
    )
}

export default OnPrice