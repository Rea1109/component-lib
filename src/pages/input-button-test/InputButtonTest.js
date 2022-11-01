import styled from '@emotion/styled';
import HomeButton from '../../components/Icon/HomeButton';

const InputButtonTest = () => {
    return (
        <>
            <HomeButton />
            <Container>
                <ul>
                    <li>test</li>
                    <li>test</li>
                </ul>
            </Container>
        </>
    );
};

export default InputButtonTest;

const Container = styled.div`
    width: 80vw;
    height: 80vh;

    margin: auto;
    margin-top: 100px;
    border: 1px solid black;
`;
