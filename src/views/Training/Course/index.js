import React from 'react';
import { inject, observer } from 'mobx-react';

import {
    CardGrid,
    Card,
    Title,
    Text,
    PanelHeaderBack,
    FixedLayout,
    PanelHeader,
    Button,
    Group,
    Div
} from '@vkontakte/vkui';


const getDuration = duration => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration - minutes * 60;

    return {
        minutes,
        seconds,
    };
};

const Courses = ({ courseStore, navStore }) => {

    return (
        <>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => navStore.setActiveView("training", "root")} />}>
                {courseStore.currCourse.title}
            </PanelHeader>
            <Group
                separator="hide"
                style={{
                    marginBottom: 16,
                }}
            >
                <Div style={{ marginBottom: 4 }}>
                    <Title level="3" weight="medium">
                        ~ {courseStore.currCourse.avgDuration} · {courseStore.currCourse.exercises.length} упражнений
                    </Title>
                </Div>
                <CardGrid style={{ marginBottom: 80 }}>
                    {courseStore.currCourse.exercises.map(exercise => {
                        const { minutes, seconds } = getDuration(
                            exercise.avgDuration,
                        );

                        const minutesText = minutes ? minutes + ' мин. ' : '';
                        const secondsText = seconds ? seconds + ' сек.' : '';

                        const courseDurationText = `${minutesText}${secondsText}`;

                        return (
                            <Card
                                size="l"
                                mode="shadow"
                                key={exercise._id}
                                style={{ 
                                    marginTop: 12,
                                    height: 110
                                }}
                            // onClick={() => {
                            //     setExercise(exercise);
                            // }}
                            >
                                <Div style={{ display: 'flex' }}>
                                    <Div style={{
                                        padding: '12px 0px'
                                    }}>
                                        <img
                                            src={`/exercises/images/${exercise.image}`}
                                            alt=""
                                            style={{
                                                width: '110px',
                                            }}
                                        />
                                    </Div>
                                    <Div>
                                        <Title
                                            level="3"
                                            weight="medium"
                                            style={{
                                                textTransform: 'uppercase',
                                                marginBottom: 8,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <span
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                {exercise.title}
                                            </span>
                                        </Title>
                                        <Text
                                            weight="regular"
                                            style={{ color: '#666' }}
                                        >
                                            {courseDurationText}
                                        </Text>
                                    </Div>
                                </Div>
                            </Card>
                        );
                    })}
                </CardGrid>
            </Group>
            <FixedLayout vertical="bottom" filled={true}>
                <Div>
                    <Button
                        size="xl"
                        onClick={() => {
                            // setExercise(firstNotStartedExercise);
                        }}
                    >
                        Начать
                    </Button>
                </Div>
            </FixedLayout>
        </>
    );
};

export default inject('navStore', 'courseStore')(observer(Courses));
