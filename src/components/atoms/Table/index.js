import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import MenuOptions from "../MenuOptions/index";
import { Column, ColumnValues, Styles, Total } from "./style";

const Table = ({ rows, setOpenModalDelete, setOpenModalEdit, totalOvertimeExtras, totalPercentageMonth, totalPerformedHours, rowClicked, setRowClicked, totalHours, totalOvertime, totalPercentage }) => {
    const [menuOptionsIsVisible, setMenuOptionsIsVisible] = useState(false)

  const projectClickedHandler = (project) => {
    setMenuOptionsIsVisible(!menuOptionsIsVisible);
    setRowClicked(project);
  };

  const deleteHandler = () => {
    setOpenModalDelete(true);
    setMenuOptionsIsVisible(false);
  };

  const editHandler = () => {
    setOpenModalEdit(true);
    setMenuOptionsIsVisible(false);
  };

    return (
        <Styles>
            <table>
                <tr>
                    <Column w='13em'>Projeto</Column>
                    <Column w='14em'>Início do projeto</Column>
                    <Column w='9.5em'>Horas Mensais Estimadas</Column>
                    <Column w='9.5em'>Horas Mensais Realizadas</Column>
                    <Column w='1em'>%</Column>
                    <Column w='10em'>Horas Extras Estimadas</Column>
                    <Column w='10em'>Horas Extras Realizadas</Column>
                    <Column w='1em'>%</Column>
                    <Column w='15em'></Column>
                </tr>
                {rows.map((row) => (
                    <tr key={row.id}>
                        <ColumnValues w='13em'>{row.firstRow}</ColumnValues>
                        <ColumnValues w='14em'>{row.secondRow}</ColumnValues>
                        <ColumnValues w='9.5em'>{row.thirdRow || 0}</ColumnValues>
                        <ColumnValues w='9.5em'>{row.fourthRow || 0}</ColumnValues>
                        <ColumnValues w='1em'>{(row.percentMonth).toFixed(0) || 0}%</ColumnValues>
                        <ColumnValues w='10em'>{row.fifthRow || 0}</ColumnValues>
                        <ColumnValues w='10em'>{row.sixrow || 0}</ColumnValues>
                        <ColumnValues w='1em'>{(row.percentExtras).toFixed(0)}%</ColumnValues>
                        <ColumnValues w='15em' onClick={() => projectClickedHandler(row.id)}>
                            <BsThreeDotsVertical color="#919EAB" className='icon' />
                        </ColumnValues>
                        {menuOptionsIsVisible && row.id == rowClicked &&
                            <MenuOptions
                                positionMenu="30px"
                                secondOptionDescription="Excluir"
                                firstChosenOption={editHandler}
                                secondChosenOption={deleteHandler}
                                height="=57px"
                                padding="0.2em 0.5em 0.3em 2em"
                                id={rowClicked}
                            />
                        }
                    </tr>
                ))}
                <tr>
                    <td></td>
                    <td>TOTAL</td>
                    <Total>{totalHours}</Total>
                    <Total>{totalPerformedHours || 0}</Total>
                    <Total>{(totalPercentageMonth).toFixed(0) || 0}%</Total>
                    <Total>{totalOvertime || 0}</Total>
                    <Total>{totalOvertimeExtras || 0}</Total>
                    <Total>{(totalPercentage).toFixed(0)}%</Total>
                    <td></td>
                </tr>
            </table>
        </Styles>
    )
}

export default Table