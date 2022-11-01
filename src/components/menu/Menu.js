import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

const Menu = ({ title, page }) => {
    const route = useNavigate();

    return (
        <MenuContainer onClick={() => route(page)}>
            <FolderOpenIcon />
            <span>{title}</span>
        </MenuContainer>
    );
};

export default Menu;

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    height: 50px;
    padding-left: 20px;
    margin: 20px;
    border-radius: 10px;
    background-color: black;

    opacity: 0.5;
    color: white;

    font-size: 15px;
    font-weight: bolder;

    cursor: pointer;

    span {
        display: inline-block;
        margin-left: 20px;
    }

    :hover {
        opacity: 1;
    }
`;
