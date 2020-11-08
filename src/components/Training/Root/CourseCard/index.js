import React from 'react';

import { CardGrid, Card, Title, Text, Button, Div } from '@vkontakte/vkui';

const styles = {
    disabledCard: {
        opacity: 0.5,
        pointerEvents: 'none',
    },
};

const CourseCard = ({ course, onClick }) => {
    return (
        <CardGrid key={course._id}>
            <Card
                size="l"
                mode='shadow'
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
                        background: `rgba(0, 0, 0, 0.1) url("/assets/${course.backgroundCover}") no-repeat`,
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
                        <div>
                            <Text style={{ color: '#666' }}>
                                ~ {course.avgDuration}
                            </Text>
                        </div>
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
                    <Button
                        size="l"
                        mode="primary"
                        style={{
                            width: '100%',
                            marginTop: 16,
                        }}
                        onClick={onClick}
                    >
                        Начать
                    </Button>
                </Div>
            </Card>
        </CardGrid>
    );
};

export default CourseCard;
