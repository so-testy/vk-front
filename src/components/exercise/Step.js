import { Button, Div, FixedLayout, Title } from '@vkontakte/vkui';
import React, { useEffect, useState } from 'react';
import Timer, { useTimer } from 'react-compound-timer/build';
import Sleep from './Sleep';

const Step = ({
    exercise: { title, description, duration, sleepAfter },
    nextStep,
}) => {
    const [isSleeping, setSleeping] = useState(false);

    const totalDuration = duration + sleepAfter;
    const isNeedForWait = duration === 0;

    return (
        <>
            <Timer
                initialTime={totalDuration * 1000 + 1}
                direction="backward"
                checkpoints={[
                    {
                        time: sleepAfter * 1000,
                        callback: () => setSleeping(true),
                    },
                    {
                        time: 0,
                        callback: () => {
                            nextStep();
                        },
                    },
                ]}
                startImmediately={!isNeedForWait}
            >
                {({ start }) =>
                    isSleeping ? (
                        <Sleep duration={sleepAfter} />
                    ) : (
                        <>
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
                                    {description}
                                </Title>

                                {!isNeedForWait && (
                                    <Title
                                        level={1}
                                        style={{
                                            textAlign: 'center',
                                            fontSize: 30,
                                        }}
                                    >
                                        <Timer
                                            initialTime={duration * 1000}
                                            direction="backward"
                                        >
                                            <Timer.Minutes
                                                formatValue={value =>
                                                    String(value).padStart(
                                                        2,
                                                        '0',
                                                    )
                                                }
                                            />
                                            :
                                            <Timer.Seconds
                                                formatValue={value =>
                                                    String(value).padStart(
                                                        2,
                                                        '0',
                                                    )
                                                }
                                            />
                                        </Timer>
                                    </Title>
                                )}
                            </Div>

                            {isNeedForWait && (
                                <FixedLayout vertical="bottom">
                                    <Div>
                                        <Button
                                            onClick={() => {
                                                if (sleepAfter > 0) {
                                                    start();

                                                    return true;
                                                }

                                                nextStep();
                                            }}
                                            size="xl"
                                        >
                                            Готово
                                        </Button>
                                    </Div>
                                </FixedLayout>
                            )}
                        </>
                    )
                }
            </Timer>
        </>
    );
};

export default Step;
