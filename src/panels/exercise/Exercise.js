import React, { useEffect, useState } from 'react';
import Sleep from '../../components/exercise/Sleep';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import { PanelHeaderBack, Snackbar, Avatar } from '@vkontakte/vkui';
import useNavigation from '../../hooks/useNavigation';
import Step from '../../components/exercise/Step';
import Steps from '../../components/exercise/Steps';
import { ex1, ex2, ex3, ex4, ex5, ex6, ex7 } from './exercises';
import { Icon16Done } from '@vkontakte/icons';

const Exercise = ({ id, exercise }) => {
    const [exerciseStructure, setExerciseStructure] = useState(exercise.steps);
    const [step, setStep] = useState(0);

    const goToCourse = useNavigation({ view: 'courses', panel: 'course' });

    // useEffect(() => {
    //     setExerciseStructure(exercise.steps);
    // }, []);

    const nextStep = () => {
        if (step < exerciseStructure.length - 1) return setStep(step + 1);
        goToCourse({ isExerciseFinished: true });
    };

    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={goToCourse} />}>
                {exercise.name}
            </PanelHeader>
            {exerciseStructure ? (
                <Steps activeStep={step}>
                    {exerciseStructure.map((item, index) => {
                        return (
                            <Step
                                stepId={index}
                                exercise={item}
                                nextStep={nextStep}
                                key={index}
                            />
                        );
                    })}
                </Steps>
            ) : null}
        </Panel>
    );
};

export default Exercise;
