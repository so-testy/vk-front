import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import {
    CardGrid,
    Card,
    Title,
    Text,
    PanelHeaderBack,
    FixedLayout,
    Snackbar,
    Avatar,
} from '@vkontakte/vkui';
import { Icon16Done } from '@vkontakte/icons';

import useNavigation from '../hooks/useNavigation';

import Icon20CheckCircleFillGreen from '@vkontakte/icons/dist/20/check_circle_fill_green';
import { ex1, ex2, ex3, ex4, ex5, ex6, ex7 } from './exercise/exercises';
import NavigationContext from '../NavigationContext';

const getDuration = duration => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration - minutes * 60;

    return {
        minutes,
        seconds,
    };
};

const Courses = ({ id, course, setExercise }) => {
    const [exercises, setExercises] = useState([]);
    const [isExerciseFinished, setIsExerciseFinished] = useState(false);

    useEffect(() => {
        setExercises([
            {
                id: 3,
                name: 'Диагонали',
                description:
                    'Попеременно нужно переводить взгляд по диагонали. Для этого хорошо подходит окно.',
                isDone: true,
                duration: 85,
                steps: ex3,
            },
            {
                id: 1,
                name: 'Моргание',
                description:
                    'Моргать нужно быстро, не напрягая глаз в течение полминуты.',
                isDone: true,
                duration: 40,
                steps: ex1,
            },
            {
                id: 2,
                name: 'Стрелки',
                description:
                    'Глазами нужно водить поочередно вправо и влево, в течение одной минуты, потом поморгать 10 секунд.',
                isDone: true,
                duration: 70,
                steps: ex2,
            },
            {
                id: 4,
                name: 'Вертикаль',
                description:
                    'Как понятно из названия, движения глаз направлены вверх и вниз.',
                isDone: true,
                duration: 75,
                steps: ex4,
            },
            {
                id: 5,
                name: 'Прямоугольник',
                description:
                    'Нужно нарисовать в воздухе воображаемый квадрат или прямоугольник.',
                isDone: true,
                duration: 75,
                steps: ex5,
            },
            {
                id: 6,
                name: 'Зигзаги',
                description: 'Нужно нарисовать в воздухе воображаемый зигзаг.',
                isDone: true,
                duration: 75,
                steps: ex6,
            },
            {
                id: 7,
                name: 'Цифры',
                description:
                    'Во время этого упражнения глазами двигают как часовой стрелкой, останавливая свой взгляд на 3, 6, 9 и 12 часах.',
                isDone: true,
                duration: 75,
                steps: ex7,
            },
        ]);
    }, []);

    const isWasStarted =
        exercises.filter(exercise => exercise.isDone).length > 0;

    const firstNotStartedExercise = exercises.find(
        exercise => !exercise.isDone,
    );

    const goToCourses = useNavigation({ view: 'courses', panel: 'courses' });

    const { routeProps } = useContext(NavigationContext);

    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={goToCourses} />}>
                {course.title}
            </PanelHeader>
            {routeProps.isExerciseFinished && (
                <Snackbar
                    layout="vertical"
                    onClose={() => {}}
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
            <Group separator="hide">
                <Div>Какая-нибудь статистика</Div>
            </Group>
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
                                style={{
                                    boxShadow:
                                        '0 2px 24px 0 rgba(0,0,0,.04), 0 0 2px 0 rgba(0,0,0,.04)',
                                    marginTop: 12,
                                }}
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
                                            {exercise.isDone && (
                                                <Icon20CheckCircleFillGreen
                                                    height={16}
                                                    width={16}
                                                    style={{ marginLeft: 6 }}
                                                />
                                            )}
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
        </Panel>
    );
};

export default Courses;
