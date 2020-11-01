import React, { useState } from 'react';
import { observer, inject } from "mobx-react";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import { PanelHeaderBack } from '@vkontakte/vkui';

import Step from '../../../components/CourseExercise/exercise/Step';
import Steps from '../../../components/CourseExercise/exercise/Steps';

const Exercise = ({ navStore, id, exercise }) => {
    const [exerciseStructure] = useState(exercise.steps);
    const [step, setStep] = useState(0);

    const goToCourse = () => {
        navStore.setActiveView('courses');
        navStore.setActivePanel('course')
    }

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

export default inject('navStore')(observer(Exercise));
