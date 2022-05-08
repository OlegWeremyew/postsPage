import React from 'react';
import style from './MyButton.module.css'

export const MyButton = ({children, ...props}) => {
    return (
        <button type="submit" className={style.myBtn} {...props}>
            {children}
        </button>
    );
};