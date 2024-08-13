import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 0;

    nav{
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;
        align-items: center;
    }

    label {
        width: 9rem;
        padding: 0.5rem;
        background-color: ${(props) => props.theme.colors["purple-light"]};
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 6px;

        span {
            ${mixins.fonts.textS};
            font-weight: bold;
            color: ${(props) => props.theme.colors["purple-dark"]};
        }

        svg {
            color: ${(props) => props.theme.colors["purple-dark"]};
        }
    }
`

export const ButtonCart = styled.button`
    width: 2.375rem;
    height: 2.375rem;
    background: ${(props) => props.theme.colors["yellow-light"]};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        color: ${(props) => props.theme.colors["yellow-dark"]};
    }
`