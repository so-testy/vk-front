import React from "react";
import { inject, observer } from 'mobx-react';

import { PanelHeader, Group, Title, Avatar, Div, Cell, Button } from "@vkontakte/vkui";

import { Icon28UserOutline, Icon28UsersOutline, Icon28MusicOutline } from "@vkontakte/icons";

const Profile = ({ userStore }) => {
    const src = 'https://sun1-99.userapi.com/impf/c854220/v854220300/11a6ab/A1TrDV-PRjA.jpg?size=200x0&quality=90&crop=4,275,800,800&sign=8ed6a730b25a778c53ca843724d30815&ava=1';

    return (
        <>
            <PanelHeader>Профиль</PanelHeader>
            <Group>

                <Div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Avatar size={120} src={src} shadow={false} />
                </Div>
                <Div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Title level="2" weight="regular">Ladanov Nikolay</Title>
                </Div>
            </Group>
            <Group>
                <Div>
                    <Button size="xl" mode="secondary">Уведомления</Button>
                </Div>
                <Div>
                    <Button size="xl" mode="outline">Группа ВК</Button>
                </Div>
            </Group>
        </>
    );
};

export default inject('userStore')(observer(Profile));
