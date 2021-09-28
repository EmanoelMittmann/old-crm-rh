import React from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { settingsMenu } from '../../../redux/actions'
import { useSelector } from 'react-redux';

import {SettingsOption} from './style.js';
import Title from '../../atoms/SettingsMenuTitle/style.js'


const SettingsMenu = () => {

    let history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector(state => state.settingsStatus)
    

    const settingsOptionClickHandler = (id) => {
        dispatch(settingsMenu(id))


        id === 1 && history.push("/settings/job");
        id === 2 && history.push("/settings/loremUm");
        id === 3 && history.push("/settings/loremDois");
    }  

    return (
        <div>
            <div>
                <Title>Cadastros</Title>
                { state[0].map((content) => 
                    <SettingsOption 
                    clicked={content.status} 
                    onClick={() => settingsOptionClickHandler(content.id)}
                    >
                        {content.title}
                    </SettingsOption>)
                }
            </div>
            <div>
                <Title>Cadastros</Title>
                { state[1].map((content) => 
                    <SettingsOption 
                    clicked={content.status} 
                    onClick={() => settingsOptionClickHandler(content.id)}
                    >
                        {content.title}
                    </SettingsOption>)
                }
            </div>
        </div>
    )
}

export default SettingsMenu;
