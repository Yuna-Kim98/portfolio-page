import React from 'react';
import Img from '../commons/Img.jsx'

export default function HeaderIcon() {
    return (
        <div className="header__logo">
            <Img className="header__logo__img"
                img="images/my-notion-face-portrait.png"
                alt="logo"
            />
            <h1 className="header__logo__title">YuNa</h1>
        </div>
    );
}