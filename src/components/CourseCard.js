import React, { useEffect, useState } from 'react';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Icon16ClockCircleFill from '@vkontakte/icons/dist/16/clock_circle_fill';

import { CardGrid, Card, Title, Text } from '@vkontakte/vkui';
import { PROGRESS_NONE } from '../panels/Courses';

const styles = {
    disabledCard: {
        opacity: 0.5,
        pointerEvents: 'none',
    },
};

const CourseCard = ({ course, setCourse, isButtonVisible = true }) => {
    const courseDurationText =
        course.progress.type === PROGRESS_NONE
            ? `${course.duration} минут`
            : '';

    return (
        <CardGrid
            key={course.id}
            style={course.isDisabled ? styles.disabledCard : null}
        >
            <Card size="l" mode="outline">
                <div
                    style={{
                        backgroundColor: '#fff',
                        margin: 1,
                        height: 100,
                        borderRadius: 'inherit',
                    }}
                >
                    <Div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Icon16ClockCircleFill
                            style={{ marginRight: 8 }}
                            color="white"
                        />
                        <Text level="2" weight="regular">
                            {courseDurationText}
                        </Text>
                    </Div>
                </div>
                <Div>
                    <Title level="2" weight="medium" style={{ marginTop: 16 }}>
                        {course.title}
                    </Title>
                    <Text weight="regular" style={{ marginTop: 16 }}>
                        {course.description}
                    </Text>
                    {isButtonVisible && (
                        <Button
                            size="m"
                            mode="outline"
                            style={{
                                width: '100%',
                                marginTop: 16,
                            }}
                            onClick={() => setCourse(course)}
                        >
                            {course.startDate ? 'Продолжить' : 'Начать курс'}
                        </Button>
                    )}
                </Div>
            </Card>
        </CardGrid>
    );
};

export default CourseCard;
