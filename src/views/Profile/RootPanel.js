import React from "react";
import { inject, observer } from 'mobx-react';

import { PanelHeader, PanelHeaderBack, Group, Title, Avatar, Div, Button } from "@vkontakte/vkui";

const Profile = ({ userStore, navStore }) => {

    return (
        <>
            <PanelHeader
                left={
                    <PanelHeaderBack onClick={() => navStore.setActiveView("training", "root")
                } />}>Профиль</PanelHeader>
            <Group>
                <Div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Avatar size={120} src={userStore.user.avatar} shadow={false} />
                </Div>
                <Div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Title level="2" weight="regular">{userStore.user.name}</Title>
                </Div>
            </Group>
            <Group>
                <Div>
                    <Button
                        size="xl"
                        mode="secondary"
                        onClick={() => navStore.setActiveView('profile', 'notification')}
                    >Уведомления</Button>
                </Div>
                <Div>
                    <Button size="xl" mode="outline">Группа ВК</Button>
                </Div>
            </Group>
        </>
    );
};

export default inject('userStore', 'navStore')(observer(Profile));
