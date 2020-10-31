import React from 'react';

const Steps = ({ children, activeStep }) => {
    const step = React.Children.toArray(children).find(
        child => child.props.stepId === activeStep,
    );

    return step;
};

export default Steps;
