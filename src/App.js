import React, { useState } from "react";
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

    const [course, setCourse] = useState(null);
    const [exercise, setExercise] = useState(null);

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
                    <TrainingRootPanel
                        // TODO: не передовать в пропсы
                        // создать для этого отдельный mobx store
                        setCourse={(course) => {
                            setCourse(course);
                            navStore.setActiveView("training", "course");
                        }}
                    />
                </Panel>
                <Panel id="course">
                    <TrainingCoursePanel
                        // TODO: не передовать в пропсы
                        // создать для этого отдельный mobx store
                        course={course}
                        setExercise={(exercise) => {
                            setExercise(exercise);
                            navStore.setActiveView("training", "exercise");
                        }}
                    />
                </Panel>
                <Panel id="exercise">
                    <TrainingExercisePanel
                        // TODO: не передовать в пропсы
                        // создать для этого отдельный mobx store
                        exercise={exercise} />
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
