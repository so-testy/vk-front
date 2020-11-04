import React, { useContext, useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';

import Icon20CheckCircleFillGreen from '@vkontakte/icons/dist/20/check_circle_fill_green';
import {
    CardGrid,
    Card,
    Title,
    Text,
    PanelHeaderBack,
    FixedLayout,
    Snackbar,
    Avatar,
    PanelHeader,
    Button,
    Group,
    Div
} from '@vkontakte/vkui';

// TODO: удалить
import NavigationContext from '../../../NavigationContext';

import mockCourse from './mockCourse';

const getDuration = duration => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration - minutes * 60;

    return {
        minutes,
        seconds,
    };
};

// Страница списка упражнений

const Courses = ({ course, setExercise, navStore }) => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        setExercises(mockCourse);
    }, []);

    const isWasStarted =
        exercises.filter(exercise => exercise.isDone).length > 0;

    const firstNotStartedExercise = exercises.find(
        exercise => !exercise.isDone,
    );

    const { routeProps } = useContext(NavigationContext);

    return (
        <>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => navStore.setActiveView("training", "root")} />}>
                {course.title}
            </PanelHeader>
            {routeProps.isExerciseFinished && (
                <Snackbar
                    layout="vertical"
                    onClose={() => { }}
                    before={
                        <Avatar size={24}>
                            <Icon20CheckCircleFillGreen
                                width={24}
                                height={24}
                            />
                        </Avatar>
                    }
                >
                    Задание успешно выполнено
                </Snackbar>
            )}
            <Group
                separator="hide"
                style={{
                    marginBottom: firstNotStartedExercise ? 74 : 16,
                }}
            >
                <Div style={{ marginBottom: 4 }}>
                    <Title level="2" weight="medium">
                        Упражнения
                    </Title>
                </Div>
                <CardGrid>
                    {exercises.map(exercise => {
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
                                onClick={() => {
                                    setExercise(exercise);
                                }}
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
            {firstNotStartedExercise && (
                <FixedLayout vertical="bottom">
                    <Div>
                        <Button
                            size="xl"
                            onClick={() => {
                                setExercise(firstNotStartedExercise);
                            }}
                        >
                            {isWasStarted
                                ? 'Продолжить занятие'
                                : 'Начать занятие'}
                        </Button>
                    </Div>
                </FixedLayout>
            )}
        </>
    );
};

export default inject('navStore')(observer(Courses));
