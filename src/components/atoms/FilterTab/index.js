import React from 'react'
import { Container, Job } from './styled'
import { ReactComponent as Arrows } from '../../../assets/icons/arrows.svg'

const FilterTab = () => {
    return (
        <Container>
            <Job>Cargo</Job>
            <Arrows/>
        </Container>
    )
}

export default FilterTab;
