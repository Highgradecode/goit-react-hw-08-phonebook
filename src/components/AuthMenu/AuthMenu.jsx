import { NavLink } from "react-router-dom"
import { AuthMenuStyle } from "./AuthMenu.styled";
import { Button } from "@mui/material";

export const AuthMenu = () => {
    return (
        <AuthMenuStyle>
            <Button variant="contained"><NavLink className='auth-menu-link' to='/registration'>Registration</NavLink></Button>
            <Button variant="contained"><NavLink className='auth-menu-link' to='/login'>Log in</NavLink></Button>
        </AuthMenuStyle>
    );
};