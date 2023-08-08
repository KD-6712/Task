import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/UserContainer" activeStyle>
                        API-1 User's Info
                    </NavLink>
                    <NavLink to="/PostContainer" activeStyle>
                        API-2 Post's Info
                    </NavLink>
                    <NavLink to="/FormValidation" activeStyle>
                        Form
                    </NavLink>
                   
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;