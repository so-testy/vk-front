import React from "react";
import { observer, inject } from "mobx-react";

import { Epic, Tabbar, View, TabbarItem, Panel } from "@vkontakte/vkui";
import { Icon24Newsfeed, Icon28User } from "@vkontakte/icons";

import TrainingRootPanel from "./views/Training/Root/index";
import TrainingCoursePanel from "./views/Training/Course/index";
import TrainingExercisePanel from "./views/Training/Course/exercise/Exercise";

import ProfileRootPanel from "./views/Profile/RootPanel";
import ProfileNotificationPanel from "./views/Profile/NotificationPanel";

import "@vkontakte/vkui/dist/vkui.css";

// Некое подобие роутера
// View & Panel определяем здесь

const App = ({ navStore }) => {

    return (
        <Epic
            activeStory={navStore.activeView}
            tabbar={
                <Tabbar>
                    <TabbarItem
                        text="Главная"
                        data-story="training"
                        selected={navStore.activeView === "training"}
                        onClick={() => navStore.setActiveView("training", "root")}
                    >
                        <Icon24Newsfeed />
                    </TabbarItem>
                    <TabbarItem
                        text="Профиль"
                        data-story="profile"
                        selected={navStore.activeView === "profile"}
                        onClick={() => navStore.setActiveView("profile", "root")}
                    >
                        <Icon28User />
                    </TabbarItem>
                </Tabbar>
            }
        >
            <View id="training" activePanel={navStore.activePanel}>
                <Panel id="root">
                    <TrainingRootPanel />
                </Panel>
                <Panel id="course">
                    <TrainingCoursePanel />
                </Panel>
                <Panel id="exercise">
                    <TrainingExercisePanel />
                </Panel>
            </View>

            <View id="profile" activePanel={navStore.activePanel}>
                <Panel id="root">
                    <ProfileRootPanel />
                </Panel>
                <Panel id="notification">
                    <ProfileNotificationPanel />
                </Panel>
            </View>
        </Epic>
    );
};

export default inject('navStore')(observer(App));
