import React, { useState, useEffect, useContext } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import { Root, ModalRoot, ModalCard, Text } from '@vkontakte/vkui';
import Icon56InfoOutline from '@vkontakte/icons/dist/56/info_outline';
import '@vkontakte/vkui/dist/vkui.css';

import Courses, { PROGRESS_NONE } from './panels/Courses';
import Course from './panels/Course';
import NavigationContext from './NavigationContext';

import useNavigation from './hooks/useNavigation';
import Exercise from './panels/exercise/Exercise';

const App = () => {
    const [activePanel, setActivePanel] = useState('courses');
    const [activeView, setActiveView] = useState('courses');
    const [activeModal, setActiveModal] = useState(null);
    const [routeProps, setRouteProps] = useState({});
    // const [fetchedUser, setUser] = useState(null);
    // const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

    const [course, setCourse] = useState(null);
    const [exercise, setExercise] = useState(null);

    // useEffect(() => {
    // 	bridge.subscribe(({ detail: { type, data }}) => {
    // 		if (type === 'VKWebAppUpdateConfig') {
    // 			const schemeAttribute = document.createAttribute('scheme');
    // 			schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
    // 			document.body.attributes.setNamedItem(schemeAttribute);
    // 		}
    // 	});
    // 	async function fetchData() {
    // 		const user = await bridge.send('VKWebAppGetUserInfo');
    // 		setUser(user);
    // 		setPopout(null);
    // 	}
    // 	fetchData();
    // }, []);

    // const go = e => {
    //     setActivePanel(e.currentTarget.dataset.to);
    // };

    const modal = (
        <ModalRoot activeModal={activeModal}>
            <ModalCard
                id="welcome"
                onClose={() => setActiveModal(null)}
                // icon={<Icon56InfoOutline />}
                header="Добро пожаловать!"
                caption={
                    <Text>
                        <b>Вижен</b> - приложение для профилактики вашего
                        зрения.
                    </Text>
                }
                actions={[
                    {
                        title: 'Оставить',
                        mode: 'primary',
                        action: () => setActiveModal(null),
                    },
                    {
                        title: 'Отключить',
                        mode: 'secondary',
                        action: () => setActiveModal(null),
                    },
                ]}
            ></ModalCard>
        </ModalRoot>
    );

    return (
        <NavigationContext.Provider
            value={{
                activeView,
                activePanel,
                activeModal,
                updateRoute: ({ view, panel, modal, props }) => {
                    setActivePanel(panel || activePanel);
                    setActiveView(view || activeView);
                    setActiveModal(modal || activeModal);
                    setRouteProps(props || {});
                },
                routeProps,
            }}
        >
            <Root activeView={activeView}>
                <View id="courses" modal={modal} activePanel={activePanel}>
                    <Courses
                        id="courses"
                        setCourse={course => {
                            setCourse(course);
                            setActivePanel('course');
                        }}
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
            </Root>
        </NavigationContext.Provider>
    );
};

export default App;
