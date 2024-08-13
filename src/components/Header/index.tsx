import { NavLink } from "react-router-dom"
import { ButtonCart, HeaderContainer } from "./styles"
import logo from "/logo.svg"
import { ShoppingCart, MapPin } from "@phosphor-icons/react"
export const Header = () => {
    return (
        <HeaderContainer>
           <img src={logo} alt="" />
           <nav>
                <label>
                    <MapPin size={22} weight="fill"/>
                    <span>Porto Alegre, RS</span>
                </label>
                <NavLink to="/">
                    <ButtonCart>
                        <ShoppingCart size={22} weight="fill"/>
                    </ButtonCart>
                </NavLink>
           </nav>
        </HeaderContainer>
    )
}