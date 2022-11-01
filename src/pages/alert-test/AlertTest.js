import { useState } from 'react';
import Alert from '../../components/alert/Alert';
import styled from '@emotion/styled';
import HomeButton from '../../components/Icon/HomeButton';

const AlertTest = () => {
    const [successView, setSuccessView] = useState(false);
    const [errorView, setErrorView] = useState(false);

    return (
        <Container>
            <HomeButton />
            <AlertButton onClick={() => setSuccessView(true)}>success alert</AlertButton>
            {successView && <Alert isView={successView} setIsView={setSuccessView} status={'success'} time={2500} />}
            <AlertButton onClick={() => setErrorView(true)}>error alert</AlertButton>
            {errorView && <Alert isView={errorView} setIsView={setErrorView} status={'error'} time={2500} />}
        </Container>
    );
};

export default AlertTest;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const AlertButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    margin: 20px;
    border: none;
    border-radius: 5px;
    background-color: black;

    opacity: 0.5;
    color: white;

    :hover {
        opacity: 1;
    }
`;
