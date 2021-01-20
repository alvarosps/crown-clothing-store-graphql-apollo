import React from 'react';
import {
    FormInputContainer,
    GroupContainer,
    LabelContainer
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...otherProps} />
        {label ? (
            <LabelContainer className={otherProps.value.length ? 'shrink' : ''}>
                {label}
            </LabelContainer>
        ) : null}
    </GroupContainer>
);

export default FormInput;