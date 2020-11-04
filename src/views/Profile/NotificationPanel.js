import React from "react";
import { inject, observer } from 'mobx-react';

import { PanelHeader, PanelHeaderBack, FormLayout, Checkbox, Select, RangeSlider, Text } from "@vkontakte/vkui";

const Notification = ({ navStore }) => {
    return (<>
        <PanelHeader
            left={
                <PanelHeaderBack onClick={() => navStore.setActiveView("profile", "root")
                } />}
        >Уведомления</PanelHeader>
        <FormLayout>
            <Checkbox>Напоминать делать зарядку</Checkbox>
            <Select top="Регулярность" placeholder="В какие дни уведомлять">
                <option value="EVERY_DAYS">Каждый день</option>
                <option value="WEEK_DAYS">С понедельника по пятницу</option>
            </Select>
            <Select top="Частота" placeholder="Как часто уведомлять">
                <option value="EVERY_DAYS">Каждый час</option>
                <option value="WEEK_DAYS">Каждые 2 часа</option>
                <option value="WEEK_DAYS">Каждые 3 часа</option>
                <option value="WEEK_DAYS">Каждые 4 часа</option>
                <option value="WEEK_DAYS">Каждые 5 часов</option>
            </Select>
            <RangeSlider
                top="В какое время"
                min={0}
                max={23}
                step={1}
                defaultValue={[10, 19]}
                bottom={(
                    <Text>
                        Уведомлять в промежутке C 9 до 23 часов
                    </Text>
                )}
            />
        </FormLayout>
    </>
    );
};

export default inject('navStore')(observer(Notification));
