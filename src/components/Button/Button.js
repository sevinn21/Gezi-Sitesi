import React from 'react'
import { ButtonStyles } from '../../styles/Button.styles'

const Button = ({title,onShowDetail}) => {
    return (     
        <ButtonStyles onClick={onShowDetail}  role="button">{title}</ButtonStyles>
    )
}

export default Button
