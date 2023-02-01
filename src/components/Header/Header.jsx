import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onToggleButton} = useTelegram();
    return (
        <div className={'header'}>
            <Button onClick={onToggleButton}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;