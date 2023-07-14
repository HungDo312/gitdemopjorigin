import { useEffect, useState } from 'react';


function formatDate(date) {
    if (!date) {
        return '';
    }
    const hours = `${date.getHours()}`.slice(-2);
    const minutes = `${date.getMinutes()}`.slice(-2);
    const seconds = `${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}
function useClock(props) {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now)

            setTimeString(newTimeString)

            return () => {
                console.log('CLock cleanup')
                clearInterval(clockInterval)
            }
        }, 1000);
    }, [])

    return { timeString };
}

export default useClock;