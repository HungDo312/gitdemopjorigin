import React from 'react';
import useClock from '../../hooks/useClock';
import './styles.scss';
BetterCLock.propTypes = {};

function BetterCLock(props) {
    const { timeString } = useClock();
    return (
        <div>
            <div className='better-clock'>
                <p className='better-clock__time'>{timeString}</p>
                <p style={{ fontSize: '42px' }}></p>
            </div>
        </div>
    );
}

export default BetterCLock;