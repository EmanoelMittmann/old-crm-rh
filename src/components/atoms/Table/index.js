import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import MenuOptions from '../MenuOptions/index'
import { Styles, Total } from './style'

const Table = ({rows, setOpenModalDelete, setOpenModalEdit, rowClicked, setRowClicked, totalHours, totalOvertime, totalPercentage}) => {
    const [menuOptionsIsVisible, setMenuOptionsIsVisible] = useState(false)

    const projectClickedHandler = (project) => {
        setMenuOptionsIsVisible(!menuOptionsIsVisible)
        setRowClicked(project)
    }

    const deleteHandler = () => {
        setOpenModalDelete(true)
        setMenuOptionsIsVisible(false)
    }

    const editHandler = () => {
        setOpenModalEdit(true)
        setMenuOptionsIsVisible(false)
    }

    return (
        <Styles>
            <table>
                <tr>
                    <th>Projeto</th>
                    <th>Início do projeto</th>
                    <th>Horas Mensais Estimadas</th>
                    <th>Horas Extras Estimadas</th>
                    <th>%</th>
                    <th></th>
                </tr>
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td>{row.firstRow}</td>
                        <td>{row.secondRow}</td>
                        <td>{row.thirdRow}</td>
                        <td>{row.fourthRow}</td>
                        <td>{row.fifthRow}</td>
                        <td onClick={() => projectClickedHandler(row.id)}>
                            <BsThreeDotsVertical color="#919EAB"/>
                        </td>
                        { menuOptionsIsVisible && row.id == rowClicked &&
                            <MenuOptions
                                positionMenu="25px"
                                firstOptionDescription="Editar"
                                secondOptionDescription="Excluir"
                                firstChosenOption={editHandler}
                                secondChosenOption={deleteHandler}
                                padding="0.3em 0.5em 0.3em 1.7em"
                                id={rowClicked}
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

export default Table