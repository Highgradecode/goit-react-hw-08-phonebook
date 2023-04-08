import { Outlet } from "react-router-dom";
import { MainLayoutStyle } from "./MainLayout.styled";
import { useSelector } from "react-redux";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthMenu } from "components/AuthMenu/AuthMenu";

export const MainLayout = () => {

      const { isLoggedIn } = useSelector(state => state.auth)

    return (
        <MainLayoutStyle>
            <header>
                {isLoggedIn ? <UserMenu /> : <AuthMenu />}
                
            </header>
            <main>
                <Outlet />
            </main>
    
        </MainLayoutStyle>
    );
};