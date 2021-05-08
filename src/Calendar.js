import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function Calendar() {

    const Container = styled.div`
        width: 100vw;
        height: 80vh;
        border: 1px solid black;
        display: flex;
        flex-grow: 1;
        background-color: rgb(127, 184, 127);
    `;

    const [users, setusers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setusers(null);
                setError(null);
                setLoading(true);

                const response = await axios.get('http://132.226.22.227:5000/user');
                console.log(response);
                setusers(response.data.result);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchUsers();
    }, []);
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    return (
        <div>
            <Container>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </Container>
        </div>
    );
}

export default Calendar;