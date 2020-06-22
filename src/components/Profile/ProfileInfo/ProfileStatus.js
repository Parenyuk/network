// import React from "react";
//
// class ProfileStatus extends React.Component {
//
//     state = {
//         editMode: false,
//         status: this.props.status
//
//     }
//
//     activateEditMode = () => {
//         this.setState({editMode: true})
//     }
//     deactivateEditMode = () => {
//         this.setState({editMode: false});
//         this.props.updateStatus(this.state.status)
//     }
//     onStatusChange = (e) => {
//       this.setState({status: e.currentTarget.value})
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if(prevProps.status !== this.props.status ) {
//             this.setState({status: this.props.status})
//         }
//
//     }
//
//     render() {
//         return (
//             <div>
//                 {
//                     this.state.editMode
//                         ? <div>
//                             <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} />
//                         </div>
//                         : <div>
//                             <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
//                         </div>
//
//                 }
//
//             </div>
//
//         )
//     }
// }
//
// export default ProfileStatus;


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