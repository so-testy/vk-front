import React, { useState } from "react";
import { observer, inject } from "mobx-react";

import { Epic, Tabbar, View, TabbarItem } from "@vkontakte/vkui";
import { Icon28Ghost, Icon28User } from "@vkontakte/icons";

import Courses from "./panels/Courses/index";
import Course from "./panels/Course/index";
import Profile from "./panels/Profile/index";
import Exercise from "./panels/Course/exercise/Exercise";

import "@vkontakte/vkui/dist/vkui.css";

const App = ({ navStore }) => {

    const [course, setCourse] = useState(null);
    const [exercise, setExercise] = useState(null);
   
    return (
        <Epic
            activeStory={navStore.activeStory}
            tabbar={
                <Tabbar>
                    <TabbarItem
                        onClick={() => navStore.setActiveStory("courses")}
                        selected={navStore.activeStory === "courses"}
                        data-story="courses"
                        text="Курсы"
                    >
                        <Icon28Ghost />
                    </TabbarItem>
                    <TabbarItem
                        onClick={() => navStore.setActiveStory("profile")}
                        selected={navStore.activeStory === "profile"}
                        data-story="profile"
                        text="Профиль"
                    >
                        <Icon28User />
                    </TabbarItem>
                </Tabbar>
            }
        >
            <View id="courses" activePanel={navStore.activePanel}>
                <Courses
                    id="courses"
                    setCourse={(course) => {
                        setCourse(course);
                        navStore.setActivePanel("course");
                    }}
                    openSettings={() => navStore.setActiveModal("settings")}
                />
                <Course
                    id="course"
                    course={course}
                    setExercise={(exercise) => {
                        setExercise(exercise);
                        navStore.setActivePanel("exercise");
                    }}
                />
                <Exercise id="exercise" exercise={exercise} />
            </View>
            <View id="profile" activePanel="profile">
                <Profile id="profile" />
            </View>
        </Epic>
    );
};

export default inject('navStore')(observer(App));
