import React, { useEffect, useState } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import { Title, Div } from '@vkontakte/vkui';

import CourseCard from '../components/CourseCard';
import config from '../config';

import Eye from '../assets/¥áãàá 15.svg';
import Eye1 from '../assets/¥áãàá 8.svg';
import Eye2 from '../assets/¥áãàá 18.svg';

export const PROGRESS_NONE = 'PROGRESS_NONE';
export const PROGRESS_ENDING = 'PROGRESS_ENDING';

const Courses = ({ id, setCourse }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses([
            {
                id: 1,
                title: 'Гимнастика для глаз',
                description: 'После длительной и напряженной зрительной работы',
                imageUrl: Eye,
                startDate: new Date(),
                progress: {
                    type: PROGRESS_NONE,
                },
                duration: 8,
                isDisabled: false,
            },
            {
                id: 2,
                title: 'Профилактика близорукости',
                description:
                    'Интеративная гимнастика для глаз по методу Аветисова',
                imageUrl: Eye1,
                startDate: null,
                progress: {
                    type: PROGRESS_ENDING,
                    daysDone: 11,
                },
                duration: 30,
                isDisabled: true,
            },
            {
                id: 3,
                title: 'Профилактика косоглазия',
                description:
                    'Интерактивная гимнастика для глаз по методу Аветисова',
                imageUrl: Eye2,
                startDate: null,
                progress: {
                    type: PROGRESS_ENDING,
                    daysDone: 0,
                },
                duration: 15,
                isDisabled: true,
            },
        ]);
    }, []);

    return (
        <Panel id={id}>
            <PanelHeader>{config.appName}</PanelHeader>
            <Group separator="hide">
                <Div style={{ paddingBottom: 0 }}>
                    <Title
                        level="2"
                        weight="medium"
                        style={{ marginBottom: 16 }}
                    >
                        Все курсы
                    </Title>
                </Div>
                {courses.map(course => {
                    return (
                        <CourseCard
                            course={course}
                            setCourse={setCourse}
                            key={course.id}
                        />
                    );
                })}
            </Group>
        </Panel>
    );
};

export default Courses;
