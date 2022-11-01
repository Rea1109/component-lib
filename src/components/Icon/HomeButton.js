import styled from '@emotion/styled';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const HomeButton = () => {
    const route = useNavigate();

    return <Icon onClick={() => route('/')} />;
};

export default HomeButton;

const Icon = styled(HomeIcon)`
    position: absolute;
    top: 0px;
    left: 0px;
    margin: 40px;
    opacity: 0.5;
    font-size: 42px;
    color: black;
    cursor: pointer;

    :hover {
        opacity: 1;
    }
`;
