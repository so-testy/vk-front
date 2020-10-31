import React, { useState } from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import {
    ModalRoot,
    Epic,
    Tabbar,
    TabbarItem,
    PanelHeaderButton,
    ModalPage,
    ModalPageHeader,
    IS_PLATFORM_ANDROID,
    IS_PLATFORM_IOS,
    FormLayoutGroup,
    FormLayout,
    Checkbox,
    ActionSheet,
    ActionSheetItem,
    CellButton,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Courses from './panels/Courses/index';
import Course from './panels/Course/index';
import Profile from './panels/Profile/index';

import NavigationContext from './NavigationContext';

import Exercise from './panels/Course/exercise/Exercise';
import AuthContext from './AuthProvider';
import {
    Icon24Cancel,
    Icon24Dismiss,
    Icon28Ghost,
    Icon28User,
} from '@vkontakte/icons';

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

    const [isNotificationsEnabled, setNotifications] = useState(false);
    const [hours, setHours] = useState(2);

    const [popout, setPopout] = useState(null);

    const modal = (
        <ModalRoot activeModal={activeModal}>
            <ModalPage
                id="settings"
                header={
                    <ModalPageHeader
                        left={
                            IS_PLATFORM_ANDROID && (
                                <PanelHeaderButton
                                    onClick={() => setActiveModal(null)}
                                >
                                    <Icon24Cancel />
                                </PanelHeaderButton>
                            )
                        }
                        right={
                            IS_PLATFORM_IOS && (
                                <PanelHeaderButton
                                    onClick={() => setActiveModal(null)}
                                >
                                    <Icon24Dismiss />
                                </PanelHeaderButton>
                            )
                        }
                    >
                        Настройки курсов
                    </ModalPageHeader>
                }
                onClose={() => setActiveModal(null)}
                settlingHeight={700}
                dynamicContentHeight
            >
                <FormLayout>
                    <Checkbox
                        checked={isNotificationsEnabled}
                        onChange={() =>
                            setNotifications(!isNotificationsEnabled)
                        }
                    >
                        Присылать уведомления
                    </Checkbox>
                    {isNotificationsEnabled && (
                        <FormLayoutGroup top="Периодичность уведомлений">
                            <CellButton
                                onClick={() => {
                                    setPopout(
                                        <ActionSheet
                                            onClose={() => setPopout(null)}
                                        >
                                            <ActionSheetItem
                                                autoclose
                                                onClick={() => setHours(2)}
                                            // before={<Icon28Profile />}
                                            >
                                                2 часа
                                            </ActionSheetItem>
                                            <ActionSheetItem
                                                autoclose
                                                onClick={() => setHours(3)}
                                            // before={<Icon28CameraOutline />}
                                            >
                                                3 часа
                                            </ActionSheetItem>
                                            <ActionSheetItem
                                                autoclose
                                                onClick={() => setHours(4)}
                                            // before={<Icon28CameraOutline />}
                                            >
                                                4 часа
                                            </ActionSheetItem>
                                        </ActionSheet>,
                                    );
                                }}
                            >
                                Каждые {hours} часа
                            </CellButton>
                        </FormLayoutGroup>
                    )}
                </FormLayout>
            </ModalPage>
        </ModalRoot>
    );

    return (
        <AuthContext.Provider value={{ user: fetchedUser }}>
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
                        modal={modal}
                        activePanel={activePanel}
                        popout={popout}
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
        </AuthContext.Provider>
    );
};

export default App;
