import React from 'react';
import Timer from 'react-compound-timer';

const BaseTimer = ({ duration }) => {
    return (
        <Timer initialTime={duration * 1000} direction="backward">
            <Timer.Seconds /> секунд
        </Timer>
    );
};

export default BaseTimer;
