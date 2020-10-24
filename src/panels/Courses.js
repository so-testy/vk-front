import React, { useEffect, useState, useRef } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import {
    Title,
    Div,
    Spinner,
    PanelSpinner,
    FixedLayout,
    Button,
} from '@vkontakte/vkui';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';

// import { getSpeechFromText } from '../api';
import CourseCard from '../components/CourseCard';
import config from '../config';

// import Eye from '../assets/¥áãàá 15.svg';
// import Eye1 from '../assets/¥áãàá 8.svg';
// import Eye2 from '../assets/¥áãàá 18.svg';
import Axios from 'axios';

export const PROGRESS_NONE = 'PROGRESS_NONE';
export const PROGRESS_ENDING = 'PROGRESS_ENDING';

function toArrayBuffer(buf) {
    var ab = new ArrayBuffer(buf.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        view[i] = buf[i];
    }
    return ab;
}

const Courses = ({ id, setCourse, openSettings }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        Axios.get('https://1ed71614fb37.ngrok.io/api/courses', {
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
        }).then(({ data }) => {
            console.log(data);
            setCourses(
                data.data.map(item => ({
                    id: item.id,
                    title: item.name,
                    description: item.description,
                    imageUrl: item.image,
                    startDate: item.start_date,
                    progress: JSON.parse(item.progress),
                    duration: item.duration,
                    isDisabled: item.is_blocked,
                })),
            );
        });
    }, []);

    console.log(courses);

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
