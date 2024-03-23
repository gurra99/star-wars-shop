import React from "react";
import {HeaderContainer, Nav, Logo} from "./header.styles";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <HeaderContainer>
            <Nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>
                            <Logo src={"/star-wars-movie-logo.jpg"} alt="logo" data-cy="logo-link"/>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={"/"} data-cy="home-link">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/characters"} data-cy="characters-link">
                            Characters
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/cart"} data-cy="cart-link">
                            Cart
                        </NavLink>
                    </li>
                </ul>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;