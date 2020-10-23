import React, { useEffect, useState } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';

import CourseCard from '../components/CourseCard';
import config from '../config';

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
                imageUrl: '',
                startDate: new Date(),
                progress: {
                    type: PROGRESS_NONE,
                },
                duration: 10,
                isDisabled: false,
            },
            {
                id: 2,
                title: 'Профилактика близорукости',
                description:
                    'Интеративная гимнастика для глаз по методу Аветисова',
                imageUrl: '',
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
                    'Интеративная гимнастика для глаз по методу Аветисова',
                imageUrl: '',
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
                {courses.map(course => {
                    return <CourseCard course={course} setCourse={setCourse} />;
                })}
            </Group>
        </Panel>
    );
};

export default Courses;
