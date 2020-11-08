import React from 'react';
import { inject, observer } from 'mobx-react';

import { Title, Div, PanelSpinner, PanelHeader, Group } from '@vkontakte/vkui';

import CourseCard from '../../../components/Training/Root/CourseCard/index';
import WeekProgress from '../../../components/Training/Root/WeekProgress/index';

import config from '../../../config';

const Courses = ({ navStore, courseStore }) => {

    const onCourseClick = (id) => {
        courseStore.setCourseById(id);
        navStore.setActiveView("training", "course");
    }

    return (
        <>
            <PanelHeader>{config.appName}</PanelHeader>
            <WeekProgress />
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
                        Рекомендуем
                    </Title>
                </Div>
                {courseStore.isLoading ? (
                    <PanelSpinner size="medium" />
                ) : (
                        courseStore.courses.map(course => {
                            return (
                                <CourseCard
                                    key={course._id}
                                    course={course}
                                    onClick={() => onCourseClick(course._id)}
                                />
                            );
                        })
                    )}
            </Group>
        </>
    );
};

export default inject('navStore', 'courseStore')(observer(Courses));