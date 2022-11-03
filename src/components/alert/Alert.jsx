import { useState, useEffect } from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './Alert.css';

const Alert = ({ isView, setIsView, time = 2000, status = 'success', helpText }) => {
    const [effect, setEffect] = useState(isView);

    useEffect(() => {
        const effect = setTimeout(() => {
            setEffect(false);
        }, time);

        const render = setTimeout(() => {
            setIsView(false);
        }, time + 1000);

        return () => {
            clearTimeout(effect);
            clearTimeout(render);
        };
    }, []);

    return (
        <div
            className={effect ? 'alert-view' : 'alert-hidden'}
            style={
                status === 'success'
                    ? { backgroundColor: '#eef7ee', color: '#1d461f' }
                    : { backgroundColor: '#fcedeb', color: '#602120' }
            }
        >
            {status === 'success' ? (
                <TaskAltIcon className="alert-icon" />
            ) : (
                <InfoOutlinedIcon className="alert-icon" />
            )}
            <span className="alert-text">
                {helpText || (status === 'success' ? '설정이 완료 되었습니다.' : '다시한번 확인해주세요')}
            </span>
        </div>
    );
};

export default Alert;
