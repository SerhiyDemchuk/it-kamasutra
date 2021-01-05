import React from 'react';
import styles from './FormsControl.module.scss';

export const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span>}
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
