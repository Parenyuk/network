import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../../../utils/validators/validators";
import {textArea} from "../../../../Common/FormsControls/FormsControls";

const maxLength10 =  maxLengthCreator(10)
let AddPostForm = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={textArea} name={'newPostText'} placeholder={'Enter your post'}
                       validate={[required, maxLength10]}
                />
                <div>
                    <button>Add Post</button>
                </div>
            </form>
        </div>
    )
}
const AddPostFormRedux = reduxForm({
    form: 'ProfileAddPostForm'
})(AddPostForm)

export default AddPostFormRedux;