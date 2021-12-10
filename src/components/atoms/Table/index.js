import React, { useState } from 'react'
import { Styles, Total } from './style'
import { BsThreeDotsVertical } from "react-icons/bs";
import MenuOptions from '../MenuOptions/index'

const Table = ({rows, setOpenModalDelete, setOpenModalEdit, projectClicked, setProjectClicked, totalHours, totalOvertime, totalPercentage}) => {

    const [menuOptionsisVisible, setMenuOptionsisVisible] = useState(false)
    

    const projectClickedHandler = (project) => {
        setMenuOptionsisVisible(!menuOptionsisVisible)
        setProjectClicked(project)
        console.log('entrou');
    }

    const deleteHandler = () => {
        setOpenModalDelete(true)
        setMenuOptionsisVisible(false)
    }

    const editHandler = () => {
        setOpenModalEdit(true)
        setMenuOptionsisVisible(false)
    }

    return (
        <Styles>
            <table>
                <tr>
                    <th>Projeto</th>
                    <th>Início do projeto</th>
                    <th>Horas mensais</th>
                    <th>Horas extras</th>
                    <th>%</th>
                    <th></th>
                </tr>

                {rows.map((row) => (
                    <tr>
                        <td>{row.firstRow}</td>
                        <td>{row.secondRow}</td>
                        <td>{row.thirdRow}</td>
                        <td>{row.fourthRow}</td>
                        <td>{row.fifthRow}</td>
                        <td onClick={() => projectClickedHandler(row.id)}>
                            <BsThreeDotsVertical color="#919EAB"/>
                        </td>
                        {
                        menuOptionsisVisible && row.id == projectClicked &&
                        <MenuOptions
                        positionMenu="25px"
                        firstOptionDescription="Editar"
                        secondOptionDescription="Excluir"
                        firstChosenOption={editHandler}
                        secondChosenOption={deleteHandler}
                        padding="0.3em 0.5em 0.3em 1.7em"
                        id={projectClicked}
                        />
                        }
                        </tr>
                        ))}

                <tr>
                    <td></td>
                    <td>TOTAL</td>
                    <Total>{totalHours}</Total>
                    <Total>{totalOvertime}</Total>
                    <Total>{totalPercentage}</Total>
                    <td></td>
                </tr>

            </table>
        </Styles>
    )
}

export default Table;