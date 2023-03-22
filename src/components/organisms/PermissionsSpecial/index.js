import React from "react";
import SecondaryText from "../../atoms/SecondaryText/style";
import Shelf from "./Shelf";
import {
    ContainerAbsolute,
    ContainerCheckBox,
    ContainerCheckTitle,
    ContainerGeneral,
} from "./style";


export const PermissionsSpecial = ({ permissions, formik }) => {
    const general = permissions.filter((prop) => prop.group_name === "GENERAL");
    const special = permissions.filter((prop) => prop.group_name === "SPECIAL");

    return (
        <ContainerGeneral>
            <ContainerCheckTitle>
                <SecondaryText margin="2em 0 1em 2em">Especiais</SecondaryText>
                <SecondaryText margin="2em 0 0 0">Gerais</SecondaryText>
            </ContainerCheckTitle>
            <ContainerAbsolute>
                <ContainerCheckBox gap="1em">
                    {special?.slice(0, 5).map((item) => (
                        <Shelf key={item.id} data={item} formik={formik}/>
                    ))}
                </ContainerCheckBox>
                <ContainerCheckBox >
                    {special?.slice(5, 9).map((item) => (
                        <Shelf key={item.id} data={item} formik={formik} />
                    ))}
                </ContainerCheckBox>
                <ContainerCheckBox >
                    {general?.map((item) => (
                        <Shelf key={item.id} data={item} formik={formik} />
                    ))}
                </ContainerCheckBox>
            </ContainerAbsolute>
        </ContainerGeneral>
    );

};
