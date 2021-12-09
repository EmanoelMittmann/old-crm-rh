import React, { useState } from 'react'
import { Styles, Total } from './style'
import { BsThreeDotsVertical } from "react-icons/bs";
import MenuOptions from '../MenuOptions/index'

const Table = ({rows, setOpenModalDelete, setOpenModalEdit, projectClicked, setProjectClicked}) => {

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
                    <th>%</th>
                    <th></th>
                </tr>

                {rows.map((row) => (
                    <tr>
                        <td>{row.firstRow}</td>
                        <td>{row.secondRow}</td>
                        <td>{row.thirdRow}</td>
                        <td>{row.fourthRow}</td>
                        <td onClick={() => projectClickedHandler(row.id)}>
                            <BsThreeDotsVertical color="#919EAB"/>
                        </td>
                        {
                        menuOptionsisVisible && row.id == projectClicked &&
                        <MenuOptions
                        positionMenu="13px"
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
                    <Total>120</Total>
                    <Total>50</Total>
                </tr>

            </table>
        </Styles>
    )
}

export default Table;