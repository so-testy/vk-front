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
                    <Title level="2" weight="medium">
                        Упражнения
                    </Title>
                </Div>
                <CardGrid>
                    {courseStore.currCourse.exercises.map(exercise => {
                        const { minutes, seconds } = getDuration(
                            exercise.duration,
                        );

                        const minutesText = minutes ? minutes + ' мин. ' : '';
                        const secondsText = seconds ? seconds + ' сек.' : '';

                        const courseDurationText = `${minutesText}${secondsText}`;

                        return (
                            <Card
                                size="l"
                                mode="shadow"
                                key={exercise.id}
                                style={{ marginTop: 12 }}
                            // onClick={() => {
                            //     setExercise(exercise);
                            // }}
                            >
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
                                            {exercise.name}
                                        </span>
                                        <Text
                                            weight="regular"
                                            style={{ textTransform: 'none' }}
                                        >
                                            {courseDurationText}
                                        </Text>
                                    </Title>
                                    <Text
                                        weight="regular"
                                        style={{ color: '#666' }}
                                    >
                                        {exercise.description}
                                    </Text>
                                </Div>
                            </Card>
                        );
                    })}
                </CardGrid>
            </Group>
            <FixedLayout vertical="bottom">
                <Div>
                    <Button
                        size="xl"
                        onClick={() => {
                            // setExercise(firstNotStartedExercise);
                        }}
                    >
                        Начать занятие
                        </Button>
                </Div>
            </FixedLayout>
        </>
    );
};

export default inject('navStore', 'courseStore')(observer(Courses));
