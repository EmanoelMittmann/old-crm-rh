import React from 'react'
import { Styles, Total } from './style'
import { BsThreeDotsVertical } from "react-icons/bs";

const Table = ({rows}) => {

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
                        <td>{row.name}</td>
                        <td>{row.date_start}</td>
                        <td>120</td>
                        <td>50</td>
                        <td><BsThreeDotsVertical color="#919EAB"/></td>
                    </tr>
                ))}

                <tr>
                    <td></td>
                    <td>TOTAL</td>
                    <Total>120</Total>
                    <Total>50</Total>
                    <td><BsThreeDotsVertical color="#919EAB"/></td>
                </tr>

            </table>
        </Styles>
    )
}

export default Table;