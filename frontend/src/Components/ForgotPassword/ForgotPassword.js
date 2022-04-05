import React from 'react'
import "./ForgotPassword.css";
import { Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from "react-alert";
import { forgotPassword } from '../../Actions/User';


const ForgotPassword = () => {
    const [email, setEmail] = React.useState("");

    const dispatch = useDispatch();
    const alert = useAlert();

    const { error, loading, message } = useSelector(state => state.like);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(forgotPassword(email));
    }

    React.useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch({ type: "clearError" })
        }
        if (message) {
            alert.success(message);
            dispatch({ type: "clearMessage" })
        }
    }, [error, loading, message,dispatch, alert]);
    return (
        <div className="forgotPassword">
            <form className="forgotPasswordForm" onSubmit={submitHandler}>
                <Typography variant="h3" style={{ padding: "2vmax" }}>
                    Forgot Password
                </Typography>

                <input
                    type="email"
                    placeholder="Email"
                    required
                    className="forgotPasswordInputs"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />


                <Button disabled={loading} type="submit">Send Token</Button>


            </form>
        </div>
    )
}

export default ForgotPassword