import { userLogOut } from "components/store/auth/auth.api";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { UserMenuStyle } from "./UserMenu.styled";
import { Button } from "@mui/material";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.auth.user.name)

    return (
        <UserMenuStyle>
            <Button variant="text"><NavLink className="user-menu-link" to='/contacts'>Contacts</NavLink></Button>
            <div className="user-logut">
                {userName && <p><b><em>{`Welcome, ${userName}!`}</em></b></p>}
                <Button variant="outlined" color="error" type="button" onClick={() => dispatch(userLogOut())}>Log Out</Button>
            </div>
        </UserMenuStyle>
    );
};