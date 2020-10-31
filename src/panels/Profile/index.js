import React from "react";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";

// Страница настройки профиля

const Profile = ({ id }) => {
    return (
        <Panel id={id}>
            <PanelHeader>Профиль</PanelHeader>
        </Panel>
    );
};

export default Profile;
