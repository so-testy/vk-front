import React from 'react';

import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import { CardGrid, Card, Title, Text } from '@vkontakte/vkui';
import { PROGRESS_NONE } from '../panels/Courses';

const styles = {
    disabledCard: {
        opacity: 0.5,
        pointerEvents: 'none',
    },
};

const CourseCard = ({ course, setCourse, isButtonVisible = true }) => {
    return (
        <CardGrid key={course.id}>
            <Card
                size="l"
                mode={course.isDisabled ? 'outline' : 'shadow'}
                style={{
                    ...(course.isDisabled ? styles.disabledCard : styles.card),
                    marginTop: 12,
                }}
            >
                <div
                    style={{
                        width: '100%',
                        position: 'absolute',
                        zIndex: -1,
                        height: '100%',
                        background: `rgba(0, 0, 0, 0.1) url("/assets/${course.imageUrl}") no-repeat`,
                        backgroundPositionX: '130%',
                        backgroundPositionY: -100,
                        borderRadius: 'inherit',
                        opacity: 0.2,
                    }}
                />
                <div
                    style={{
                        borderRadius: 'inherit',
                    }}
                >
                    <Div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        {course.progress.type === PROGRESS_NONE ? (
                            <div>
                                <Title level="1" weight="medium">
                                    {course.duration}
                                </Title>
                                <Text style={{ color: '#666' }}>
                                    минут на занятие
                                </Text>
                            </div>
                        ) : (
                            <div>
                                <span
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                    }}
                                >
                                    <Title level="1" weight="medium">
                                        {course.duration}
                                    </Title>
                                    <Text style={{ marginLeft: 4 }}>дней</Text>
                                </span>
                                <Text>продолжительность курса</Text>
                            </div>
                        )}
                    </Div>
                </div>
                <Div>
                    <Title level="2" weight="medium">
                        {course.title}
                    </Title>
                    <Text
                        weight="regular"
                        style={{ marginTop: 8, color: '#666' }}
                    >
                        {course.description}
                    </Text>
                    {isButtonVisible && (
                        <Button
                            size="m"
                            mode="primary"
                            style={{
                                width: '100%',
                                marginTop: 16,
                            }}
                            onClick={() => setCourse(course)}
                        >
                            {course.startDate
                                ? course.progress.type === PROGRESS_NONE
                                    ? 'Перейти'
                                    : 'Продолжить'
                                : 'Начать курс'}
                        </Button>
                    )}
                </Div>
            </Card>
        </CardGrid>
    );
};

export default CourseCard;
