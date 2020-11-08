import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Title, Div, Card } from '@vkontakte/vkui';
import { Icon24GiftOutline, Icon16DoneCircle } from "@vkontakte/icons";

const StyledWeekActivities = styled.div`
    display: grid;
    padding: 0px 10px 10px;
    grid-gap: 5px;
    grid-template-columns: repeat(8, 1fr);
`;

const StyledWeekActivity = styled.div`
    position: relative;
    display: flex;
    height: 40px;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    color: var(--content_placeholder_text);
    border: 1px solid var(--image_border);
`

const StyledWeekActivityStatus = styled.div`
    position: absolute;
    top: -5px;
    right: -5px;
    color: var(--button_commerce_background);
`

const WeekProgress = ({ userStore }) => {
    const activities = [
        {
            id: 0,
            day: 'пн',
            isExist: true,
        },
        {
            id: 1,
            day: 'вт',
            isExist: true,
        },
        {
            id: 2,
            day: 'ср',
            isExist: false,
        },
        {
            id: 3,
            day: 'чт',
            isExist: true,
        },
        {
            id: 4,
            day: 'пт',
            isExist: true,
        },
        {
            id: 5,
            day: 'сб',
            isExist: false,
        },
        {
            id: 6,
            day: 'вс',
            isExist: true,
        },
        {
            id: 7,
            day: < Icon24GiftOutline />,
            isExist: false,
        },
    ]
    return (
        <Div>
            <Card size="l" mode="shadow">
                <Title level="3" weight="medium" style={{
                    padding: '10px'
                }}>
                    4 часа с последней тренировки
                </Title>
                <StyledWeekActivities>
                    {activities.map(activity => (
                        <StyledWeekActivity key={activity.id}>
                            {activity.day}
                            {activity.isExist && (
                                <StyledWeekActivityStatus>
                                    <Icon16DoneCircle />
                                </StyledWeekActivityStatus>)
                            }
                        </StyledWeekActivity>
                    ))}
                </StyledWeekActivities>
            </Card>
        </Div>);
};

export default inject('userStore')(observer(WeekProgress));
