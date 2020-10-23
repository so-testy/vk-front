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
                duration: 10,
            },
            {
                id: 2,
                name: 'Стрелки',
                description:
                    'Глазами нужно водить поочередно вправо и влево, в течение одной минуты, потом поморгать 10 секунд.',
                isDone: true,
                duration: 10,
            },
            {
                id: 3,
                name: 'Диагонали',
                description:
                    'Попеременно нужно переводить взгляд по диагонали. Для этого хорошо подходит окно.',
                isDone: true,
                duration: 10,
            },
            {
                id: 4,
                name: 'Вертикаль',
                description:
                    'Как понятно из названия, движения глаз направлены вверх и вниз.',
                isDone: true,
                duration: 10,
            },
        ]);
    }, []);

    const goToCourses = useNavigation({ view: 'courses', panel: 'courses' });

    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={goToCourses} />}>
                {course.title}
            </PanelHeader>
            <Group separator="hide">
                <Div style={{ paddingBottom: 0 }}>
                    <Title
                        level="1"
                        weight="medium"
                        style={{ marginBottom: 16 }}
                    >
                        {course.title}
                    </Title>
                    <Text weight="regular">{course.description}</Text>
                </Div>
            </Group>
            <Group separator="hide">
                <Div style={{ paddingBottom: 0 }}>
                    <Title level="1" weight="medium">
                        Упражнения
                    </Title>
                </Div>
                {exercises.map(exercise => {
                    const { minutes, seconds } = getDuration(exercise.duration);

                    const courseDurationText = `${minutes} мин. ${seconds} сек.`;

                    return (
                        <CardGrid key={exercise.id} style={{ marginTop: 8 }}>
                            <Card size="l" mode="shadow">
                                <Div>
                                    <Title
                                        level="2"
                                        weight="medium"
                                        style={{ marginBottom: 16 }}
                                    >
                                        {exercise.name}
                                        <Icon20CheckCircleFillGreen />
                                    </Title>
                                    <Text weight="regular">
                                        {exercise.description}
                                    </Text>
                                </Div>
                            </Card>
                        </CardGrid>
                    );
                })}
            </Group>
        </Panel>
    );
};

export default Courses;
