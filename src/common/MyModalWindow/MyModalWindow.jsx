import React from 'react';
import style from './MyModalWindow.module.css'

export const MyModalWindow = ({children, visible, setVisible}) => {

    const rootClasses = [style.myModal]

    if (visible) {
        rootClasses.push(style.active)
    }

    return (
        <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
            <div className={style.myModalContent}  onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};