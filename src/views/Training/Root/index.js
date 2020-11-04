import React, { useEffect, useState } from 'react';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import { Title, Div, PanelSpinner } from '@vkontakte/vkui';

import CourseCard from '../../../components/CourseCard/index';
import config from '../../../config';

import mockCourses from './mockCourses';

export const PROGRESS_NONE = 'PROGRESS_NONE';
export const PROGRESS_ENDING = 'PROGRESS_ENDING';

// Страница списка доступных курсов

const Courses = ({ setCourse }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses(mockCourses);
    }, []);

    return (
        <>
            <PanelHeader>{config.appName}</PanelHeader>
            <Group separator="hide" style={{ marginBottom: 16 }}>
                <Div
                    style={{
                        paddingTop: 0,
                        paddingBottom: 8,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Title level="2" weight="medium">
                        Все курсы
                    </Title>
                </Div>
                {/* 
                    Добавить недельный прогресс
                */}
                {courses.length === 0 ? (
                    <PanelSpinner size="medium" />
                ) : (
                        courses.map(course => {
                            return (
                                <CourseCard
                                    course={course}
                                    setCourse={setCourse}
                                    key={course.id}
                                />
                            );
                        })
                    )}
            </Group>
        </>
    );
};

export default Courses;
