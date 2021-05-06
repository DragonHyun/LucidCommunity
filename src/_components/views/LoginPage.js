import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function LoginPage(props) {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    };
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
            }}>
            <form
                onSubmit={onSubmitHandler}
                style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />


                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default withRouter(LoginPage);