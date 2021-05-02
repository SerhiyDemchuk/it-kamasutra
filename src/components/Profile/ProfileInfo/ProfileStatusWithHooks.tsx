import React, { useState, useEffect, ChangeEvent } from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
    
    let  [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value);
    }

    return (
        <div>
            { !editMode &&
                <div>
                   <b>Status</b>: <span onDoubleClick={activateEditMode}>{props.status || 'Type status here'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        value={status}
                        autoFocus={true}
                        onChange={onStatusChange}
                        onBlur={deactivateEditMode}
                    />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;