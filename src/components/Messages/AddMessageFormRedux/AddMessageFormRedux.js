import React from "react";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={TextArea} name={'newMessageBody'} placeholder={'Enter your message'}
                 validate={[required, maxLength50]}
                />
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'AddMessageForm'
})(AddMessageForm)

export default AddMessageFormRedux;
