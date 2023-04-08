import { userRegister } from "components/store/auth/auth.api";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { RegistrationFormStyle } from "./RegistrationForm.styled";
import { Button, TextField } from "@mui/material";

export const RegistrationForm = () => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const handleChange = (e) => {
        const { value, name } = e.target;

        switch (name) {
            case 'name':
                setUserName(value)
                break;
      
            case 'email':
                setUserEmail(value)
                break;
            
            case 'password':
                setUserPassword(value)
                break;
      
            default:
                return
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(userRegister({name: userName, email: userEmail, password: userPassword}))
        form.reset();
    }


    return (
        <>
            <RegistrationFormStyle onSubmit={handleSubmit}>
                <label>
                    <TextField id="outlined-basic" label="Name" variant="outlined"  onChange={handleChange} autoComplete="on" name="name"/>
                </label>
                <label>
                    <TextField label="E-mail" variant="outlined" onChange={handleChange} autoComplete="on" type="email" name="email"/>
                </label>
                <label>
                    <TextField label="Password" variant="outlined" onChange={handleChange} autoComplete="on" type="password" name="password"/>
                </label>
                <Button variant="outlined" type="submit"> Create account</Button>
            </RegistrationFormStyle>
        </>
    );
};