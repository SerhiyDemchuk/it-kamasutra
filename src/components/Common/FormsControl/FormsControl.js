import React from 'react';
import { Field } from 'redux-form';
import styles from './FormsControl.module.scss';

export const FormControl = ({ meta: { touched, error }, children }) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            { hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    return (
        <FormControl {...props}>
            <textarea {...props.input} {...props} />
        </FormControl>
    )
}

export const Input = (props) => {
    return (
        <FormControl {...props}>
            <input {...props.input} {...props} />
        </FormControl>
    )
}

export const createField = (placeholder, name, validators, component, props = {}, text) => {
    return (
        <div>
            <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props} /> {text}
        </div>
    )
}