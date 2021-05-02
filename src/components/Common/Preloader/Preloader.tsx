import React from 'react';
import preloader from '../../../assets/images/preloader.svg';

type PropsType = {};

const Preloader: React.FC<PropsType> = (props) => {
    return (
        <div>
            <img src={preloader} alt="" />
        </div>
    )
}

export default Preloader;