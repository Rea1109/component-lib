import styled from '@emotion/styled';
import HomeButton from '../../components/Icon/HomeButton';

const DragDropTest = () => {
    return (
        <>
            <HomeButton></HomeButton>
            <DropArea></DropArea>
        </>
    );
};

export default DragDropTest;

const DropArea = styled.div`
    width: 450px;
    height: 450px;
    margin: auto;
    margin-top: 200px;

    border: 4px dashed white;
    border-radius: 15px;
`;
