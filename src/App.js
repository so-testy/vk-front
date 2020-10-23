import React, { useState, useEffect, useContext } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import { Root } from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

import Courses, { PROGRESS_NONE } from './panels/Courses';
import Course from './panels/Course';
import NavigationContext from './NavigationContext';

import useNavigation from './hooks/useNavigation';

const App = () => {
    const [activePanel, setActivePanel] = useState('course');
    const [activeView, setActiveView] = useState('courses');
    // const [fetchedUser, setUser] = useState(null);
    // const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

    const [course, setCourse] = useState({
        id: 1,
        title: 'Гимнастика для глаз',
        description: 'После длительной и напряженной зрительной работы',
        imageUrl: '',
        startDate: new Date(),
        progress: {
            type: PROGRESS_NONE,
        },
        duration: 10,
        isDisabled: false,
    });

    const goToCourse = useNavigation({ view: 'courses', panel: 'course' });

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

    return (
        <NavigationContext.Provider
            value={{
                activeView,
                activePanel,
                updateRoute: ({ view, panel }) => {
                    setActivePanel(panel || activePanel);
                    setActiveView(view || activeView);
                },
            }}
        >
            <Root activeView={activeView}>
                <View id="courses" activePanel={activePanel}>
                    <Courses
                        id="courses"
                        setCourse={course => {
                            setCourse(course);
                            setActivePanel('course');
                        }}
                    />
                    <Course id="course" course={course} />
                </View>
            </Root>
        </NavigationContext.Provider>
    );
};

export default App;
