import { Button, TextField } from "@mui/material";
import { userLogIn } from "components/store/auth/auth.api";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginFormStyle } from "./LoginForm.styled";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const [logInEmail, setLogInEmail] = useState('');
    const [logInPassword, setLogInPassword] = useState('');

    const handleChange = (e) => {
        const { value, name } = e.target;

        switch (name) {
            case 'email':
                setLogInEmail(value)
                break;
            
            case 'password':
                setLogInPassword(value)
                break;
      
            default:
                return
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(userLogIn({ email: logInEmail, password: logInPassword }))
        form.reset();
    };

    return (
        <>
            <LoginFormStyle onSubmit={handleSubmit}>
                <label>
                    <TextField label="Email" variant="outlined" onChange={handleChange} autoComplete="on" name="email" type="email" />
                </label>
                <label>
                    <TextField label="Password" variant="outlined" onChange={handleChange} autoComplete="on" name="password" type="password" />
                </label>
                <Button variant="outlined" type="submit">Log in</Button>
            </LoginFormStyle>
            
        </>
    );
};