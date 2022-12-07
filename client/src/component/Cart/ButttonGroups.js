import React from 'react'
import { Button, ButtonGroup, styled } from '@mui/material'


const ButtonGroupsStyles = styled(ButtonGroup)`
      margin-top:20px;
`

const ButtonStyles = styled(Button)`
      border-radius:50%;
`
const ButttonGroups = () => {
    return (
        <ButtonGroupsStyles>
            <ButtonStyles>-</ButtonStyles>
            <Button disabled>1</Button>
            <ButtonStyles>+</ButtonStyles>
        </ButtonGroupsStyles>
    )
}

export default ButttonGroups