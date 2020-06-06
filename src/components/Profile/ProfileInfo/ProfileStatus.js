import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditode = () => {
        this.setState({editMode: true})
    }
    deactivateEditode = () => {
        this.setState({editMode: false})
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode
                        ? <div>
                            <input autoFocus={true} onBlur={this.deactivateEditode} value={this.props.status}/>
                        </div>
                        : <div>
                            <span onDoubleClick={this.activateEditode}>{this.props.status}</span>
                        </div>

                }

            </div>

        )
    }
}

export default ProfileStatus;