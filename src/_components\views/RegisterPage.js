import React, { useState } from   'react';

import{ withRouter } from 'react-router-dom';

function RegisterPage(props) {
    const [AccountId, setAccountId] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    const [Sex, setSex] = useState("");
    const [Email, setEmail] = useState("");
    const [Nickname, setNickname] = useState("");

    const onAccountIdHandler = (e) => {
        setAccountId(e.currentTarget.value);
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }
    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value);
    }
    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    }
    const onAgeHandelr = (e) => {
        setAge(e.currentTarget.value);
    }
    const onSexHandler = (e) => {
        setSex(e.currentTarget.value);
    }
    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }
    const onNicknmaeHandler = (e) => {
        setNickname(e.currentTarget.value);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

}