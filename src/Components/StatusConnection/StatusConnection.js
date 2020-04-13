import React from 'react';
import approved from '../../Assets/images/approved.png';
import { Motion, spring } from "react-motion";
import './StatusConnection.scss';

const StatusConnection = ({ deleteLogStatus }) => {
    return (
        <div className="connection">
            <Motion defaultStyle={{x:-270, opacity: 0, transition: 'all 1s ease-out', rotate:-300,}} style={{x:spring(10), opacity: spring(1), transition:spring('all 1s ease-out'), rotate:spring(0)}}>
                {(style) =>(
                    <img 
                        onClick={deleteLogStatus}
                        style={{
                            opacity: style.opacity, 
                            transform: `translateX(${style.x}%) rotate(${style.rotate}deg)`,
                            transition: 'all 1s ease-out',
                        }} 
                        className="connection__image" 
                        src={approved} alt="approved connection" 
                    />
                )}
            </Motion>
        </div>
    )
}

export default StatusConnection;
