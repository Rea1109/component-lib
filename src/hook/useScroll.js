import { useEffect } from 'react';

const useScroll = () => {
    useEffect(() => {
        console.log('hook render');

        return () => {
            console.log('unmount');
        };
    });

    return { str: 'string', num: 1 };
};

export default useScroll;
