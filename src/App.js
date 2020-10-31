import React, { useState } from 'react';
import { Provider } from 'mobx-react';

import {
    Epic,
    Tabbar,
    View,
    TabbarItem,
} from '@vkontakte/vkui';
import {
    Icon28Ghost,
    Icon28User,
} from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';

import userStore from './store/userStore';

import NavigationContext from './NavigationContext';
import AuthContext from './AuthProvider';

import Courses from './panels/Courses/index';
import Course from './panels/Course/index';
import Profile from './panels/Profile/index';
import Exercise from './panels/Course/exercise/Exercise';

const App = () => {

    // TODO: вынести навигацию в глобальный стор
    const [activePanel, setActivePanel] = useState('courses');
    const [activeView, setActiveView] = useState('courses');
    const [activeModal, setActiveModal] = useState(null);
    const [activeStory, setActiveStory] = useState('courses');
    const [routeProps, setRouteProps] = useState({});
    const [fetchedUser, setUser] = useState(null);

    const [course, setCourse] = useState(null);
    const [exercise, setExercise] = useState(null);

    return (
        <Provider userStore={userStore}>
            <NavigationContext.Provider
                value={{
                    activeView,
                    activePanel,
                    activeModal,
                    activeStory,
                    updateRoute: ({ view, panel, modal, story, props }) => {
                        setActivePanel(panel || activePanel);
                        setActiveView(view || activeView);
                        setActiveModal(modal || activeModal);
                        setActiveStory(story || activeStory);
                        setRouteProps(props || {});
                    },
                    routeProps,
                }}
            >
                <Epic activeStory={activeStory} tabbar={
                    <Tabbar>
                        <TabbarItem
                            onClick={() => setActiveStory('courses')}
                            selected={activeStory === 'courses'}
                            data-story="courses"
                            text="Курсы"
                        ><Icon28Ghost /></TabbarItem>
                        <TabbarItem
                            onClick={() => setActiveStory('profile')}
                            selected={activeStory === 'profile'}
                            data-story="profile"
                            text="Профиль"
                        ><Icon28User /></TabbarItem>
                    </Tabbar>
                }>
                    <View
                        id="courses"
                        activePanel={activePanel}
                    >
                        <Courses
                            id="courses"
                            setCourse={course => {
                                setCourse(course);
                                setActivePanel('course');
                            }}
                            openSettings={() => setActiveModal('settings')}
                        />
                        <Course
                            id="course"
                            course={course}
                            setExercise={exercise => {
                                setExercise(exercise);
                                setActivePanel('exercise');
                            }}
                        />
                        <Exercise id="exercise" exercise={exercise} />
                    </View>
                    <View id="profile" activePanel="profile">
                        <Profile id="profile" />
                    </View>
                </Epic>
            </NavigationContext.Provider>
        </Provider>
    );
};

export default App;
