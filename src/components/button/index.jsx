import { useContext } from "react"
import { ThemeContext } from '../../contexts/theme-context'
import styled from "styled-components"

export const Button = (props) => {

    const { theme } = useContext(ThemeContext)

    return (
        <ButtonStyled {...props} theme={theme} />
    )
}


const ButtonStyled = styled.button`
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    position: absolute;
    right: 5%;
    height: 35px;
    width: 35px;
    border: none;
    border-radius: 10px;

    &:hover{
        cursor:pointer;
    }
`
