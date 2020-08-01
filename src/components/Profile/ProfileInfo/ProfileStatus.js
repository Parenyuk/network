import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(true);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const deactivateMode = () => {
        setEditMode( false)

    }
    const activateMode = () => {
        setEditMode( true)
        props.updateStatus(status)
    }
    const  onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
}


        return (
            <div>
                {editMode &&
                <div>
                    <span onDoubleClick={deactivateMode}>{props.status || '----'}</span>
                </div>
                }
                {!editMode &&
                <div>
                    <input onBlur={activateMode} onChange={onStatusChange} value={status} />
                </div>
                }
            </div>

        )

}

export default ProfileStatus;
