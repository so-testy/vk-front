import React, { useEffect, useState } from 'react';
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
    InfoRow,
    Progress,
    Banner,
    PanelHeaderBack,
} from '@vkontakte/vkui';
import CourseCard from '../components/CourseCard';
import useNavigation from '../hooks/useNavigation';

import Icon20CheckCircleFillGreen from '@vkontakte/icons/dist/20/check_circle_fill_green';
import Icon24CheckCircleOn from '@vkontakte/icons/dist/24/check_circle_on';

import config from '../config';

const styles = {
    disabledCard: {
        opacity: 0.5,
        pointerEvents: 'none',
    },
};

const getDuration = duration => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration - minutes * 60;

    return {
        minutes,
        seconds,
    };
};

const Courses = ({ id, course }) => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        setExercises([
            {
                id: 1,
                name: 'Моргание',
                description:
                    'Моргать нужно быстро, не напрягая глаз в течение полминуты.',
                isDone: true,
                duration: 10 * 60,
            },
            {
                id: 2,
                name: 'Стрелки',
                description:
                    'Глазами нужно водить поочередно вправо и влево, в течение одной минуты, потом поморгать 10 секунд.',
                isDone: true,
                duration: 6 * 60,
            },
            {
                id: 3,
                name: 'Диагонали',
                description:
                    'Попеременно нужно переводить взгляд по диагонали. Для этого хорошо подходит окно.',
                isDone: false,
                duration: 4 * 60,
            },
            {
                id: 4,
                name: 'Вертикаль',
                description:
                    'Как понятно из названия, движения глаз направлены вверх и вниз.',
                isDone: false,
                duration: 6 * 60,
            },
        ]);
    }, []);

    const goToCourses = useNavigation({ view: 'courses', panel: 'courses' });

    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={goToCourses} />}>
                {config.appName}
            </PanelHeader>
            <Group separator="hide">
                <Div style={{ paddingBottom: 0 }}>
                    <Title
                        level="2"
                        weight="medium"
                        style={{ marginBottom: 16 }}
                    >
                        {course.title}
                    </Title>
                    <Text weight="regular">{course.description}</Text>
                </Div>
            </Group>
            <Group separator="hide">
                <Div>
                    <Title level="2" weight="medium">
                        Упражнения
                    </Title>
                </Div>
                <CardGrid>
                    {exercises.map(exercise => {
                        const { minutes, seconds } = getDuration(
                            exercise.duration,
                        );

                        const courseDurationText = `${minutes} мин. ${seconds} сек.`;

                        return (
                            <Card
                                size="l"
                                mode="outline"
                                key={exercise.id}
                                style={{ marginTop: 16 }}
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
                                                <Icon24CheckCircleOn
                                                    height={20}
                                                    width={20}
                                                    style={{
                                                        marginLeft: 8,
                                                        color: '#3F8AE0',
                                                    }}
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
        </Panel>
    );
};

export default Courses;
