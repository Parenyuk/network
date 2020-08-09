import React from "react";
import {createField, Input, TextArea} from '../../../Common/FormsControls/FormsControls';
import {reduxForm} from 'redux-form';
import {required} from '../../../../utils/validators/validators';
import s from '../../../Common/FormsControls/FormsControls.module.css';
// import s from './ProfileInfo.module.css';


 const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return (
            <form onSubmit={handleSubmit}>
          <div><button>save</button></div>
                {error && <div className={s.formSummaryError}>
                    {error}
                </div>
                }
                <div>
                <b>Full name</b>: { createField('Full name', 'fullname', Input, [] )}
            </div>
            <div>
                <b>Looking for a job</b>: {createField('', 'lookingForAJob', Input, [], {type: 'checkbox'} )}
            </div>
            <div>
                <b>My professional skills</b>: {createField('My professional skills', 'lookingForAJobDescription', TextArea, [] )}
            </div>
                      <div>
                <b>About me</b>: {createField('About me', 'AboutMe', TextArea, [] )}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} /*className={s.contact}*/>
                <b>{key}: {createField(key, 'contacts.' + key, Input, [] )}</b>
                </div>
                // <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </form>
    )
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default  ProfileDataFormReduxForm;



