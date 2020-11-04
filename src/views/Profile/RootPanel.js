import React from "react";
import { inject, observer } from 'mobx-react';

import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";

// Страница настройки профиля

const Profile = ({ id, userStore }) => {
    return (
        <PanelHeader>Профиль {userStore.user.name}</PanelHeader>
    );
};

export default inject('userStore')(observer(Profile));
