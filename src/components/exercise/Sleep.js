import React, { useEffect } from 'react';
import Timer from 'react-compound-timer/build';
import { Button, Div, FixedLayout, Title } from '@vkontakte/vkui';

const Sleep = ({ duration }) => {
    return (
        <Div
            style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <Title
                level={3}
                style={{
                    textAlign: 'center',
                    marginBottom: 8,
                }}
            >
                Отлично! Время отдохнуть.
            </Title>

            <Title level={1} style={{ textAlign: 'center', fontSize: 30 }}>
                <Timer.Seconds /> секунд
            </Title>
        </Div>
    );
};

export default Sleep;
