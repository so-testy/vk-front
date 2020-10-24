import React, { useEffect, useState } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import { Title, Div, PanelSpinner, Button } from '@vkontakte/vkui';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';

import CourseCard from '../components/CourseCard';
import config from '../config';

export const PROGRESS_NONE = 'PROGRESS_NONE';
export const PROGRESS_ENDING = 'PROGRESS_ENDING';

const Courses = ({ id, setCourse, openSettings }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses([
            {
                id: 1,
                title: 'Гимнастика для глаз',
                description: 'После длительной и напряженной зрительной работы',
                imageUrl: '15.svg',
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
                imageUrl: '8.svg',
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
                imageUrl: '18.svg',
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
                    <Button
                        mode="tertiary"
                        style={{ padding: '0 0px', margin: 0, height: 'auto' }}
                        onClick={openSettings}
                    >
                        <Icon28SettingsOutline />
                    </Button>
                </Div>
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
        </Panel>
    );
};

export default Courses;
