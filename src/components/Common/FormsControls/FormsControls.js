import React from "react";
import s from './FormsControls.module.css'
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";


const FormControl = ({input, meta: {touched, error}, child, element, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>

            {hasError && <span>{error}</span>}
        </div>
    )
}


export const textArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (<FormControl {...props} ><textarea {...input} {...restProps} /></FormControl>)
}


export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (<FormControl {...props}><input {...input} {...restProps} /></FormControl>)
}

export const createField = ( placeholder, name, component, validators, props={}, text='') => (
    <div>
        <Field placeholder={placeholder}
               name={name} component={component}
               validate={validators}
               {...props}
        /> {text}
    </div>


)
