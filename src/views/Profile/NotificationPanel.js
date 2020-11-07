import React, { useEffect, useState } from "react";
import { inject, observer } from 'mobx-react';

import { PanelHeader, PanelHeaderBack, FormLayout, Checkbox, Select, RangeSlider, Text } from "@vkontakte/vkui";

export const regularity = [{
    title: 'Каждый день',
    value: 'EVERY_DAYS'
}, {
    title: 'С понедельника по пятницу',
    value: 'WEEK_DAYS'
}];

export const frequency = [{
    title: 'Каждый час',
    value: '1_HOURS'
}, {
    title: 'Каждые 2 часа',
    value: '2_HOURS'
}, {
    title: 'Каждые 3 часа',
    value: '3_HOURS'
}, {
    title: 'Каждые 4 часа',
    value: '4_HOURS'
}, {
    title: 'Каждые 5 часов',
    value: '5_HOURS'
}];

const Notification = ({ navStore, useStore }) => {
    const [notification, setNotification] = useState({
        isEnadled: false,
        regularity: 'EVERY_DAYS',
        frequency: '2_HOURS',
        time: {
            start: 10,
            end: 19
        }
    });

    // useEffect(() => {
    //     setNotification(useStore.notification);
    //     return () => {
    //         // send to save notification settings
    //     }
    // }, [useStore.notification]);

    const toggleNotification = () => setNotification({ ...notification, isEnadled: !notification.isEnadled });

    return (<>
        <PanelHeader
            left={
                <PanelHeaderBack onClick={() => navStore.setActiveView("profile", "root")
                } />}
        >Уведомления</PanelHeader>
        <FormLayout>
            <Checkbox onClick={toggleNotification}>Напоминать делать зарядку</Checkbox>
            <Select top="Регулярность" disabled={!notification.isEnadled}>
                {
                    regularity.map(r => (
                        <option value={r.value} selected={r.value === notification.regularity}>{r.title}</option>
                    ))
                }
            </Select>
            <Select top="Частота" disabled={!notification.isEnadled}>
                {
                    frequency.map(f => (
                        <option value={f.value} selected={f.value === notification.frequency}>{f.title}</option>
                    ))
                }
            </Select>
            <RangeSlider
                top="В какое время"
                min={0}
                max={23}
                step={1}
                value={[notification.time.start, notification.time.end]}
                disabled={!notification.isEnadled}
                bottom={(
                    <Text>
                        Уведомлять в промежутке C {notification.time.start} до {notification.time.end} часов
                    </Text>
                )}
            />
        </FormLayout>
    </>
    );
};

export default inject('navStore', 'userStore')(observer(Notification));
