import styled from '@emotion/styled';
import Menu from '../../components/menu/Menu';

const Main = () => {
    return (
        <MainContainer>
            <Menu title="drag-drop" page="/drag-drop" />
            <Menu title="alert" page="/alert" />
            <Menu title="anchor" page="/anchor" />
        </MainContainer>
    );
};

export default Main;

const MainContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
    padding: 40px;
`;
