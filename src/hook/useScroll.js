import { useEffect } from 'react';

const useScroll = () => {
    useEffect(() => {
        return () => {};
    });

    return { str: 'string', num: 1 };
};

export default useScroll;
